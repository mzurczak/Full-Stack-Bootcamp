package ch.propulsion.tweetservice.service;

import java.util.List;

import ch.propulsion.tweetservice.domain.Tweet;

public interface TweetService {
	List<Tweet> findAll();
	Tweet insert(Tweet tweet);
	Tweet findById(Long id);
	Tweet findByString(String str);
	void delete(Long id);;
	
}
