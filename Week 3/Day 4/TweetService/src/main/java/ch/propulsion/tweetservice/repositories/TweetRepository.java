package ch.propulsion.tweetservice.repositories;

import java.util.List;

import ch.propulsion.tweetservice.domain.Tweet;

public interface TweetRepository {

	List<Tweet> findAll();
	Tweet insert(Tweet tweet);
	Tweet findById(Long id);
	void delete(Long id);
	Tweet findByString(String str);
	
}
