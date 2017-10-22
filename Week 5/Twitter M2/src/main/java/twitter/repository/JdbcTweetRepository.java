package twitter.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import twitter.domain.Tweet;

@Repository
public class JdbcTweetRepository implements TweetRepository{
	
	private final JdbcTemplate jdbcTemplate;

	@Autowired
	public JdbcTweetRepository(JdbcTemplate jdbcTemplate) {
		super();
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public int count() {
		return jdbcTemplate.queryForObject("SELECT COUNT(*) FROM TWEETS", Integer.class);
	}

	@Override
	public void save(Tweet tweet) {
		jdbcTemplate.update("INSERT INTO TWEETS (TweetID, Author, Text) VALUES(?, ?, ?)", tweet.getId(), tweet.getAuthor(), tweet.getText());
//		jdbcTemplate.update("INSERT INTO TWEETS (Author, Text) VALUES(?, ?)", tweet.getAuthor(), tweet.getText());
	}

	@Override
	public void deleteById(String id) {
		jdbcTemplate.update("DELETE FROM TWEETS WHERE TWEETID=?", id);		
	}

	@Override
	public void deleteAll() {
		jdbcTemplate.update("DELETE FROM TWEETS");		
	}

	@Override
	public List<Tweet> findById(String id) {
		String sql = "SELECT * FROM TWEETS WHERE TWEETID=?";
		return jdbcTemplate.query(sql, (rs, num) -> new Tweet(rs.getString("tweetid"), rs.getString("text"), rs.getString("author")), id);
	}

	@Override
	public List<Tweet> findAll() {
		List<Tweet> tweets = jdbcTemplate.query("SELECT * FROM TWEETS", (rs, rowNum)-> new Tweet(rs.getString("tweetid"), rs.getString("text"), rs.getString("author")));
		return tweets;
	}

	@Override
	public List<Tweet> findAllByUsername(String username) {
		List<Tweet> tweets = jdbcTemplate.query("SELECT * FROM TWEETS WHERE LOWER(AUTHOR) = LOWER(?)", (rs, rowNum)-> new Tweet(rs.getString("tweetid"), rs.getString("text"), rs.getString("author")), username);
		return tweets;
	}

	@Override
	public List<Tweet> findAllContaining(String searchText) {
		searchText = "%" + searchText + "%";
		List<Tweet> tweets = jdbcTemplate.query("SELECT * FROM TWEETS WHERE LOWER(TEXT) LIKE LOWER(?)", (rs, rowNum)-> new Tweet(rs.getString("tweetid"), rs.getString("text"), rs.getString("author")), searchText);
		return tweets;
	}

	@Override
	public List<String> findAllUsernames() {
		return jdbcTemplate.queryForList("SELECT DISTINCT LOWER(AUTHOR) FROM TWEETS", String.class);
	}

}
