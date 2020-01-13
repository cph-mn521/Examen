/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package EntityTest;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import entities.DayPlan;
import entities.MenuPlan;
import entities.Role;
import entities.User;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
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
public class CollectiveTest {

    private static EntityManagerFactory emf;
    private static MenuPlan mp1;
    private static MenuPlan mp2;

    public CollectiveTest() {
    }

    @BeforeAll
    public static void setUpClass() {
        emf = EMF_Creator.createEntityManagerFactory(
                "pu",
                "jdbc:mysql://localhost:3307/EXAMEN_test",
                "dev",
                "ax2",
                EMF_Creator.Strategy.DROP_AND_CREATE);
        mp1 = new MenuPlan("1");
        DayPlan d11 = new DayPlan("Cheese and bacon stuffed pasta shells", "Monday");
        DayPlan d12 = new DayPlan("Moist garlic roasted chicken", "Tuesday");
        DayPlan d13 = new DayPlan("Tofu vindaloo", "Wednsday");
        List<DayPlan> l1 = new ArrayList<>();
        l1.add(d11);
        l1.add(d12);
        l1.add(d13);
        mp1.setDayPlans(l1);

    }

    @AfterAll
    public static void tearDownClass() {
    }

    @BeforeEach
    public void setUp() {
        EntityManager em = emf.createEntityManager();
        User user1 = new User("user1", "123");
        User user2 = new User("user2", "1234");
        User user3 = new User("user3", "12345");
        Role userRole = new Role("user");
        Role adminRole = new Role("admin");
        user1.addRole(userRole);
        user2.addRole(userRole);
        user3.addRole(userRole);
        try {
            em.getTransaction().begin();
            mp1 = new MenuPlan("1");
            DayPlan d11 = new DayPlan("Cheese and bacon stuffed pasta shells", "Monday");
            DayPlan d12 = new DayPlan("Moist garlic roasted chicken", "Tuesday");
            DayPlan d13 = new DayPlan("Tofu vindaloo", "Wednsday");
            List<DayPlan> l1 = new ArrayList<>();
            
            l1.add(d11);
            l1.add(d12);
            l1.add(d13);
            mp1.setDayPlans(l1);
            user1.addToMenu_plans(mp1);
            em.persist(userRole);
            em.persist(adminRole);
            em.persist(user1);
            em.persist(user2);
            em.persist(user3);
            em.persist(mp1);
            //em.persist(mp2);
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }

    @Test
    public void test1() {
        assertTrue(true);
    }
    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
    // @Test
    // public void hello() {}
}
