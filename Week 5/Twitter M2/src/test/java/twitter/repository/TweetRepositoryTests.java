package twitter.repository;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import twitter.config.DataAccessConfig;
import twitter.domain.Tweet;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = {RepositoryConfig.class, DataAccessConfig.class})
public class TweetRepositoryTests {
	
	@Autowired
	JdbcTweetRepository tweetRepository;
	
	@Before
	public void clearDb() {
		tweetRepository.deleteAll();		
	}
	
	@Test
	public void save() {
		assertThat(tweetRepository.findAll()).isEmpty();

		Tweet tweet = new Tweet("test", "john");
		tweetRepository.save(tweet);

		assertThat(tweetRepository.findAll()).containsExactly(tweet);
	}
	
	@Test
	public void count() {
		assertThat(tweetRepository.count()).isEqualTo(0);
		
		Tweet tweet = new Tweet("test", "john");
		tweetRepository.save(tweet);
		
		assertThat(tweetRepository.count()).isEqualTo(1);
	}
	
	@Test
	public void deleteById() {
		Tweet tweet = new Tweet("test", "john");
		tweetRepository.save(tweet);
		Tweet tweet2 = new Tweet("test2", "kate");
		tweetRepository.save(tweet2);
		
		assertThat(tweetRepository.count()).isEqualTo(2);
		
		String id = tweet2.getId();
		tweetRepository.deleteById(id);
		assertThat(tweetRepository.count()).isEqualTo(1);
		assertThat(tweetRepository.findAll()).containsExactly(tweet);
	}
	
	@Test
	public void deleteAll() {
		Tweet tweet = new Tweet("test", "john");
		tweetRepository.save(tweet);
		Tweet tweet2 = new Tweet("test2", "kate");
		tweetRepository.save(tweet2);
		
		assertThat(tweetRepository.count()).isEqualTo(2);
		
		tweetRepository.deleteAll();
		assertThat(tweetRepository.count()).isEqualTo(0);
	}
	
	@Test
	public void findById() {
		Tweet tweet = new Tweet("test", "john");
//		assertThat(tweetRepository.findById(tweet.getId())).isNull();

		tweetRepository.save(tweet);

		assertThat(tweetRepository.findById(tweet.getId())).contains(tweet);
	}
	
	@Test
	public void findAll() {
		Tweet tweet = new Tweet("test", "john");
		assertThat(tweetRepository.findAll()).isEmpty();

		tweetRepository.save(tweet);

		assertThat(tweetRepository.findAll()).containsExactly(tweet);
		Tweet tweet2 = new Tweet("test2", "kate");
		tweetRepository.save(tweet2);
		assertThat(tweetRepository.findAll()).contains(tweet, tweet2);
	}
	
	@Test
	public void findAllByUsername() {
		Tweet tweet = new Tweet("test", "john");
		tweetRepository.save(tweet);
		Tweet tweet2 = new Tweet("test2", "kate");
		tweetRepository.save(tweet2);
		Tweet tweet3 = new Tweet("test3", "john");
		tweetRepository.save(tweet3);
		Tweet tweet4 = new Tweet("test4", "john");
		tweetRepository.save(tweet4);
		
		assertThat(tweetRepository.findAllByUsername("john")).contains(tweet, tweet3, tweet4);
	}
	
	@Test
	public void findAllContaining() {
		Tweet tweet = new Tweet("ab cd ef gh", "john");
		tweetRepository.save(tweet);
		Tweet tweet2 = new Tweet("gh ab", "kate");
		tweetRepository.save(tweet2);
		Tweet tweet3 = new Tweet("ab cd ef", "john");
		tweetRepository.save(tweet3);
		Tweet tweet4 = new Tweet("ab gh cd", "john");
		tweetRepository.save(tweet4);
		Tweet tweet5 = new Tweet("abghcd", "john");
		tweetRepository.save(tweet5);
		
		assertThat(tweetRepository.findAllContaining("gh")).contains(tweet, tweet2, tweet4, tweet5);
	}
	
	@Test
	public void findAllUsernames() {
		Tweet tweet = new Tweet("test", "john");
		tweetRepository.save(tweet);
		Tweet tweet2 = new Tweet("test2", "kate");
		tweetRepository.save(tweet2);
		Tweet tweet3 = new Tweet("test3", "franck");
		tweetRepository.save(tweet3);
		Tweet tweet4 = new Tweet("test4", "john");
		tweetRepository.save(tweet4);
		
		assertThat(tweetRepository.findAllUsernames()).contains("john", "kate", "franck");
	}

}
