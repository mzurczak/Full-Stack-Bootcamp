package ch.propulsion.people;

import java.time.LocalDate;
import java.time.Period;
//import java.util.Arrays;
import java.util.Random;


public class Person {

	String name;
	LocalDate dateOfBirth;
	Integer weight, height;
	
	public String getName() {
		return name;
	}

	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}


	public Integer getWeight() {
		return weight;
	}

	public Integer getHeight() {
		return height;
	}

	public Person (String name) {
		this.name = name;
		this.weight = weightGenerator();
		this.height = heightGenerator();
		this.dateOfBirth = birthDateGenerator();
	}
	
	private int heightGenerator() {
		Random generator = new Random();
		return generator.nextInt(50)+150;
	}

	private int weightGenerator() {
		Random generator = new Random();
		return generator.nextInt(100)+50;
	}
	
	private LocalDate birthDateGenerator() {
		int day, month, year;
		Random generator = new Random();
		month = generator.nextInt(12)+1;
		
		if ((month == 1) || (month == 3) || (month == 5) || (month == 7) || (month == 8) || (month == 10) || (month == 12))
			day = generator.nextInt(30)+1;
		else if (month == 2)
			day = generator.nextInt(27)+1;
		else 
			day = generator.nextInt(29)+1;
		
		year = generator.nextInt(65)+1952;  //1952
				
		return LocalDate.of(year,  month, day);
	}
	
	public Period calculateAge() {
		LocalDate today = LocalDate.now();
		return Period.between(this.dateOfBirth, today);
		
	}
	
	public double bmiCalculator() {
		return this.weight / ((this.height/100) * (this.height/100));
	}
	
}
	


