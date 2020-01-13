/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package FacadeTests;

import DTO.DayPlanDTO;
import DTO.MenuPlanDTO;
import entities.DayPlan;
import entities.MenuPlan;
import entities.Role;
import entities.User;
import errorhandling.MealPlanException;
import facades.MealPlannerFacade;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import utils.EMF_Creator;

/**
 *
 * @author Martin
 */
public class MealPlannerFacadeTest {

    private static EntityManagerFactory emf;
    private static MenuPlan mp1;
    private static MenuPlan mp2;
    private static MealPlannerFacade MPF;

    public MealPlannerFacadeTest() {
    }

    @BeforeAll
    public static void setUpClass() {
        emf = EMF_Creator.createEntityManagerFactory(
                "pu",
                "jdbc:mysql://localhost:3307/EXAMEN_test",
                "dev",
                "ax2",
                EMF_Creator.Strategy.DROP_AND_CREATE);
        MPF = MealPlannerFacade.getUserFacade(emf);
        EntityManager em = emf.createEntityManager();
        User user = new User("user3", "12345");
        Role userRole = new Role("user");
        try {
            em.getTransaction().begin();
            em.persist(user);
            em.persist(userRole);
            em.getTransaction().commit();
        } catch (Exception e) {
        }
    }

    @AfterAll
    public static void tearDownClass() {
    }

    @BeforeEach
    public void setUp() {
        EntityManager em = emf.createEntityManager();
        Query q1 = em.createNamedQuery("DayPlan.deleteAllRows");
        Query q2 = em.createNamedQuery("MenuPlan.deleteAllRows");

        try {
            em.getTransaction().begin();
            q1.executeUpdate();
            q2.executeUpdate();
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }

    @Test
    public void TestnewDayPlan() {
        EntityManager em = emf.createEntityManager();
        try {
            DayPlan dp = MPF.newDayPlan("pasta", "mandag");
            assertNotNull(dp);

            long Count = (long) em.createQuery("SELECT COUNT(p) FROM DayPlan p").getSingleResult();
            assertEquals(Count, 1);
        } catch (MealPlanException ex) {
            fail();
        } finally {
            em.close();
        }
    }

    @Test
    public void TestNewMenuPlan() {
        DayPlan d11 = new DayPlan("Cheese and bacon stuffed pasta shells", "Monday");
        DayPlan d12 = new DayPlan("Moist garlic roasted chicken", "Tuesday");
        DayPlan d13 = new DayPlan("Tofu vindaloo", "Wednsday");
        User user;
        List<DayPlan> l1 = new ArrayList<>();
        l1.add(d11);
        l1.add(d12);
        l1.add(d13);
        EntityManager em = emf.createEntityManager();
        try {
            user = em.find(User.class, "user3");
            assertNotNull(user);
            MenuPlan mp = MPF.newMenuPlan("week 1", l1, user);
            assertNotNull(mp);
            long Count = (long) em.createQuery("SELECT COUNT(p) FROM DayPlan p").getSingleResult();
            assertEquals(Count, 3);
            Count = (long) em.createQuery("SELECT COUNT(p) FROM MenuPlan p").getSingleResult();
            assertEquals(Count, 1);
            assertNotNull(mp.getShoppinglist());
            User user2 = em.find(User.class, "user3");
            assertEquals(user2.getMenu_plans().size(), 1);
        } catch (MealPlanException ex) {
            fail();
        } finally {
            em.close();
        }
    }
/**
    @Test
    public void TestEditDP() {
        DayPlan d11 = new DayPlan("Cheese and bacon stuffed pasta shells", "Monday");
        DayPlan d12 = new DayPlan("Moist garlic roasted chicken", "Tuesday");
        DayPlan d13 = new DayPlan("Tofu vindaloo", "Wednsday");
        User user;
        List<DayPlan> l1 = new ArrayList<>();
        l1.add(d11);
        l1.add(d12);
        l1.add(d13);
        EntityManager em = emf.createEntityManager();
        try {
            user = em.find(User.class, "user3");
            assertNotNull(user);
            MenuPlan mp = MPF.newMenuPlan("week 1", l1, user);
            MenuPlan mp12 = MPF.newMenuPlan("week 2", l1, user);
            User user2 = em.find(User.class, "user3");
            assertEquals(user2.getMenu_plans().size(), 3);
        } catch (MealPlanException ex) {
            fail();
        } finally {
            em.close();
        }
        EntityManager nem = emf.createEntityManager();
        try {
            Long id = new Long("7");
            Long i2 = new Long("2");
            DayPlan p = nem.find(DayPlan.class, id);
            assertNotNull(p);
            DayPlanDTO dtop = new DayPlanDTO(p);
            p.setDay("nydag");
            MPF.editDayPlan(p.getId(), dtop);
            DayPlan p2 = nem.find(DayPlan.class, id);
            System.out.println(p2.getDay());
            user = nem.find(User.class, "user3");
            MenuPlan mmp = nem.find(MenuPlan.class, i2);
            System.out.println(mmp.getDayPlans().get(0).getDay());
        } catch (MealPlanException ex) {
            fail();
        } finally {
            nem.close();
        }
    }

 **/
}
// TODO add test methods here.
// The methods must be annotated with annotation @Test. For example:
//
// @Test
// public void hello() {}

