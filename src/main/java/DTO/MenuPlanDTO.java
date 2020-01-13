/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DTO;


import entities.DayPlan;
import entities.MenuPlan;
import errorhandling.MealPlanException;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Martin
 */
public class MenuPlanDTO implements Serializable{
    private String week,owner;
    private Long id;
    private List<DayPlanDTO> plans = new ArrayList<>();     

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public MenuPlanDTO(String week, String owner, Long id) {
        this.week = week;
        this.owner = owner;
        this.id = id;
    }
    
    public MenuPlanDTO(MenuPlan mp) throws MealPlanException{
        this.week = mp.getWeek();
        this.owner = mp.getUser().getUserName();  
        this.id = mp.getId();
        List<DayPlanDTO> p = new ArrayList<>();
        for (DayPlan dp : mp.getDayPlans()) {
            p.add(new DayPlanDTO(dp));
        }
        this.plans = p;
    }
    
    public String getWeek() {
        return week;
    }

    public void setWeek(String week) {
        this.week = week;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public List<DayPlanDTO> getPlans() {
        return plans;
    }

    public void setPlans(List<DayPlanDTO> plans) {
        this.plans = plans;
    }
    
    
    
}
