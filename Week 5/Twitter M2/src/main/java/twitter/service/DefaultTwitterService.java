package twitter.service;

import java.util.List;

import javax.mail.internet.MimeMessage;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import twitter.domain.Tweet;
import twitter.repository.TweetRepository;

@Service
public class DefaultTwitterService implements TweetService{

	private final TweetRepository tweetRepository;
	private final JavaMailSender javaMailSender;
	private static final Logger logger = LogManager.getLogger(DefaultUserService.class);
	
	@Autowired
	public DefaultTwitterService(TweetRepository tweetRepository, JavaMailSender javaMailSender) {
		this.tweetRepository = tweetRepository;
		this.javaMailSender = javaMailSender;
	}

	@Override
	public void save(Tweet tweet) {
		tweetRepository.save(tweet);
		logger.trace("Saving the tweet");
		String userMail = tweet.getAuthor() + "@example.com";
		sendTweetConfirmationEmail(userMail);
		logger.trace("Sending mail to the user @" + tweet.getAuthor());
	}

	@Override
	public void deleteById(String id) {
		logger.trace("Deleting all users");
		tweetRepository.deleteById(id);
	}

	@Override
	public List<Tweet> findById(String id) {
		logger.trace("Finding tweet by ID");
		List<Tweet> tweets = tweetRepository.findById(id);
		if (tweets.isEmpty() ) System.out.println("There are no tweets with ID " + id);
		return tweets;
	}

	@Override
	public List<Tweet> findAll() {
		logger.trace("Finding all tweets");
		List<Tweet> tweets = tweetRepository.findAll();
		if (tweets.isEmpty()) System.out.println("There are no tweets in database");
		return tweets;
	}

	@Override
	public List<Tweet> findAllByUsername(String username) {
		logger.trace("Finding all tweets of the user");
		List<Tweet> tweets = tweetRepository.findAllByUsername(username); 
		if (tweets.isEmpty() ) System.out.println("There are no tweets of user @" + username);
		return tweets;
	}

	@Override
	public List<Tweet> findAllContainingHashTag(String hashTag) {
		logger.trace("Finding all tweets containing hash tag");
		List<Tweet> tweets = tweetRepository.findAllContaining("#" + hashTag);
		if (tweets.isEmpty()) System.out.println("There are no tweets with #" + hashTag);
		return tweets;
	}

	@Override
	public List<Tweet> findAllMentioningUsername(String username) {
		logger.trace("Finding all tweets mentioning username");
		List<Tweet> tweets = tweetRepository.findAllContaining("@" + username);
		if (tweets.isEmpty()) System.out.println("There are no tweets with @" + username + " mentioned");
		return tweets;
	}
	
	private void sendTweetConfirmationEmail(String recipients) {
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(mimeMessage);
		
		try {
			helper.setFrom("admin@example.com");
			helper.setTo(recipients);
			helper.setSubject("New Tweet!");
			helper.setText("Your new Tweet has been posted!");
			javaMailSender.send(mimeMessage);
		} catch (Exception e) {
			e.printStackTrace(System.err);
		}	
	}
}
