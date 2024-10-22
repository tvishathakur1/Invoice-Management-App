package com.higradius;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
//import java.util.Date;

import com.higradius.Pojo;
import com.higradius.FetchedInvoiceList;

public class FetchService {
	
	public FetchedInvoiceList getInvoices(int currPage, int limit) {
		
		Connection dbCon = GetConnection.getCon();
		PreparedStatement pstmt = null;
		String query = "SELECT name_customer, cust_number, doc_id, total_open_amount, due_in_date from invoice_details WHERE isOpen = 1 LIMIT ?, ?";
		SimpleDateFormat sdf = new SimpleDateFormat("dd-MMM-yyyy");
		
		int start = currPage * limit - limit;
		
		FetchedInvoiceList invList = new FetchedInvoiceList();
		ArrayList<Pojo> obList = new ArrayList<>(); 
		
		try {
			pstmt = dbCon.prepareStatement(query);
			
			pstmt.setInt(1, start);
			pstmt.setInt(2,  limit);
			
			ResultSet rs = pstmt.executeQuery();
			
			while(rs.next()) {
				Pojo fetchInv = new Pojo();
				fetchInv.set_cust_number(rs.getString("cust_number"));
				fetchInv.set_name_customer(rs.getString("name_customer"));
				fetchInv.set_invoice_id(rs.getLong("doc_id"));
				fetchInv.set_total_open_amount(rs.getDouble("total_open_amount"));
				fetchInv.set_due_in_date(sdf.format(rs.getDate("due_in_date")));
				
				obList.add(fetchInv);
			}
			invList.setInvoices(obList);
			
			dbCon.close();
			pstmt.close();
		}
		catch(SQLException s) {
			System.out.println("Uh-oh!! Something went wrong in our Database");
			//s.printStackTrace();
		}
		catch(Exception e) {
			System.out.println("Uh-oh!! All we know is something went wrong on our side.");
			//e.printStackTrace();
		}
		return invList;
	}

}
