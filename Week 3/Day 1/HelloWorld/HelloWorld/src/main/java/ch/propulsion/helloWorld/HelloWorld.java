package ch.propulsion.helloWorld;

import java.util.Scanner;

public class HelloWorld {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Give your name: ");
		String userInput = sc.nextLine();
		
		System.out.println(new HelloWorld().greet(userInput));
		sc.close();

	}

	String greet(String userName) {
		return "Hello " + userName;
		
	}

}
