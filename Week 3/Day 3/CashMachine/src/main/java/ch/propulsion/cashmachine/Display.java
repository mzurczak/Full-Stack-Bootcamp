package ch.propulsion.cashmachine;

public class Display {

	public static void welcomeDisplay() {
		System.out.println("==================================");
		System.out.println("= Welcome to the Propulsion Bank =");
		System.out.println("==================================");
	}
	
	public static void confirmationDisplay () {
		System.out.println("GIVE YOUR PIN: ");
	}
	
	public static void mainMenu () {
		System.out.println("1. Check your ballance");
		System.out.println("2. Withdraw");
		System.out.println("3. Payment");
		System.out.println("4. Exit");
	}

	public static void accountBalanceInformation() {
		System.out.println(" Your current balance: ");
	}

	public static void withdrawScreen() {
		System.out.println("1. 20 CHF");
		System.out.println("2. 50 CHF");
		System.out.println("3. 100 CHF");
		System.out.println("4. 200 CHF");
		System.out.println("5. 500 CHF");
		System.out.println("6. OTHER");
	}

	public static void payment() {
		System.out.println("How much do you want to pay in?");
		
	}
	
	public static void toLessMoney() {
		System.out.println("We are sorry, withdraw impossible");
		
	}
		
	
	
}
