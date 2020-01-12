/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

import java.io.Serializable;
import javax.enterprise.inject.Default;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

/**
 *
 * @author Martin
 */
@Entity
public class Adress implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @NotNull
    @Column(name = "Adress", length = 25)
    private String Adress;
    @NotNull
    @Column(name = "Zipcode", length = 25)
    private int zip;
    @Basic(optional = true)
    @Column(name = "Apartment", length = 25)
    private String Apartment;

    public Adress() {
    }
    
    public Adress(String Adress, int zip, String Apartment) {
        this.Adress = Adress;
        this.zip = zip;
        this.Apartment = Apartment;
    }

    
        public Adress(String Adress, int zip) {
        this.Adress = Adress;
        this.zip = zip;
        this.Apartment = null;
    }

    @Override
    public String toString() {
        return "Adress{" + "Adress=" + Adress + ", zip=" + zip + ", Apartment=" + Apartment + '}';
    }
    
    
}
