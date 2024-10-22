package com.higradius;

import java.util.List;
public class FetchedInvoiceList {
	
	private List<Pojo> invoices;

	public List<Pojo> getInvoices(){
		return invoices;
	}
	
	public void setInvoices(List<Pojo> invoices){
		this.invoices = invoices;
	}

}