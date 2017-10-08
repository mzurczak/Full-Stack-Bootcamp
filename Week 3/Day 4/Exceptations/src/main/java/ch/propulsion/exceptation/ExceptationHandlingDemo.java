package ch.propulsion.exceptation;

public class ExceptationHandlingDemo {
	
	
	public static void main(String[] args) {
		
		Dog d = new Dog();
		
		try {
			d.setAge(-2);
		} catch (IllegalArgumentException e) {
			System.out.println("Wrong argument :" + e.getMessage());
			
		}
		


	}


}
