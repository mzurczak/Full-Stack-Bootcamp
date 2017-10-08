package ch.propulsion.cashmachine;

import java.util.Scanner;

public class CashMachineMain {
	
	public static void main(String[] args) {
		Customer michal = new Customer();
		michal.setPin(1234);
		michal.setAccountBalance(5000);
		
		Display.welcomeDisplay();
		Scanner sc = new Scanner(System.in);
		Display.confirmationDisplay();
		int givenPin = sc.nextInt();
		if (CashMaschineSystem.pinChecker(givenPin, michal)) {
			int action = 0;
			while (action != 4) {
				Display.mainMenu();
				action = sc.nextInt();
				CashMaschineSystem.cashMaschineMain(action, michal);	
			}
		}		
		sc.close();
	}

	

}
