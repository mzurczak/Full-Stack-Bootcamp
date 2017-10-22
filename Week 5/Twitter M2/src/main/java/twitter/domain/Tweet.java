package twitter.domain;

import java.util.UUID;

import lombok.Data;

@Data
public class Tweet {

	private String id = UUID.randomUUID().toString();
	private String text;
	private String author;
	
	@Override
	public String toString() {
		return "Tweet [id= " + this.id + ", author= " + this.author + ", text= " + this.text + "]";
	}

	public Tweet(String string2, String string3) {
		this.id = UUID.randomUUID().toString();
		this.text = string2;
		this.author = string3;
	}
	
	public Tweet(String string, String string2, String string3) {
		this.id = string;
		this.text = string2;
		this.author = string3;
	}
	
}

