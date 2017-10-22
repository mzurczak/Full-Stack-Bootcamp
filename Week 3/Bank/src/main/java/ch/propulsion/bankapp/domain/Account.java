package ch.propulsion.bankapp.domain;

import java.util.concurrent.atomic.*;

import lombok.Data;

@Data
public class Account {
	
	static AtomicLong accountIdGenerator = new AtomicLong(0);
	final long accountNumber;
	private double balance;
	final long customerNumber;
	
	public Account(Customer customer) {
		this.accountNumber = accountIdGenerator.incrementAndGet();
		this.balance = 0;
		this.customerNumber = customer.getCustomerId();
	}

	public void changeBalance(double amount) {
		if ((amount<0) && this.getBalance()<(-amount))
			System.out.println("Not sufficient account balance");
		else this.balance += amount;
	}
	
	public String toString() {
		String output = "Account#: " + this.accountNumber 
				+ ", Balance: " + this.getBalance();
		return output;
	}
}