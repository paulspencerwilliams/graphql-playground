package uk.me.paulswilliams.graphqlplaygroundapi;

public class Author {
    private final String id;
    private final String firstName;
    private final String lastName;

    public Author(String id, String firstname, String lastname) {

        this.id = id;
        this.firstName = firstname;
        this.lastName = lastname;
    }

    public String getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }
}
