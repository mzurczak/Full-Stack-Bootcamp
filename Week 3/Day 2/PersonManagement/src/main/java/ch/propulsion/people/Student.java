package ch.propulsion.people;

public class Student extends Person{

	String master;
	
	
	public String getMaster() {
		return master;
	}

	public void setMaster(String master) {
		this.master = master;
	}

	public Student(String name) {
		super(name);
	}
	
	public void exam() {
		System.out.println("I have an exam!");
	}

	public void graduate() {
		if (this.master == null) System.out.println("Before you graduate you have to choose your master!");
		else System.out.println("I've finally graduated, now I am master in " + master);
	}
	
}
