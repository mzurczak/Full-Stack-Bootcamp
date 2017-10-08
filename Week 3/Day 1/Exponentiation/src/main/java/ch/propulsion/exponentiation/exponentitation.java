package ch.propulsion.exponentiation;


public class exponentitation {
	
	public static int computExponentiation (int x, int n) {
		if (n==0) return 1;
		else return computExponentiation(x, n-1)*x;
	}

	public static void main(String[] args) {
		System.out.println(computExponentiation(5, 3));
		System.out.println(computExponentiation(2, 4));
		System.out.println(computExponentiation(5, 1));
		System.out.println(computExponentiation(6, 0));
	}

}
