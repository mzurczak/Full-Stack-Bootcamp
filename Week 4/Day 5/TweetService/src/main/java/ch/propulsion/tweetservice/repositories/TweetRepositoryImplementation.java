package ch.propulsion.tweetservice.repositories;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import ch.propulsion.tweetservice.domain.Tweet;

public class InMemoryTweetRepository implements TweetRepository{
	Map<Long, Tweet> dbTable = new HashMap<>();

	@Override
	public List<Tweet> findAll() {
		return new ArrayList<>(dbTable.values());
	}

	@Override
	public Tweet insert(Tweet tweet) {
		dbTable.put(tweet.getId(), tweet);
		return dbTable.get(tweet.getId());
	}

	@Override
	public Tweet findById(Long id) {
		return dbTable.get(id);
	}

	@Override
	public void delete(Long id) {
		dbTable.remove(id);
	}

	@Override
	public Tweet findByString(String str) {
//		for ()
		return null;
	}

}
