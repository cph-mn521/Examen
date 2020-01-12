/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package UserFacadeTest;

import DTO.msg;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entities.Role;
import entities.User;
import facades.UserFacade;
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
public class getByName {

    public getByName() {
    }

    @BeforeAll
    public static void setUpClass() {
    }

    @AfterAll
    public static void tearDownClass() {
    }

    @BeforeEach
    public void setUp() {
    }

    @AfterEach
    public void tearDown() {
    }

    @Test
    public void testAFacadeMethod() {
        EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory(EMF_Creator.DbSelector.DEV, EMF_Creator.Strategy.CREATE);
        UserFacade USER_FACADE = UserFacade.getUserFacade(EMF);
        Gson gson = new Gson();
        try {
            User u = USER_FACADE.getByName("user");
            System.out.println(u.getRolesAsStrings());
            User u2 = USER_FACADE.getByName("user_admin");
            System.out.println(u.getRolesAsStrings());
            System.out.println(gson.toJson(new msg(0, "hello")));

            EntityManagerFactory emf = EMF_Creator.createEntityManagerFactory(EMF_Creator.DbSelector.DEV, EMF_Creator.Strategy.DROP_AND_CREATE);
            EntityManager em = emf.createEntityManager();
            User user = new User("test12", "userpw");
            Role userRole = new Role("user");
            user.addRole(userRole);
            em.getTransaction().begin();
            em.persist(user);
            em.getTransaction().commit();
            
            assertTrue(true);
        } catch (Exception e) {
            assertTrue(false);
        }

    }
    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
    // @Test
    // public void hello() {}
}
