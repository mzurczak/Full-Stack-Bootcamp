package ch.propulsion.tweetservice.service;

import java.util.List;

import ch.propulsion.tweetservice.domain.Tweet;
import ch.propulsion.tweetservice.repositories.InMemoryTweetRepository;
import ch.propulsion.tweetservice.repositories.TweetRepository;

public class TweetServiceImpl implements TweetService{
	TweetRepository tweetRepository;
	
	public TweetServiceImpl() {
		this.tweetRepository = new InMemoryTweetRepository();
	}
	
	
	@Override
	public List<Tweet> findAll() {
		return tweetRepository.findAll();
	}

	@Override
	public Tweet insert(Tweet tweet) {
		return tweetRepository.insert(tweet);
	}

	@Override
	public Tweet findById(Long id) {
		return tweetRepository.findById(id);
	}

	@Override
	public void delete(Long id) {
		tweetRepository.delete(id);
		
	}


	@Override
	public Tweet findByString(String str) {
		return tweetRepository.findByString(str);
	}

}
