package twitter.service;

import java.util.List;

import twitter.domain.Tweet;

public interface TweetService {
	void save(Tweet tweet);
	void deleteById(String id);
	List<Tweet> findById(String id);
	List<Tweet> findAll();
	List<Tweet> findAllByUsername(String username);
	List<Tweet> findAllContainingHashTag(String hashTag);
	List<Tweet> findAllMentioningUsername(String username);
}
