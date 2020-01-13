/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package errorhandling;

/**
 *
 * @author Martin
 */
public class MealPlanException extends Exception{
    public MealPlanException(String msg){
        super(msg);
    }
    public MealPlanException(){
        super("Error has uccured in MealPlan");
    }
    
}
