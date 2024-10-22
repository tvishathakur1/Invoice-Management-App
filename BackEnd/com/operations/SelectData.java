package com.higradius;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class SelectData {
	private static final ArrayList<Pojo> listData = new ArrayList<Pojo>();

	public static ArrayList<Pojo> getInvoiceData(int lim, int pg) {
		
		
		try {
			Connection con = GetConnection.getCon();
			int offset = lim*(pg-1);
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery("SELECT * FROM invoice_details LIMIT "+lim+" OFFSET "+offset+";");
			

			
			while(rs.next()) {
				
				/*Pojo data = new Pojo(rs.getString("cust_number"),rs.getString("name_customer"),rs.getString("due_in_date"),rs.getDouble("total_open_amount"),
						rs.getLong("invoice_id"),
						rs.getString("notes"));
						listData.add(data);*/
				
			}

			
			rs.close();
			st.close();
			con.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return listData;
	}
	
	public static ArrayList<Pojo> getInvoiceData(Long invoice_id){
		
		try {
			System.out.println("Inside parameterized getinvoice function");
			Connection con = GetConnection.getCon();
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery("SELECT * FROM invoice_details WHERE invoice_id = '%"+ invoice_id + "%'");
			
			while(rs.next()) {
				/*Pojo data = new Pojo(rs.getString("cust_number"),rs.getString("name_customer"),rs.getString("due_in_date"),rs.getDouble("total_open_amount"),
						rs.getLong("invoice_id"),
						rs.getString("notes"));
				listData.add(data);*/
			}
			st.close();
			con.close();
			
			con.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return listData;
	}

}
