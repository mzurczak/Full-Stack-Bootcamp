package twitter.service;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.util.SocketUtils;
import org.subethamail.wiser.Wiser;

import twitter.config.MailConfig;

@Configuration
@Import(MailConfig.class)
public class TestMailConfig {
	@Bean
	int smtpPort() {
		return SocketUtils.findAvailableTcpPort();
	}
	
	@Bean(initMethod = "start", destroyMethod = "stop")
	public Wiser wiser(String smtpHost) {
		Wiser wiser = new Wiser(smtpPort());
		wiser.setHostname(smtpHost);
		return wiser;
	}
}
