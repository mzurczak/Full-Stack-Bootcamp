package ch.propulsion.bankapp;

public class Display {

	
	static void userChooseDisplay() {
		System.out.println("\n\n=============================");
		System.out.println("||                         ||");
		System.out.println("||  Welcom to HEGNER Bank  ||");
		System.out.println("||                         ||");
		System.out.println("=============================\n\n");
		System.out.println("Choose your Profile: \n");
		System.out.println("1. Customer");
		System.out.println("2. Employee");
	}
	
	static void logInDisplay() {
		System.out.println("ID: ");
		System.out.println("Password: ");
	}
	
	static void spacing() {
		System.out.println("---------------");
 	}

	static void logInID() {
		spacing();
  		System.out.println("ID: ");
	}
	
	static void logInPassword() {
		spacing();
  		System.out.println("Password: ");
  	}
	
	static void customerFirstName() {
		spacing();
		System.out.println("What is your first name?");
	}
	
	static void customerLastName() {
		spacing();
		System.out.println("What is your last name?");
	}
	
	static void customerMainManuDisplay() {
		System.out.println("\nChoose what you want to do: ");
		System.out.println("1. Display information about account.");
		System.out.println("2. Display all your accounts.");
		System.out.println("3. Debit account.");
		System.out.println("4. Log out.");
	}
	
	static void employeeMainManuDisplay() {
		System.out.println("\nChoose what you want to do: ");
		System.out.println("1. Create new customer.");
		System.out.println("2. Get information about customer.");
		System.out.println("3. Manage customer.");
		System.out.println("4. List all customers and accounts");
		System.out.println("5. Log out.");
	}
	
	static void manageCustomerDisplay() {
		System.out.println("Choose what you want to do: ");
		System.out.println("1. Debit customer.");
		System.out.println("2. Credit customer.");
		System.out.println("3. Delete customer.");
	}
	
	static void invalidOptionDisplay() {
		System.out.println("######################");
		System.out.println("//\\\\Invalid choice//\\\\");
		System.out.println("######################");
	}
	
	
}
