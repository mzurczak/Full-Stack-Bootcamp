package ch.propulsion.tweetservice.domain;

import java.util.concurrent.atomic.AtomicLong;

public final class Tweet {
	static AtomicLong idGenerator = new AtomicLong(0);
	String text;
	Long id;

	public Tweet(String text) {
		this.text = text;
		this.id = idGenerator.incrementAndGet();
	}

	public Long getId() {
		return id;
	}
	
	
}
