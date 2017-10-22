package ch.propulsion.bankapp.service;

import java.util.List;

import ch.propulsion.bankapp.domain.Account;
import ch.propulsion.bankapp.domain.Customer;

public interface BankServiceInterface {
	Account getAccountById(long accountId);
	Customer getCustomerById(long customerId);
	List<Account> findAllAccounts();
	List<Customer> findAllCustomers();
	void printCustomerReport(long customerId);
	Customer addCustomerToRepo(String firstName, String lastName);
	void addAccountToRepo(Account account);
//	boolean confirmCustomerInfo(long id, String password);
	void creditAccount(Account account, double amount);
	void removeCustomer(long id);
}