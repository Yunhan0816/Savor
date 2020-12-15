# Savor

Savor is a web application, or a meal-planning platform that takes in filters such as family size, dietary preferences, and budget, to formulate a grocery list that plans one’s weekly meal plan. It maximizes each ingredient purchased by the consumer by using increments of each item purchased in multiple recipes. 

Front-end: React.js, Gatsby.js, Bootstrap
Backend: Firebase
* Built-in OAuth for Google Authentication
* Database: NoSQL
    * User information: Budget, family size, dietary preferences
    * Recipes: dietary restrictions, estimated price, ingredients, etc.
    
Wireframes: https://www.figma.com/file/6tiVlv90DcKcGK322zEiJz/Savor

### To Test locally
1. run `gatsby develop`
2. go to localhost:8000

### Deployment
1. run `gatsby build`
2. run `firebase deploy`
3. go to the url `https://savor-3e31c.web.app`

### Known Bugs
1. HTML/CSS gets inconsistent when you resize the window.
2. The live website `https://savor-3e31c.web.app` is not as up-to-date as the local version. The database does not work because Gatsby and Firebase does not work well together but there is a workaround that we did not have time to implement.

### How to Run Test Cases

### Dependencies Needed

N/A



