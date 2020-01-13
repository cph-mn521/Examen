/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

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

    public Recipe newRecipe() {
        EntityManager em = emf.createEntityManager();
        return null;
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

    public MenuPlan newMenuPlan(String week,List<DayPlan> dp,User owner) throws MealPlanException {
        EntityManager em = emf.createEntityManager();
        MenuPlan mp = new MenuPlan();
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
        System.out.println(L.size());
        HashMap<String, Integer> shoppingList = new HashMap<>();
        for (DayPlan dp : L) {
            recipeDTO r = RAF.getRecipe(dp.getRecipe());            
            for (String ingredient : r.getIngredients()) {
                shoppingList.put(ingredient,
                        (shoppingList.get(ingredient) != null)
                        ? shoppingList.get(ingredient) + 1 : 1);
            }
        }
        
        return shoppingList;
    }

}
