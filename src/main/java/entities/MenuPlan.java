/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;

/**
 *
 * @author Martin
 */
@Entity
@NamedQueries({
    @NamedQuery(name = "MenuPlan.getAll", query = "SELECT m FROM MenuPlan m"),
    @NamedQuery(name = "MenuPlan.deleteAllRows", query = "DELETE from MenuPlan")})
public class MenuPlan implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "menu_planID")
    private Long id;
    //Lav den her til en datetime
    private String Week;
    //Lav den her til en map på et tidspunkt.
    private HashMap<String, Integer> shoppinglist = new HashMap<String, Integer>();
    @OneToMany(
        mappedBy = "plan",
        cascade = CascadeType.ALL
    )    
    private List<DayPlan> DayPlans = new ArrayList();

    @ManyToOne
    @JoinColumn(name = "user_name", referencedColumnName = "user_name")
    private User creator;
    
    public MenuPlan() {
    }

    public String getWeek() {
        return Week;
    }

    public void setWeek(String Week) {
        this.Week = Week;
    }

    public User getUser() {
        return creator;
    }

    public void setUser(User user) {
        this.creator = user;
    }

    
    public MenuPlan(Long id, String Week) {
        this.id = id;
        this.Week = Week;
    }

    public MenuPlan(String Week) {
        this.Week = Week;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public HashMap<String, Integer> getShoppinglist() {
        return shoppinglist;
    }

    public void setShoppinglist(HashMap<String, Integer> map) {
        this.shoppinglist = map;
    }

    public List<DayPlan> getDayPlans() {
        return DayPlans;
    }

    public void setDayPlans(List<DayPlan> DayPlans) {
        this.DayPlans = DayPlans;
        for (DayPlan dp : DayPlans) {
            dp.setPlan(this);
        }
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
        if (!(object instanceof MenuPlan)) {
            return false;
        }
        MenuPlan other = (MenuPlan) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entities.MenuPlan[ id=" + id + " ]";
    }

}
