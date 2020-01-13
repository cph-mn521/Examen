/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DTO;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Martin
 */
public class recipeDTO implements Serializable {
    private String id,description, prep_time;
    private List<String> ingredients = new ArrayList();
    private List<String> preparaion_steps = new ArrayList();

    public recipeDTO(String id, String description, String prep_time) {
        this.id = id;
        this.description = description;
        this.prep_time = prep_time;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPrep_time() {
        return prep_time;
    }

    public void setPrep_time(String prep_time) {
        this.prep_time = prep_time;
    }

    public List<String> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<String> ingredients) {
        this.ingredients = ingredients;
    }

    public List<String> getPreparaion_steps() {
        return preparaion_steps;
    }

    public void setPreparaion_steps(List<String> preparaion_steps) {
        this.preparaion_steps = preparaion_steps;
    }

    @Override
    public String toString() {
        return "recipeDTO{" + "id=" + id + ", description=" + description + ", prep_time=" + prep_time + ", ingredients=" + ingredients + ", preparaion_steps=" + preparaion_steps + '}';
    }


}
