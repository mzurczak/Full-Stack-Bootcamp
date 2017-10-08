package ch.propulsion.enumExercise;

public enum Size {

	S(1), M(3), L(5), XL(7), XXL(10);
	
	private int choseSize;

	private Size(int choseSize) {
		this.choseSize = choseSize;
	}

	public int getChoseSize() {
		return choseSize;
	}
	
	public double getSurchargePercentage() {
		if (this.getChoseSize() < 6) return 0;
		else if (this.getChoseSize() == 7) return 0.05;
		else return 0.1;
	}
	
}
