package DTO;

import entities.DayPlan;
import errorhandling.MealPlanException;
import facades.RecepiAPIfacade;
import java.io.Serializable;
import java.util.concurrent.ExecutionException;
import java.util.logging.Level;
import java.util.logging.Logger;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Martin
 */
public class DayPlanDTO implements Serializable {
    private String weekday;
    private recipeDTO recipe;
    private Long id;

    public DayPlanDTO(String weekday, recipeDTO recipe, Long id) {
        this.weekday = weekday;
        this.recipe = recipe;
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    
    
    public DayPlanDTO(DayPlan plan) throws MealPlanException {
        this.weekday = plan.getDay();
        this.id=plan.getId();
        RecepiAPIfacade RAF = new RecepiAPIfacade();
        try {
            this.recipe = RAF.getRecipe(plan.getRecipe());
        } catch (InterruptedException | ExecutionException ex) {
            throw new MealPlanException("Recipe not found");
        } 
    }

    
    
    public String getWeekday() {
        return weekday;
    }

    public void setWeekday(String weekday) {
        this.weekday = weekday;
    }

    public recipeDTO getRecipe() {
        return recipe;
    }

    public void setRecipe(recipeDTO recipe) {
        this.recipe = recipe;
    }
    
    
}
