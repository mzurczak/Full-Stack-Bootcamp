package ch.propulsion.polymorphism;

public class Main {

	public static void main(String[] args) {
		Dog rico = new Dog();
		rico.setName("Rico");
		rico.setAge(3);
		System.out.println(rico.calculateHumanAge());
	}

}
