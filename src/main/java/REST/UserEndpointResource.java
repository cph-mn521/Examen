/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package REST;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entities.User;
import errorhandling.AuthenticationException;
import facades.UserFacade;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;
import utils.EMF_Creator;

/**
 * REST Web Service
 *
 * @author Martin
 */
@Path("userEndpoint")
public class UserEndpointResource {



    @Context
    private UriInfo context;

    /**
     * Creates a new instance of UserEndpointResource
     */
    public UserEndpointResource() {
    }

    /**
     * Retrieves representation of an instance of REST.UserEndpointResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() throws AuthenticationException {
        //TODO return proper representation object
        
        return "Reeee";
    }

    /**
     * PUT method for updating or creating an instance of UserEndpointResource
     *
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
}
