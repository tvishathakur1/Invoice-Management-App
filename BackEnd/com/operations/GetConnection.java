package com.higradius;
import java.sql.Connection;
import java.sql.DriverManager;

public class GetConnection {
	public static Connection getCon() {
		String url = "jdbc:mysql://localhost:3306/h2h_internshipn";
		String user = "root";
		String pass = "root";
		
		Connection con = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection(url,user,pass);
			if(con!=null) {
				System.out.println("Connection successful");
				
			}
			else {
				System.out.println("Connection not successful");
			}
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return con;  
	}
	
}
