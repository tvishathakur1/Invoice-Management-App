package com.higradius;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
//import com.highradius.FetchService;
//import com.highradius.FetchedInvoiceList;
import com.higradius.FetchedInvoiceList;
import com.higradius.FetchService;

/**
 * Servlet implementation class ShowData
 */
@WebServlet("/ShowData")
public class ShowData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ShowData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
				String params = request.getQueryString(); 
				
				int currPage = Integer.parseInt(params.split("&")[0].split("=")[1]);
				int size = Integer.parseInt(params.split("&")[1].split("=")[1]);
				
				FetchService df = new FetchService();
				FetchedInvoiceList invList = df.getInvoices(currPage, size);
				Gson gson = new Gson();
				String data = gson.toJson(invList);
				PrintWriter out = response.getWriter();
				response.setContentType("application/json");
				response.setCharacterEncoding("UTF-8");
				out.print(data);
				out.flush();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}