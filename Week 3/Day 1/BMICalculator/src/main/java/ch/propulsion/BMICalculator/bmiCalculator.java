package ch.propulsion.BMICalculator;

import java.util.Scanner;

public class bmiCalculator {

	public static void main(String[] args) {
		System.out.println("Let's calculate your BMI (kg/m^2)");
		Scanner scanner = new Scanner(System.in);
		System.out.println("What is your weight in kilograms?");
		double weight = scanner.nextDouble();
		System.out.println("What is your height in meters?");
		double height = scanner.nextDouble();
		double userBmi = bmi(weight, height);
		System.out.println("Your BMI is: " + userBmi);
		scanner.close();

	}

	private static double bmi(double weight, double height) {
		return weight / (height * height);
	}

}
