package Main;

import ch.propulsion.people.Employee;
import ch.propulsion.people.Person;
import ch.propulsion.people.Student;

public class Main {

	public static void main(String[] args) {
		Person michal = new Person("Michal");
		System.out.println(michal.getWeight());
		System.out.println(michal.getHeight());
		System.out.println(michal.getDateOfBirth());
		System.out.println(michal.calculateAge().getYears());
		System.out.println(michal.bmiCalculator());
		Student marek = new Student("Marek");
		marek.exam();
		marek.graduate();
		marek.setMaster("Engineering");
		marek.graduate();
		Employee dominika = new Employee("Dominika");
		dominika.setSalary(3000);
		dominika.giveRise(2000);
		System.out.println(dominika.getHeight());
	}

}
