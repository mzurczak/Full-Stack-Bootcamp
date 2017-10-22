package twitter.app;

import java.util.List;
import java.util.Scanner;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import twitter.config.DataAccessConfig;
import twitter.config.MailConfig;
import twitter.domain.Tweet;
import twitter.repository.RepositoryConfig;
import twitter.service.ServiceConfig;
import twitter.service.DefaultTwitterService;
import twitter.service.DefaultUserService;

public class TweetApp {

	static ApplicationContext context = new AnnotationConfigApplicationContext(ServiceConfig.class, MailConfig.class, DataAccessConfig.class, RepositoryConfig.class);
	private static DefaultTwitterService twitterService = context.getBean(DefaultTwitterService.class);
	private static DefaultUserService userService = context.getBean(DefaultUserService.class);
	static Scanner sc = new Scanner(System.in);
	
	public static void main(String[] args) {
		mainMenu();
		
	}
	
	public static void mainMenu() {
		
		int option = 0;
		while (option != 8) {
			Display.userMainMenu();
			int opt = sc.nextInt();
			sc.nextLine();
			switch(opt) {
			
			case 1: 
				addTweet();
				break;
				
			case 2:
				showTweets();
				break;
				
			case 3:
				findByID();
				break;
				
			case 4:
				findyByUsername();
				break;
				
			case 5:
				findByHasTag();
				break;
				
			case 6:
				findByMentioned();
				break;
				
			case 7:
				findAllUsers();
				break;
				
			case 8:
				option = 8;
				break;
				
			default: 
				Display.invalidInputDisplay();
				break;
			}			
		}	
	}

	private static void addTweet() {
		Display.addTweetDisplay();
		String text = sc.nextLine();
		Display.setAuthor();
		String author = sc.nextLine();
		
		Tweet tweet = new Tweet(text, author);
		twitterService.save(tweet);
	}

	private static void showTweets() {
		List<Tweet> tweets = twitterService.findAll();
		tweets.forEach(System.out::println);
	}
	
	private static void findByID() {
		Display.chooseID();
		String id = sc.next();
		List<Tweet> tweets = twitterService.findById(id);
		tweets.forEach(System.out::println);
	}

	private static void findyByUsername() {
		Display.chooseUsername();
		String userName = sc.next();
		List<Tweet> tweets = twitterService.findAllByUsername(userName);
		tweets.forEach(System.out::println);
	}
	
	private static void findByHasTag() {
		Display.chooseHashTag();
		String hashTag = sc.next();
		List<Tweet> tweets = twitterService.findAllContainingHashTag(hashTag);
		tweets.forEach(System.out::println);
	}
	
	private static void findByMentioned() {
		Display.chooseUsername();
		String userName = sc.next();
		List<Tweet> tweets = twitterService.findAllMentioningUsername(userName);
		tweets.forEach(System.out::println);
	}
	
	private static void findAllUsers() {
		List<String> users = userService.findAllUsernames();
		users.forEach(System.out::println);
	}
	
}
