package FacadeTests;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import DTO.recipeDTO;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import facades.RecepiAPIfacade;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 *
 * @author Martin
 */
public class RecepiAPITest {

    public RecepiAPITest() {
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
    public void testAllget() {
        try {
            RecepiAPIfacade RP = new RecepiAPIfacade();
            List<String> L = RP.getAllRecipe();
            assertTrue(L.size() > 0 && L != null);
        } catch (Exception ex) {
            assertTrue(false);
        }
    }

    @Test
    public void testGetSpecifik() {
        String search="Cheese and bacon stuffed pasta shells";
        try {
            RecepiAPIfacade RP = new RecepiAPIfacade();
            recipeDTO R =  RP.getRecipe(search);
            assertTrue(R != null && R.getId().contains(search));
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
            assertTrue(false);
        }
    }
    
    @Test 
    public void getAllSpecifik(){
        try {
            RecepiAPIfacade RP = new RecepiAPIfacade();
            List<String> L = RP.getAllRecipe();
            assertTrue(L.size() > 0 && L != null);
            for (String search : L) {
                recipeDTO R =  RP.getRecipe(search);
                assertTrue(R != null && R.getId().contains(search));
            }
        } catch (Exception ex) {
            assertTrue(false);
        }
    }

    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
    // @Test
    // public void hello() {}
}
