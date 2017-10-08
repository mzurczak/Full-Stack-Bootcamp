package ch.propulsion.NumberGuess;

import java.util.Random;
import java.util.Scanner;

public class NumberGuess {

	public static void main(String[] args) {
		Random generator = new Random();
		int randomNumber = generator.nextInt(10) + 1;
		System.out.println("I'm thinking of a random number from 1 to 10.");
		Scanner scanner = new Scanner(System.in);
		int guessesCounter = 1;

		for (;;) {
			System.out.println("Guess what it is: ");
			int usersGuess = scanner.nextInt();
			if (randomNumber == usersGuess) {
				System.out.println("Congratulations! You guessed it in " + guessesCounter + " tries.");
				break;
			} else if (randomNumber > usersGuess) {
				System.out.println("Nope. It's higher than that. Try again.");
				guessesCounter++;
			} else if (randomNumber < usersGuess) {
				System.out.println("Nope. It's lower than that. Try again.");
				guessesCounter++;
			}
		}
		scanner.close();

	}

}
