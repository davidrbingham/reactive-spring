package sample.webflux;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.WebClient;

@SpringBootApplication
public class ReactiveClientApplication {

    @Bean
    WebClient client(){
        return WebClient.create("http://localhost:8081");
    }

    @Bean
    CommandLineRunner demo (WebClient client){
        return args ->
            client.get()
                    .uri("/events")
                    .accept(MediaType.TEXT_EVENT_STREAM)
                    .exchange()
                    .flatMapMany(cr -> cr.bodyToFlux(String.class))
                    .subscribe(System.out::print);
    }

    public static void main(String[] args){
        new SpringApplicationBuilder(ReactiveClientApplication.class).run(args);
    }
}
