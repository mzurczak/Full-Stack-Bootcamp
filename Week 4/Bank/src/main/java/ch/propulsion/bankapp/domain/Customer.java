package ch.propulsion.bankapp.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;


@Data
@EqualsAndHashCode
public class Customer{
	
	static AtomicLong customerIdGenerator = new AtomicLong(0);

	private final long customerId;
	private String firstName;
	private String lastName;
	private List<Account> customerAccount = new ArrayList<Account>();
//	private String password;
	
	public Customer(String firstName, String lastName) {
		this.customerId = customerIdGenerator.incrementAndGet();
		this.firstName = firstName;
		this.lastName = lastName;
//		this.customerAccount = ;
	}
	
	public List<Account> addAccount(Account account) {
		this.customerAccount.add(account);
		return this.customerAccount;
	}
	
//	public void debitAccount(double amount) {
//		//access to account repo
//		double balance = getCustomerAccount().getBalance();
//		if(balance >= amount) {
//			getCustomerAccount().changeBalance(-1*Math.abs(amount));
//		}else {
//			System.out.println("\n\n--Insufficient funds available--\n\n");
//		}
//	}
//	
//	public double accountBalance() {
//		return getCustomerAccount().getBalance();//access to account repo
//	}
	
	public String toString() {
		String output = "Customer: " + this.getFirstName() + " " + this.getLastName() + ", ID: " + getCustomerId()
						+ ", account(s): " + this.getCustomerAccount();
		return output;
	}
	
//	public void setPassword() {
//		System.out.format("%10s%1$s%10s", "Please assign a password");
//		System.out.println("(only letters and numbers - case sensitive)");
//		Scanner sc = new Scanner(System.in);
////		password = sc.nextLine();
//		//check for numbers and letters only
//		password = "password";
//		sc.close();
//	}
}