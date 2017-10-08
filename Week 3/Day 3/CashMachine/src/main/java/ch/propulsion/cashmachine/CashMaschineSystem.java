package ch.propulsion.cashmachine;

import java.util.Scanner;

public class CashMaschineSystem {

	static Scanner sc = new Scanner(System.in);
	
	public static boolean pinChecker(int pin, Customer customer) {
		if (pin == customer.getPin()) return true;
		else {
			System.out.println("Wrong PIN");
			return false;
		}
	}
	
	public static void cashMaschineMain(int action, Customer customer) {
		switch(action) {
		
		case 1:
			Display.accountBalanceInformation();
			System.out.println(customer.getAccountBalance());
			break;
			
		case 2:
			withdrawOperation(customer);
			break;
			
		case 3:
			paymentOperation(customer);
			break;
		}
		
	}

	private static void paymentOperation(Customer customer) {
		Display.payment();
		customer.payInMoney(sc.nextInt());
	}

	private static void withdrawOperation(Customer customer) {
		Display.withdrawScreen();
		switch(sc.nextInt()) {
			
			case 1:
				customer.deductMoney(20);
				break;
				
			case 2:
				customer.deductMoney(50);
				break;
				
			case 3:
				customer.deductMoney(100);
				break;
				
			case 4:
				customer.deductMoney(200);
				break;
				
			case 5:
				customer.deductMoney(500);
				break;
				
			case 6:
				System.out.println("How much do you want to withdraw?\n");
				customer.deductMoney(sc.nextInt());
				break;
				
			default: 
				System.out.println("Not valid");
				break;
			}
		}
}
