package ch.propulsion.polymorphism;

public abstract class TrainableAnimal extends Animal implements Trainable{

	@Override
	public abstract void learnTrick(Trick trick);

	@Override
	public abstract void showTricks();

}
