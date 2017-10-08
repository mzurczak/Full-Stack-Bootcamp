package ch.propulsion.enumExercise;

public class Product {

	private String name;
	private Double price;
	private Color color;
	private Size size;
	
	
	

	public void setName(String name) {
		this.name = name;
	}


	public void setPrice(Double price) {
		this.price = price;
	}

	public Double getPrice() {
		return price;
	}

	public Color getColor() {
		return color;
	}
	
	
	public void setColor(Color color) {
		this.color = color;
	}
	
	
	public Size getSize() {
		return size;
	}
	
	
	public void setSize(Size size) {
		this.size = size;
	}



	public static void main(String[] args) {
		Product shirt = new Product();
		shirt.setName("Reg");
		shirt.setPrice(19.99);
		shirt.setSize(Size.XL);
		shirt.setColor(Color.BLACK);
		Size productSize = shirt.getSize();
		System.out.println(productSize);
		Color productColor = shirt.getColor();
		System.out.println(productColor);
		System.out.println(PriceCalculator.calculatePrice(shirt));
	}


}
