package sample.webflux;

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.WebFluxTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.reactive.server.WebTestClient;
import java.time.Duration;

@RunWith(SpringRunner.class)
@WebFluxTest(WelcomeController.class)
public class SampleWebFluxApplicationIntegrationTests {

	@Autowired
	private WebTestClient webClient;

	@Before
	public void setup() {
		webClient = WebTestClient
				.bindToController(new WelcomeController())
				.configureClient()
				.responseTimeout(Duration.ofMillis(10000))
				.build();
	}

	@Test
	public void testWelcome() throws Exception {
		this.webClient
				.get().uri("/")
				.accept(MediaType.TEXT_PLAIN)
				.exchange()
				.expectBody(String.class).isEqualTo("Hello World");
	}

	@Test
	public void testMono() throws Exception {
		this.webClient
				.get().uri("/events/1")
				.exchange()
				.expectStatus().isOk()
				.expectBody(String.class).isEqualTo("1");
	}

	@Test
	public void testFlux() throws Exception {
		String responseBody = this.webClient
				.get()
				.uri("/events")
				.accept(MediaType.TEXT_EVENT_STREAM)
				.exchange()
				.returnResult(String.class)
				.getResponseBody()
				.blockFirst(Duration.ofMillis(5000));

		assertEquals(responseBody.contains("time"), true);
		assertEquals(responseBody.contains("localDateTime"), true);
	}
}
