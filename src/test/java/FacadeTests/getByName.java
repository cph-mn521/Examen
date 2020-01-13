/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package FacadeTests;

import java.lang.reflect.Type;
import DTO.DayPlanDTO;
import DTO.msg;
import com.google.common.reflect.TypeToken;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entities.DayPlan;
import entities.Role;
import entities.User;
import facades.UserFacade;
import java.lang.reflect.Array;
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
        Gson GSON = new GsonBuilder().setPrettyPrinting().create();

        String s = "[{'weekday':'Mandag','recipe':'Slow cooker spicy chicken and bean soup'},{'weekday':'Tirsdag','recipe':'slow cooker beef stew'},{'weekday':'Onsdag','recipe':'Christmas Stollen'}]";
        Type userListType = new TypeToken<ArrayList<DayPlan>>() {
        }.getType();
        List<DayPlan> userArray = GSON.fromJson(s, userListType);  
        System.out.println(userArray.get(0).getRecipe());
        System.out.println(userArray.get(1).getRecipe());
        System.out.println(userArray.get(2).getRecipe());
        assertTrue(true);
    }
    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
    // @Test
    // public void hello() {}
}
