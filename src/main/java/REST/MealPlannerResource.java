/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package REST;

import DTO.DayPlanDTO;
import DTO.MenuPlanDTO;
import DTO.msg;
import com.google.common.reflect.TypeToken;
import facades.UserFacade;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import utils.EMF_Creator;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import entities.DayPlan;
import entities.MenuPlan;
import entities.User;
import errorhandling.AuthenticationException;
import errorhandling.MealPlanException;
import facades.MealPlannerFacade;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import javax.annotation.security.RolesAllowed;
import javax.persistence.EntityManager;

import javax.ws.rs.POST;
import javax.ws.rs.core.SecurityContext;
import javax.servlet.http.HttpSession;
import javax.ws.rs.PathParam;

/**
 * REST Web Service
 *
 * @author Martin
 */
@Path("MealPlanner")
public class MealPlannerResource {

    @Context
    private UriInfo context;

    @Context
    SecurityContext securityContext;

    private static final EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory(
            "pu",
            "jdbc:mysql://localhost:3307/EXAMEN",
            "dev",
            "ax2",
            EMF_Creator.Strategy.CREATE);
    public static final MealPlannerFacade MPF = MealPlannerFacade.getUserFacade(EMF);
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    /**
     * Retrieves representation of an instance of REST.MealPlannerResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getAll() {
        //TODO return proper representation object
        List<MenuPlanDTO> mp = new ArrayList<>();
        List<MenuPlan> plans = MPF.getall();
        try {
            for (MenuPlan p : plans) {
                mp.add(new MenuPlanDTO(p));
            }
        } catch (Exception e) {
            return GSON.toJson(new msg(500, "Could not Contact Recipe Server"));
        }

        return GSON.toJson(mp);
    }

    @POST
    @Path("My")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson(String jsonString) {
        JsonObject json = new JsonParser().parse(jsonString).getAsJsonObject();
        String thisuser = json.get("user").getAsString();
        UserFacade UF = UserFacade.getUserFacade(EMF);
        try {
            User user = UF.getByName(thisuser);
            List<MenuPlanDTO> mp = new ArrayList<>();
            for (MenuPlan plan : user.getMenu_plans()) {
                mp.add(new MenuPlanDTO(plan));
            }
            return GSON.toJson(mp);
        } catch (AuthenticationException ex) {
            return GSON.toJson(new msg(500, "could not find data for " + thisuser));
        } catch (MealPlanException ex) {
            return GSON.toJson(new msg(500, "Could not Contact Recipe Server"));
        }
    }

    /**
     * PUT method for updating or creating an instance of MealPlannerResource
     *
     * @param content representation for the resource
     */
    @POST
    @Path("New")
    @Consumes(MediaType.APPLICATION_JSON)
    public String create(String jsonString) throws AuthenticationException {
        JsonObject json = new JsonParser().parse(jsonString).getAsJsonObject();
        String week = json.get("week").getAsString();
        User user;
        String thisuser = json.get("user").getAsString();
        Type userListType = new TypeToken<ArrayList<DayPlan>>() {
        }.getType();
        List<DayPlan> dp = GSON.fromJson(json.get("dayPlans").getAsJsonArray().toString(), userListType);
        UserFacade UF = UserFacade.getUserFacade(EMF);
        try {
            user = UF.getByName(thisuser);
        } catch (Exception e) {
            return GSON.toJson(new msg(500, "Could not find user data"));
        }
        try {

            MenuPlan mp = MPF.newMenuPlan(week, dp, user);
            User user2 = UF.getByName(thisuser);
            MenuPlan m = user2.getMenu_plans().get(user2.getMenu_plans().size() - 1);
            return GSON.toJson(new MenuPlanDTO(m));
        } catch (MealPlanException ex) {
            return GSON.toJson(new msg(500, "Error in Creating Mealplan, try again Later."));
        }

    }

    @Path("/{id}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String getById(@PathParam("id") String id) {
        EntityManager em = EMF.createEntityManager();
        MenuPlan mp = em.find(MenuPlan.class, new Long(id));
        return (mp.getShoppinglist().toString());

    }

    @POST
    @Path("Edit/MealPlan")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String editMP(String jsonString) throws AuthenticationException {
        JsonObject json = new JsonParser().parse(jsonString).getAsJsonObject();
        MenuPlanDTO mp = GSON.fromJson(json.get("mpDTO").getAsString(), MenuPlanDTO.class);
        try {
            MPF.editMenuPlan(mp.getId(), mp);
            return GSON.toJson(new msg(200, "Update Succesfull"));
        } catch (MealPlanException ex) {
            return GSON.toJson(new msg(500, "Error in Creating Mealplan, try again Later."));
        }
    }

    @POST
    @Path("Edit/DayPlan")
    @RolesAllowed("user")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String editDP(String jsonString) throws AuthenticationException {
        JsonObject json = new JsonParser().parse(jsonString).getAsJsonObject();
        DayPlanDTO dp = GSON.fromJson(json.get("dpDTO").getAsString(), DayPlanDTO.class);
        try {
            MPF.editDayPlan(dp.getId(), dp);
            return GSON.toJson(new msg(200, "Update Succesfull"));
        } catch (MealPlanException ex) {
            return GSON.toJson(new msg(500, "Update not Succesfull"));
        }
    }

    @POST
    @Path("Edit/Remove/DayPlan")
    @RolesAllowed("user")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String removeDP(String jsonString) throws AuthenticationException {
        JsonObject json = new JsonParser().parse(jsonString).getAsJsonObject();
        DayPlanDTO dp = GSON.fromJson(json.get("dpDTO").getAsString(), DayPlanDTO.class);

        try {
            MPF.editDayPlan(dp.getId(), dp);
            return GSON.toJson(new msg(200, "Update Succesfull"));
        } catch (MealPlanException ex) {
            return GSON.toJson(new msg(500, "Update not Succesfull"));
        }
    }

}
