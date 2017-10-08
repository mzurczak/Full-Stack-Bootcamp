package ch.propulsion.polymorphism;

import java.util.ArrayList;
import java.util.List;

public class Cat extends TrainableAnimal {
	private static final int HUMAN_AGE_RATE = 8;

	List <Trick> tricks = new ArrayList<>();
	
	@Override
	public String toString() {
		return "Im a Cat with name=" + getName();
	}

	@Override
	public int calculateHumanAge() {
		return HUMAN_AGE_RATE * getAge();
	}

	@Override
	public void learnTrick(Trick trick) {
		tricks.add(trick);
	}

	@Override
	public void showTricks() {
		for (Trick trick : tricks) {
			trick.doTrick();
		}
	}
}

