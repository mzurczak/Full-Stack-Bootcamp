package ch.propulsion.people;

public class Employee extends Person {

	private Integer salary;
	
	public Integer getSalary() {
		return salary;
	}

	public void setSalary(Integer salary) {
		this.salary = salary;
	}

	public Employee(String name) {
		super(name);
	}
	
	public void giveRise (int ammount) {
		if (this.salary == 0) setSalary(ammount);
		this.salary += ammount;
	}

}
