package twitter.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import(MailConfig.class)
public class TestMailConfig {

}
