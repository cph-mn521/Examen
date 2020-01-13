/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

import java.io.Serializable;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;

/**
 *
 * @author Martin
 */
@Entity
@NamedQueries({
    @NamedQuery(name = "DayPlan.getAll", query = "SELECT m FROM DayPlan m"),
    @NamedQuery(name = "DayPlan.deleteAllRows", query = "DELETE from DayPlan")})
public class DayPlan implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String recipe;
    // Overvej at bruge en datetime til den her.
    private String Day;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "menu_planID", referencedColumnName = "menu_planID")
    private MenuPlan plan;

    public DayPlan() {
    }
    public DayPlan(String recipe, String Day) {
        this.recipe = recipe;
        this.Day = Day;
    }


    public void setPlan(MenuPlan plan) {
        this.plan = plan;
    }
    
    public MenuPlan getPlan() {
        return plan;
    }


    public String getRecipe() {
        return recipe;
    }

    public void setRecipe(String recipe) {
        this.recipe = recipe;
    }

    public String getDay() {
        return Day;
    }

    public void setDay(String Day) {
        this.Day = Day;
    }
    
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof DayPlan)) {
            return false;
        }
        DayPlan other = (DayPlan) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entities.DayPlan[ id=" + id + " ]";
    }
    
}
