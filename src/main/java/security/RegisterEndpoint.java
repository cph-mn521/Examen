/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package security;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.nimbusds.jose.JOSEException;
import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.JWSHeader;
import com.nimbusds.jose.JWSSigner;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import entities.User;
import errorhandling.AuthenticationException;
import errorhandling.GenericExceptionMapper;
import java.util.Date;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import static security.LoginEndpoint.TOKEN_EXPIRE_TIME;
import static security.LoginEndpoint.USER_FACADE;

/**
 * REST Web Service
 *
 * @author Martin
 */
    @Path("register")
public class RegisterEndpoint {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of RegisterEndpoint
     */
    public RegisterEndpoint() {
    }

    /**
     * Retrieves representation of an instance of security.RegisterEndpoint
     *
     * @return an instance of java.lang.String
     */
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response Register(String jsonString) throws AuthenticationException {
        JsonObject json = new JsonParser().parse(jsonString).getAsJsonObject();
        String username = json.get("username").getAsString();
        String password = json.get("password").getAsString();
        String userRole = json.get("userRole").getAsString();
        try {
            User user = USER_FACADE.NewUser(username, password,userRole);
            String token = createToken(username, user.getRolesAsStrings());
            String role = user.getRolesAsStrings().get(0);
            JsonObject responseJson = new JsonObject();
            responseJson.addProperty("username", username);
            responseJson.addProperty("token", token);
            responseJson.addProperty("role", role);
            return Response.ok(new Gson().toJson(responseJson)).build();
        } catch (JOSEException | AuthenticationException ex) {
            if (ex instanceof AuthenticationException) {
                throw new AuthenticationException("Username already in use. Please try again");
            }
            Logger.getLogger(GenericExceptionMapper.class.getName()).log(Level.SEVERE, null, ex);
        }
        throw new AuthenticationException("Invalid username or password! Please try again");
    }

    private String createToken(String userName, List<String> roles) throws JOSEException {

        StringBuilder res = new StringBuilder();
        for (String string : roles) {
            res.append(string);
            res.append(",");
        }
        String rolesAsString = res.length() > 0 ? res.substring(0, res.length() - 1) : "";
        String issuer = "matheradical.dk";

        JWSSigner signer = new MACSigner(SharedSecret.getSharedKey());
        Date date = new Date();
        JWTClaimsSet claimsSet = new JWTClaimsSet.Builder()
                .subject(userName)
                .claim("username", userName)
                .claim("roles", rolesAsString)
                .claim("issuer", issuer)
                .issueTime(date)
                .expirationTime(new Date(date.getTime() + TOKEN_EXPIRE_TIME))
                .build();
        SignedJWT signedJWT = new SignedJWT(new JWSHeader(JWSAlgorithm.HS256), claimsSet);
        signedJWT.sign(signer);
        return signedJWT.serialize();

    }
}
