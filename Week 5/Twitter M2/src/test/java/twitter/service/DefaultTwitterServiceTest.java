package twitter.service;

import static org.assertj.core.api.Assertions.assertThat;

import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMessage.RecipientType;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.subethamail.wiser.Wiser;


@RunWith(SpringRunner.class)
//@RunWith(MockitoJUnitRunner.class)
@ContextConfiguration(classes = {TestMailConfig.class, ServiceConfig.class})
public class DefaultTwitterServiceTest {

	@Autowired
	Wiser wiser;
	@Autowired
	DefaultTwitterService service;
	
	@Test
	public void wiserTest() throws Exception{
		assertThat(wiser.getMessages()).hasSize(0);
		
		MimeMessage mimeMessage = wiser.getMessages().get(0).getMimeMessage();
		String from = mimeMessage.getFrom()[0].toString();
		String to = mimeMessage.getRecipients(RecipientType.TO)[0].toString();
		String subject = mimeMessage.getSubject();
		String body = mimeMessage.getContent().toString().trim();
		

		assertThat(wiser.getMessages()).hasSize(1);
		assertThat(from).isEqualTo("system@example.com");
		assertThat(to).isEqualTo("test@example.com");
		assertThat(subject).isEqualTo("New Tweet!");
		assertThat(body).isEqualTo("Your new Tweet has been posted!");
	
	}

}
