package ch.propulsion.polymorphism;

public abstract  class Animal {
	
	private String name;
	private int age;
	
	public void introduce() {
		System.out.println("hello, my name is " + getName());
	}
		
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public int getAge() {
		return age;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
	
	public abstract int calculateHumanAge();
}
