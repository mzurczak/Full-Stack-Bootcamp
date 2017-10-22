package ch.propulsion.bankapp.repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import ch.propulsion.bankapp.domain.Account;
import ch.propulsion.bankapp.domain.Customer;
import lombok.Data;

@Data
public class CustomerRepository implements CustomerRepositoryInterface{
	Map<Long, Customer> customers = new HashMap<>();
	
	@Override
	public Customer addNewCustomer(Customer customer) {
		Account account = new Account(customer);
		customer.getCustomerAccount().add(account);
		customers.put(customer.getCustomerId(), customer);
		return customer;
	}
	
	@Override
	public List<Customer> findAll() {
		return new ArrayList<>(customers.values());
	}

	@Override
	public Customer findCustomerById(long id) {
		return customers.get(id);
	}

	@Override
	public void removeCustomerById(long id) {
		Customer customer = findCustomerById(id);
		if(customer.getCustomerAccount().stream().allMatch(acc -> acc.getBalance() == 0)) {
			customers.remove(id);
		} else {
			System.out.println("Account cannot be deleted with a positive balance.");
		}
	}

//	@Override
//	public void addCreditToAccount(long customerId, double amount) {//(long customerId, long accountId, double amount) {
//		Customer currentCustomer = customers.get(customerId);
////		Account currentAccount = currentCustomer.customerAccounts.get(accountId);
//		currentCustomer.customerAccount.changeBalance(amount);
//	}

	@Override
	public void displayCustomerInfo(long id) {
		Customer currentCustomer = customers.get(id);
		currentCustomer.toString();
	}
	
//	@Override
//	public void addNewAccountToCustomer(long id) {
//		// TODO Auto-generated method stub
////		return null;
//	}
	
}