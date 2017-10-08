package ch.propulsion.animalDB.domain;

import java.util.concurrent.atomic.AtomicInteger;

public class Cat extends Animal {
	static AtomicInteger idGenerator = new AtomicInteger(0);
	Integer age;

	public Cat(String name) {
		super(idGenerator.incrementAndGet(), name);
	}
	
	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}
}
