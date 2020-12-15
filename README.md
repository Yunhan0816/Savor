# Savor

Savor is a web application, or a meal-planning platform that takes in filters such as family size, dietary preferences, and budget, to formulate a grocery list that plans one’s weekly meal plan. It maximizes each ingredient purchased by the consumer by using increments of each item purchased in multiple recipes. 

Front-end: React.js, Gatsby.js, Bootstrap

Backend: Firebase
* Built-in OAuth for Google Authentication
* Database: NoSQL
    * User information: Budget, family size, dietary preferences
    * Recipes: dietary restrictions, estimated price, ingredients, etc.
    
Wireframes: https://www.figma.com/file/6tiVlv90DcKcGK322zEiJz/Savor

### To run the app locally
1. clone this repo. run `git clone https://github.com/Yunhan0816/Savor.git`
2. Go into your cloned directory
3. run `npm install`
4. run `gatsby develop`
2. go to localhost:8000 on your web browser. 

### Deployment
1. run `gatsby build`
2. run `firebase deploy`
3. go to the url `https://savor-3e31c.web.app`

### Known Bugs
1. HTML/CSS gets inconsistent when you resize the window.
2. The live website `https://savor-3e31c.web.app` is not as up-to-date as the local version. The database on the live website does not work because Gatsby and Firebase does not work well together but there is a workaround that we did not have time to implement. Locally, everything works.

### Solutions to known bugs
1. Add more bootstrap responsive classes to fit different sized devices
2. To solve the bug of updating deployed site, follow the instructions in the following links: https://github.com/gatsbyjs/gatsby/issues/6386, https://www.gatsbyjs.com/docs/debugging-html-builds/. 
3. After successfully run `gatsby build`, run `firebase deploy` and all the updated build file will be displayed on the live site.

### How to Run Test Cases

### Dependencies Needed
1. After cloning the repo, run `npm install` to install all packages.



