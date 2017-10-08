package ch.propulsion.cashmachine;

public class Customer {
	String name;
	int pin;
	int accountBalance;
	
	public void deductMoney(int i) {
		if (this.getAccountBalance()>i) {			
			this.setAccountBalance(this.getAccountBalance()-i);
		} 
		
		else Display.toLessMoney();
	}
	
	public void payInMoney(int ammount) {
		this.setAccountBalance(this.getAccountBalance()+ammount);
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	protected int getPin() {
		return pin;
	}
	public void setPin(int pin) {
		this.pin = pin;
	}
	public int getAccountBalance() {
		return accountBalance;
	}
	public void setAccountBalance(int accountBalance) {
		this.accountBalance = accountBalance;
	}
	
	

}
