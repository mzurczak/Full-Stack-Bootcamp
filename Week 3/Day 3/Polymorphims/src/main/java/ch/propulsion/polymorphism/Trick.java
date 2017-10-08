package ch.propulsion.polymorphism;

public class Trick {

	String name;
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void doTrick() {
		System.out.println("Doing trick " + getName());
	}
}
