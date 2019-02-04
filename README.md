# graphql-playground
This project serves as a playground in teaching integration between React and Spring Boot by way of GraphQL and Apollo Client.

I used this [blog post](http://matejsprogblog.blogspot.com/2017/06/creating-new-web-app-using-create-react.html) to understand general integration, and [this other blog post](https://github.com/xword/java-npm-gradle-integration-example) to switch build from Maven to Gradle.

To build (and test) the application, run:

```bash
./gradlew clean build
```

To run the UI in HMR mode most likely against the API from a Java IDE

```bash
cd graphql-playground-ui
yarn start
```
