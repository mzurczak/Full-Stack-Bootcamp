package ch.propulsion.polymorphism;

import java.util.ArrayList;
import java.util.List;

public class Dog extends TrainableAnimal {

	List <Trick> tricks = new ArrayList<>();
	private final int HUMAN_AGE_RATE = 7;
	
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

	@Override
	public int calculateHumanAge() {
		return getAge() * HUMAN_AGE_RATE;
	}
	
}
