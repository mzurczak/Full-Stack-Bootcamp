package twitter.app;

public class Display {
	static void welcomeDisplay() {
		System.out.println("\n\n=============================");
		System.out.println("||                         ||");
		System.out.println("||    Welcom to Twitter    ||");
		System.out.println("||                         ||");
		System.out.println("=============================\n\n");
	}
	
	static void userMainMenu() {
		spacing();
		System.out.println("\nChoose what you want to do: ");
		System.out.println("1. Add tweet.");
		System.out.println("2. Check out all tweets.");
		System.out.println("3. Find tweets by ID.");
		System.out.println("4. Find tweets by username.");
		System.out.println("5. Find tweets by hash tag.");
		System.out.println("6. Find all tweets mentioning username.");
		System.out.println("7. Find all Tweeter users.");
		System.out.println("8. Log out.");
	}
	
	static void spacing() {
		System.out.println("------------------------\n");
 	}
	
	static void addTweetDisplay() {
		System.out.println("Here comes your new tweet: ");
	}
	
	static void setAuthor() {
		System.out.println("Set the tweet author: ");
	}
	
	static void chooseID() {
		spacing();
		System.out.println("Choose the ID: ");
	}
	
	static void chooseUsername() {
		spacing();
		System.out.println("Choose the username: @");
	}
	
	static void chooseHashTag() {
		spacing();
		System.out.println("Choose the hashTag: #");
	}

	static void invalidInputDisplay() {
		System.out.println("######################");
		System.out.println("//\\\\Invalid choice//\\\\");
		System.out.println("######################");
	}
}
