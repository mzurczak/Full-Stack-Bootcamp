package ch.propulsion.helloWorld;


import org.junit.Assert;
import org.junit.Test;



public class HelloWorldTest {

	@Test
	public void test() {
		HelloWorld helloWorld = new HelloWorld(); 
		Assert.assertEquals("Hello Michał", helloWorld.greet("Michał"));
	}

}
