package ch.propulsion.animalDB.domain;

public abstract class Animal {


	final Integer id;
	final String name;
	
	public Animal(Integer id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public int getId() {
		return id;
	}
	
	public String getName() {
		return name;
	}
}
