/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package REST;

import DTO.msg;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import facades.RecepiAPIfacade;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import java.util.concurrent.ExecutionException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Martin
 */
@Path("recepies")
public class RecepiesResource {
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();
    @Context
    private UriInfo context;

    /**
     * Creates a new instance of RecepiesResource
     */
    public RecepiesResource() {
    }

    /**
     * Retrieves representation of an instance of REST.RecepiesResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
                RecepiAPIfacade RAF = new RecepiAPIfacade();
        try {
            return GSON.toJson(RAF.getAllRecipe());
        } catch (InterruptedException | ExecutionException ex) {
            return GSON.toJson(new msg(500, "mistede kontakt med servern"));
        } 
    }

    @Path("/{id}")
    @GET
    @Produces({MediaType.APPLICATION_JSON}) 
    @Operation(summary = "A method that is a simple get example with a parameter.",
            tags = {"GET"},
            description = "Returns a message if logged in as user ",
            responses = {
                @ApiResponse(description = "Response",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = msg.class))),
                @ApiResponse(responseCode = "404", description = "Not a integer parameter"),
                @ApiResponse(responseCode = "200", description = "succes")
            })
    public String getById(@PathParam("id") String id) {
        RecepiAPIfacade RAF = new RecepiAPIfacade();
        try {
            return GSON.toJson(RAF.getRecipe(id));
        } catch (InterruptedException | ExecutionException ex) {
            return GSON.toJson(new msg(500, "mistede kontakt med servern"));
        } 
        

    }
}
