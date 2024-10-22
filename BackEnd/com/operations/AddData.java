package com.higradius;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.Statement;
import java.text.SimpleDateFormat;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AddData
 */
@WebServlet("/AddData")
public class AddData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out = response.getWriter();
		
		String cust_number = request.getParameter("cust_number");
		String name_customer = request.getParameter("name_customer");
		//String due_in_date = request.getParameter("due_in_date");
		
		java.sql.Date due_in_date = null;
		try {
			java.util.Date dt = new SimpleDateFormat("dd/MM/yyyy").parse(request.getParameter("due_in_date"));
			due_in_date = new java.sql.Date(dt.getTime());
		} catch (Exception e1) {
			e1.printStackTrace();
		};
	
		
		String total_open_amount = request.getParameter("total_open_amount");
		Long invoice_id = Long.parseLong(request.getParameter("invoice_id"));
		String notes = request.getParameter("notes");
		
		
		/*Pojo pojo = new Pojo();
		pojo.setCust_number(cust_number);
		pojo.setName_customer(name_customer);
		pojo.setDue_in_date(due_in_date);
		pojo.setTotal_open_amount(Double.parseDouble(total_open_amount));
		pojo.setInvoice_id(Long.parseLong(invoice_id));
		//TODO: will there be any condition if this is null?
		pojo.setNotes(notes);
		
		int status = SavaData.save(pojo);
		if(status>0) {
			out.print("<p>data saved<p>");
			request.getRequestDispatcher("index.html").include(request,  response);
		}
		else {
			out.println("Error! Data not saved");
		}*/
		
		try {
			Connection con = GetConnection.getCon();
			Statement st = con.createStatement();
			String query = "insert into invoice_details"
    				+ "(name_customer,cust_number,invoice_id,total_open_amount,due_in_date,notes,doc_id)"
    				+ " values ('"+ name_customer + "','" + cust_number + "'," + invoice_id + ","
    				+ total_open_amount + ",'" + due_in_date + "','" + notes + "'," + invoice_id + ")";
    		System.out.println(query);
			st.executeUpdate(query);
    		st.close();
    		con.close();
					
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
		
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
