package huinong;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootDemoApplication {

	public static void main(String[] args) {
		SpringApplication application = new SpringApplication(SpringBootDemoApplication.class);

		application.run(args);
	}
}
