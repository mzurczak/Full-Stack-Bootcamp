package ch.propulsion.enumExercise;

public enum Color {

	RED(1), GREEN(2), BLUE(3), BLACK(4);
	
	private int choseColor;

	public int getChoseColor() {
		return choseColor;
	}

	private Color(int choseColor) {
		this.choseColor = choseColor;
	}
}
