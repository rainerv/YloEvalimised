package projektylo;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.*;
import com.google.appengine.api.rdbms.AppEngineDriver;


import java.sql.*;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SuppressWarnings("serial")
public class ValimisedServlet extends HttpServlet {

	@Override
	public void doPost(HttpServletRequest req, HttpServletResponse resp)
	  throws IOException {
	   
	  PrintWriter out = resp.getWriter();
	  Connection c = null;
	    try {
	      DriverManager.registerDriver(new AppEngineDriver());
	      c = DriverManager.getConnection("jdbc:google:rdbms://ylovalimised10/projektylo10");
	      String eesnimi = req.getParameter("eesnimi");
	      String perenimi = req.getParameter("perenimi");
	      if (eesnimi == "" || perenimi == "") {
	        out.println("<html><head></head><body>You are missing either a message or a name! Try again! Redirecting in 3 seconds...</body></html>");
	      } else {
	      String statement ="INSERT INTO entries (guestName, content) VALUES( ? , ? )";
	      PreparedStatement stmt = c.prepareStatement(statement);
	      stmt.setString(1, eesnimi);
	      stmt.setString(2, perenimi);
	      int success = 2;
	      success = stmt.executeUpdate();
	      if(success == 1) {
	        out.println("<html><head></head><body>Success! Redirecting in 3 seconds...</body></html>");
	      } else if (success == 0) {
	        out.println("<html><head></head><body>Failure! Please try again! Redirecting in 3 seconds...</body></html>");
	      }
	     }
	    } catch (SQLException e) {
	        e.printStackTrace();
	    } finally {
	        if (c != null) 
	          try {
	            c.close();
	            } catch (SQLException ignore) {
	         }
	      } resp.setHeader("Refresh","3; url=/katse.jsp");
	  }
	
}
