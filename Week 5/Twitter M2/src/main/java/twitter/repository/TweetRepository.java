package twitter.repository;

import java.util.List;

import twitter.domain.Tweet;

public interface TweetRepository {
	
	int count();
	void save(Tweet tweet);
	void deleteById(String id);
	void deleteAll();
	List<Tweet> findById(String id);
	List<Tweet> findAll();
	List<Tweet> findAllByUsername(String username);
	List<Tweet> findAllContaining(String searchText);
	List<String> findAllUsernames();
}
