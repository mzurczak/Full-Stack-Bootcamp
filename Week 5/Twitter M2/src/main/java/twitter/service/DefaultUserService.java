package twitter.service;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

import twitter.repository.TweetRepository;

@Service
public class DefaultUserService implements UserService{

	private final TweetRepository tweetRepository;
	private static final Logger logger = LogManager.getLogger(DefaultUserService.class);

	public DefaultUserService(TweetRepository tweetRepository) {
		this.tweetRepository = tweetRepository;
	}
	
	@Override
	public List<String> findAllUsernames(){
		logger.trace("Finding all users");
		return tweetRepository.findAllUsernames();
	}
}
