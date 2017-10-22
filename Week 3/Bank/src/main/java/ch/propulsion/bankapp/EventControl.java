package ch.propulsion.bankapp;

import java.util.Scanner;
//import java.awt.List;
//import java.lang.reflect.Array;

import ch.propulsion.bankapp.domain.Account;
import ch.propulsion.bankapp.domain.Customer;
import ch.propulsion.bankapp.service.BankApplicationService;


public class EventControl {
	
	static BankApplicationService service = new BankApplicationService();
	static Scanner sc = new Scanner(System.in);
	
//	public static void userChooseFunction() {
//		Display.userChooseDisplay();
//		int option = sc.nextInt();
//		if (option == 1 && userCheck()) {
//			customerConfirmation();
//		}
//		else if (option == 2) {
//			employeeConfirmation();
//		}
//		else {
//			Display.invalidOptionDisplay();
//			userChooseFunction();
//		}
//	}
	
	static boolean userCheck() {
		if(service.findAllCustomers().isEmpty()) {
			System.out.println("\n\nThere aren´t any customers\n\n");
			return false;	}
		else return true;
	}
	
	static long whichUser() {
		Display.logInID();
		return sc.nextLong();
	}
//
//	private static void employeeConfirmation() {
//		int mistakes = 0;
//		while (mistakes<3) {
////			Display.logInDisplay();
////			Long id = sc.nextLong();
////			String password = sc.nextLine();
//			if (true) employeeMainManu();
////			else {
////				System.out.println("Invalid ID or password");
////				System.out.println((3-mistakes) + " attempt left.");
////				mistakes++;
////			}			
//		}
//		userChooseFunction();
//	}

//	private static void customerConfirmation() {
//		int mistake = 0;
//		while (mistake<3) {
//			System.out.println("ID: ");
//			Long id = sc.nextLong();
//			System.out.println("Password: ");
//			String password = sc.nextLine();
//			if (service.confirmCustomerInfo(id, password)) customerMainManu(id);
//			else {
//				System.out.println("Invalid ID or password");
//				System.out.println(3-mistake + " attempt left.");
//				mistake++;
//			}					
//		}
//		userChooseFunction();
//	}
//	
//	private static void customerMainManu(long id) {
//		Display.customerMainManuDisplay();
//		int option;
//		option = sc.nextInt();
//		while (option!=4) {
//			switch (option) {
//			
//			case 1: 
//				accountInformation();
//				break;
//			case 2:
////				service.displayAllAccounts();
//				break;
//			case 3: 
//				debitAccount(id);
//				break;
//			case 4:
//				option = 4;
//			default:
//				System.out.println("You choosed wrong option, try again");
//				
//			}
//			
//		}
//	}


	public static void employeeMainManu() {
		Display.employeeMainManuDisplay();
		int option = 0;
		
		while (option!=5) {
			switch (sc.nextInt()) {
			
			case 1: //Create new customer
				createNewCustomer();
				break;
			case 2: // Get info about customer
				accountInformation();
				break;
			case 3: //manage customer
				manageCustomer();
				break;
			case 4: //List all
				displayAllAccounts();
				break;
			case 5: // Credit account
				option = 5;
				break;
			default:
				Display.invalidOptionDisplay();
			}
		}
		System.exit(0);
	}

	private static void createNewCustomer() {
		System.out.println("\nWelcome new user!\n");
		Display.customerFirstName();
		String first = sc.next();
		Display.customerLastName();
		String last = sc.next();
		Customer newCustomer = service.addCustomerToRepo(first, last);
		System.out.println("\n\nUser info:\n");
		
		long id = newCustomer.getCustomerId();
		System.out.println(service.getAccountById(id).toString() + "\n\n");
		employeeMainManu();
	}	
	
	private static void accountInformation() {
		if(userCheck()) {
			long id = whichUser();
			service.printCustomerReport(id);
		}
		employeeMainManu();
	}
	
	private static void manageCustomer() {
		if (userCheck()) {
			long id = whichUser();
			Display.manageCustomerDisplay();
			int opt = sc.nextInt();
			if (opt == 1) debitAccount(id);
			else if (opt == 2) creditAccount(id);
			else if (opt == 3) deleteCustomer(id);
			else Display.invalidOptionDisplay();
		}
		employeeMainManu();
	}
	
	private static void debitAccount(long id) {
		if(userCheck()) {
			Customer current = service.getCustomerById(id);
			Account account = setAccount(current);
			System.out.println("Debit account: ");
			double balance = account.getBalance();
			System.out.println("Amount Available: " + balance);
			System.out.println("--------");
			System.out.print("Input amount: ");
			double amount = sc.nextDouble();
			service.creditAccount(account, -amount);
		}
		employeeMainManu();
	}

	private static Account setAccount(Customer current) {
		Account account;
		if (current.getCustomerAccount().size()>2) {
			System.out.println("Choose account you want to debit: ");
			current.getCustomerAccount().toString();
			long accountId = sc.nextLong();
			account = service.getAccountById(accountId);
		} else account = current.getCustomerAccount().get(0);
		return account;
	}
	
	private static void creditAccount(long id) {
		if(userCheck()) {
			Customer current = service.getCustomerById(id);
			Account account = setAccount(current);
			System.out.println("\nCredit account: ");
			System.out.println("--------");
			System.out.print("Input amount: ");
			double amount = sc.nextDouble();
			service.creditAccount(account, amount);
		}
		employeeMainManu();
	}

	private static void displayAllAccounts() {
//		service.findAllAccounts();
		if(userCheck()) {
			service.findAllCustomers().forEach(customer -> System.out.println(customer.toString()));
		}
		employeeMainManu();		
	}
	
	private static void deleteCustomer(long id) {
		if(userCheck()) {
			service.removeCustomer(id);
		}
		employeeMainManu();
	}
	
	
//	sc.close();
}
