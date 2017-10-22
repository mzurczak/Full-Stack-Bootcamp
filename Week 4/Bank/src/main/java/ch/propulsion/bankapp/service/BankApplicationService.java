package ch.propulsion.bankapp.service;

import java.util.List;

import ch.propulsion.bankapp.domain.Account;
import ch.propulsion.bankapp.domain.Customer;
import ch.propulsion.bankapp.repository.AccountRepository;
import ch.propulsion.bankapp.repository.CustomerRepository;

public class BankApplicationService implements BankServiceInterface{
	
	CustomerRepository customersRepository  = new CustomerRepository();
	AccountRepository accountsRepository = new AccountRepository();

	@Override
	public Account getAccountById(long accountId) {
		
		return accountsRepository.getAccountById(accountId);
	}
	
	@Override
	public Customer getCustomerById(long customerId) {
		return customersRepository.findCustomerById(customerId);
	}
	
	@Override
	public List<Account> findAllAccounts() {
		return accountsRepository.findAll();
	}
	
	@Override
	public List<Customer> findAllCustomers() {
		return customersRepository.findAll();
	}
	
	@Override
	public void printCustomerReport(long customerId) {
		Customer currentCustomer = customersRepository.findCustomerById(customerId);
		List <Account> currentAccount = currentCustomer.getCustomerAccount();
		String accountStr = currentAccount.toString();
		System.out.println(accountStr);
	}
	
	@Override
	public Customer addCustomerToRepo(String firstName, String lastName) {
		Customer newCustomer = new Customer (firstName, lastName);
		customersRepository.addNewCustomer(newCustomer);
		newCustomer.getCustomerAccount().forEach(account -> accountsRepository.addAccount(account));
		return newCustomer;
	}
	
	@Override
	public void addAccountToRepo(Account account) {
		accountsRepository.addAccount(account);
	}
	
//	@Override
//	public boolean confirmCustomerInfo(long id, String password) {
//		boolean confirm = false;
//		if(getCustomerById(id).password == password) {
//			confirm = true;
//		}
//		return confirm;
//	}

	@Override
	public void creditAccount(Account account, double amount) {
		account.changeBalance(amount);
	}
	
	@Override
	public void removeCustomer(long id) {
		customersRepository.removeCustomerById(id);
	}
	
}