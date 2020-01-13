/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import DTO.recipeDTO;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import errorhandling.ReeQuestException;
import java.net.MalformedURLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import utils.ReeQuest;

/**
 *
 * @author Martin
 */
public class RecepiAPIfacade {

    private static ReeQuest RQ;
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    public RecepiAPIfacade() {
        try {
            RQ = new ReeQuest("Recipe API", "http://46.101.217.16:4000");
        } catch (Exception e) {
            System.out.println("reeee");
        }
    }

    public recipeDTO getRecipe(String name) throws InterruptedException, ExecutionException {
        String path = "recipe/"+name.replace(" ", "%20");
        Map<String, String> params = new HashMap();
        ExecutorService executor = Executors.newWorkStealingPool();
        Future<String> SearchFuture;
        Callable<String> Search = () -> {
            try {
                return RQ.getRequest(path, params, "", null, "GET");
            } catch (ReeQuestException e) {
                return e.getMessage();
            }
        };
        SearchFuture = executor.submit(Search);
        recipeDTO Recipe = GSON.fromJson(SearchFuture.get(), recipeDTO.class);
        return Recipe;
    }
//

    public List<String> getAllRecipe() throws InterruptedException, ExecutionException {
        String path = "allRecipes";
        Map<String, String> params = new HashMap();
        ExecutorService executor = Executors.newWorkStealingPool();
        Future<String> SearchFuture;
        Callable<String> Search = () -> {
            try {
                return RQ.getRequest(path, params, "", null, "GET");
            } catch (ReeQuestException e) {
                return e.getMessage();
            }
        };
        SearchFuture = executor.submit(Search);
        List<String> Recipes = GSON.fromJson(SearchFuture.get(), List.class);
        return Recipes;
    }

}
