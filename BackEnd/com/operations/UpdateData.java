package com.higradius;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class UpdateData
 */
@WebServlet("/UpdateData")
public class UpdateData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out = response.getWriter();
		
		Long invoice_id = Long.parseLong(request.getParameter("invoice_id"));
		Double total_open_amount = Double.parseDouble(request.getParameter("total_open_amount")); 	    
	    String notes=request.getParameter("notes");
	    
	    try {
	    	Connection con = GetConnection.getCon();
			Statement st = con.createStatement();
			
			String query = "UPDATE invoice_details SET total_open_amount = "+ total_open_amount
    				+", notes = '"+ notes + "' WHERE invoice_id = "+ invoice_id;
    		System.out.println(query);
			st.executeUpdate(query);
    		st.close();
    		con.close();
	    }
	    catch(Exception e) {
	    	e.printStackTrace();
	    }
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
