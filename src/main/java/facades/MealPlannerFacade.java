/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import DTO.DayPlanDTO;
import DTO.MenuPlanDTO;
import DTO.recipeDTO;
import entities.DayPlan;
import entities.MenuPlan;
import entities.Recipe;
import entities.User;
import errorhandling.AuthenticationException;
import errorhandling.MealPlanException;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.RollbackException;

/**
 *
 * @author Martin
 */
public class MealPlannerFacade {

    private static EntityManagerFactory emf;
    private static MealPlannerFacade instance;

    private MealPlannerFacade() {
    }

    /**
     *
     * @param _emf
     * @return the instance of this facade.
     */
    public static MealPlannerFacade getUserFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new MealPlannerFacade();

        }
        return instance;
    }

    public List getall() {
        EntityManager em = emf.createEntityManager();
        try {
            return em.createNamedQuery("MenuPlan.getAll").getResultList();
        } finally {
            em.close();
        }
    }

    public Recipe newRecipe() {
        EntityManager em = emf.createEntityManager();

        return null;
    }

    public void editDayPlan(Long id, DayPlanDTO dp) throws MealPlanException {
        EntityManager em = emf.createEntityManager();
        DayPlan dpManaged = em.find(DayPlan.class, id);
        dpManaged.setDay(dp.getWeekday());
        dpManaged.setRecipe(dp.getRecipe().getId());
        em.getTransaction().begin();
        em.merge(dpManaged);
        em.getTransaction().commit();

        try {
            updShoppingList(dpManaged.getPlan().getId());
        } catch (MealPlanException ex) {
            throw new MealPlanException();
        } finally {
            em.close();
        }

    }

    public void updShoppingList(long id) throws MealPlanException {
        EntityManager em = emf.createEntityManager();
        MenuPlan mpManaged = em.find(MenuPlan.class, id);
        HashMap<String, Integer> map;
        try {
            map = calcShoppingList(mpManaged.getDayPlans());
            mpManaged.setShoppinglist(map);
            em.getTransaction().begin();
            em.merge(mpManaged);
            em.getTransaction().commit();
        } catch (InterruptedException | ExecutionException ex) {
            throw new MealPlanException();
        }

    }

    public void editMenuPlan(Long id, MenuPlanDTO mp) throws MealPlanException {
        EntityManager em = emf.createEntityManager();
        MenuPlan mpManaged = em.find(MenuPlan.class, id);
        mpManaged.setWeek(mp.getWeek());
        HashMap<String, Integer> map;
        try {
            map = calcShoppingList(mpManaged.getDayPlans());
            mpManaged.setShoppinglist(map);
            em.getTransaction().begin();
            em.merge(mpManaged);
            em.getTransaction().commit();
        } catch (InterruptedException ex) {
            Logger.getLogger(MealPlannerFacade.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ExecutionException ex) {
            Logger.getLogger(MealPlannerFacade.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

    public DayPlan newDayPlan(String recipe, String Day) throws MealPlanException {
        EntityManager em = emf.createEntityManager();
        DayPlan dp = new DayPlan(recipe, Day);
        try {
            em.getTransaction().begin();
            em.persist(dp);
            em.getTransaction().commit();
        } catch (RollbackException e) {
            throw new MealPlanException("Username already exists");
        } finally {
            em.close();
        }
        return dp;
    }
//

    public MenuPlan newMenuPlan(String week, List<DayPlan> dp, User owner) throws MealPlanException {
        EntityManager em = emf.createEntityManager();
        MenuPlan mp = new MenuPlan();
        mp.setWeek(week);
        mp.setUser(owner);
        mp.setDayPlans(dp);
        owner.addToMenu_plans(mp);
        try {
            HashMap<String, Integer> map = calcShoppingList(dp);
            mp.setShoppinglist(map);

        } catch (InterruptedException | ExecutionException ex) {
            throw new MealPlanException();
        }
        try {
            em.getTransaction().begin();
            em.merge(owner);
            em.getTransaction().commit();
        } catch (RollbackException e) {
            throw new MealPlanException("Meal plan for select Week already exists");
        } finally {
            em.close();
        }
        return mp;
    }

    private HashMap<String, Integer> calcShoppingList(List<DayPlan> L) throws InterruptedException, ExecutionException {
        RecepiAPIfacade RAF = new RecepiAPIfacade();
        HashMap<String, Integer> shoppingList = new HashMap<>();
        for (DayPlan dp : L) {
            try {
                recipeDTO r = RAF.getRecipe(dp.getRecipe());
                for (String ingredient : r.getIngredients()) {
                    shoppingList.put(ingredient,
                            (shoppingList.get(ingredient) != null)
                            ? shoppingList.get(ingredient) + 1 : 1);
                }
            } catch (Exception e) {
                continue;
            }
        }
        return shoppingList;
    }

}
