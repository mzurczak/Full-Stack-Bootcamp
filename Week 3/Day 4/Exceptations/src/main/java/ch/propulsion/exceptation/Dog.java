package ch.propulsion.exceptation;

public class Dog {

	String name;
	int age;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) throws IllegalArgumentException {
		if (age<0)
			throw new IllegalArgumentException("Age can not be negative");
		this.age = age;
	}
	
}
