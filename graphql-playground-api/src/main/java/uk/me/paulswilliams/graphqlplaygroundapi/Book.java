package uk.me.paulswilliams.graphqlplaygroundapi;

public class Book {
    private final String id;
    private final String name;
    private final int pageCount;
    private final String autherId;

    public Book(String id, String name, int pageCount, String autherId) {

        this.id = id;
        this.name = name;
        this.pageCount = pageCount;
        this.autherId = autherId;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getPageCount() {
        return pageCount;
    }

    public String getAutherId() {
        return autherId;
    }
}
