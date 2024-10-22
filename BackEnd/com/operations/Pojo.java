package com.higradius;

public class Pojo {
	private String name_customer = null;
	private String cust_number = null;
	private Long invoice_id = null;
	private Double total_open_amount = null; 
	private String due_in_date = null;
    private String notes = null;
    
    
	

    public Pojo() {
		// TODO Auto-generated constructor stub
	}

	public String get_cust_number() {
		return cust_number;
	}

	public void set_cust_number(String cust_number) {
		this.cust_number = cust_number;
	}
	public String get_name_customer() {
		return name_customer;
	}

	public void set_name_customer(String name_customer) {
		this.name_customer = name_customer;
	}
	public Long get_invoice_id() {
		return invoice_id;
	}

	public void set_invoice_id(Long invoice_id) {
		this.invoice_id = invoice_id;
	}
	public Double get_total_open_amount() {
		return total_open_amount;
	}

	public void set_total_open_amount(Double total_open_amount) {
		this.total_open_amount = total_open_amount;
	}
	public String get_due_in_date() {
		return due_in_date;
	}

	public void set_due_in_date(String due_in_date) {
		this.due_in_date = due_in_date;
	}
	public void set_notes(String notes) {
		this.notes = notes;
	}
	public String get_notes() {
		return notes;
	}
}
