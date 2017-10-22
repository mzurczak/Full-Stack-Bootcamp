package twitter.config;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

@Configuration
public class DataAccessConfig {

	@Bean
	public DataSource dataSource() {
		String url = "jdbc:h2:tcp://localhost/~/myh2";
		return new DriverManagerDataSource(url);
	}
	
	@Bean
	public JdbcTemplate jdbcTemplate() {
		return new JdbcTemplate(dataSource());
	}
}
