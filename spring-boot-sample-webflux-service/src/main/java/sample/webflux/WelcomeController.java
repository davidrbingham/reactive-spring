package sample.webflux;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.util.function.Tuple2;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.stream.Stream;

@RestController
public class WelcomeController {

	@GetMapping("/")
	public String welcome() {
		return "Hello World";
	}

	@GetMapping("events/{id}")
	public Mono<String> eventById(@PathVariable int id) {
		return Mono.just(Integer.toString(id));
	}

	@GetMapping(value = "/events", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
	public Flux<Event> events() {
		Flux<Event> eventFlux = Flux.fromStream(Stream.generate(() -> new Event(System.currentTimeMillis(), LocalDateTime.now())));
		Flux<Long> durationFlux = Flux.interval(Duration.ofSeconds(0), Duration.ofSeconds(1));
		return Flux.zip(eventFlux, durationFlux).map(Tuple2::getT1);
	}
}
