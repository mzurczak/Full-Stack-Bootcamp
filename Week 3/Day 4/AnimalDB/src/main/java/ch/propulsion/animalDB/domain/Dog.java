package ch.propulsion.animalDB.domain;

import java.util.concurrent.atomic.AtomicInteger;

public class Dog extends Animal {
	static AtomicInteger idGenerator = new AtomicInteger(0);
	int age;
	
	public Dog(String name) {
		super(idGenerator.incrementAndGet(), name);
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getName() {
		return name;
	}
}
