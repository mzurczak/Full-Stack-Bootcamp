package ch.propulsion.bankapp.repository;

//import java.util.ArrayList;
import java.util.List;

import ch.propulsion.bankapp.domain.Customer;

public interface CustomerRepositoryInterface {
	Customer addNewCustomer(Customer customer);//Bank adds customer. An account is created by default
	List<Customer> findAll();
	Customer findCustomerById(long id);
	void removeCustomerById(long id);//check for amount in account - if greater than zero, throw error
	void displayCustomerInfo(long id);
//	void addNewAccountToCustomer(long id);//check for existing customer (by id), and add account if they exist
									//if they don't exist, throw error
}