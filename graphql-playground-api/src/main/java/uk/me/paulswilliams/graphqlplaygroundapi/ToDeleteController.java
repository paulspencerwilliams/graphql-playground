package uk.me.paulswilliams.graphqlplaygroundapi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ToDeleteController {

    @GetMapping("/welcome-message")
    public String welcomeMessage() {
        return "Hi from the Javas...";
    }
}
