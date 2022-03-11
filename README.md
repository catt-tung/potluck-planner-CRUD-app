# Potluck Planner
A fullstack MEN application (MongoDB, Express.js, Node.js) with fully functional CRUD capability to help organize and plan Potluck Parties. This app includes the use of Passport and Google OAuth2 for authentication and authorization granting specific permissions to each profile, and uses Mongoose models and schemas to organize data structures. The app is deployed on Heroku and can be found [here](https://potluck-planner-crud-app.herokuapp.com/).
## About this Potluck Planner
![HeroImage](https://i.ibb.co/47dt0y3/Screen-Shot-2022-03-11-at-9-49-06-AM.png)
### _Who doesn't love a good potluck?_
Potluck Planner was created with the intetion to make use of Create, Read, Update, Delete (CRUD) functionality with storing and embedding/referencing data in mind. With the ability to login and view relevant information for a get together where many pieces of information need to be tracked, saved, and shared, any potluck would be able to benefit with this app being leveraged for planning purposes!

Also, potlucks are cost-friendly, social, and can hold a lot of history from the participants. It's my hope that with the stretch goal features being built in and refactored into the app, we can have more potlucks, more getting-to-know-each-others, more social connections, and more good food go around.  
## Technologies Used
The following technologies were used to build this stack:

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/-mongoose-red)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
## Wireframing & Pseudocoding
My initial [wireframe](https://whimsical.com/potluck-planner-unit-2-project-wireframe-5jx9ZvEg3JAHKxK2pDbpbq) was the conception of a rather complicated backend routing architecture which I have placed in my stretch goals. I've re-routed most of it to create this initial MVP working version at the bottom, which cuts down on a separate Model for the dishes and cross-functional user interactions. I used [Trello](https://trello.com/b/Fv7hsFD3/unit-2-project-trello-board) to keep track of my progress and notes.
## How to Use the App
The app requires a Google OAuth2 login - once you are logged in, you can go to "All Potlucks" and create a new potluck, and start adding guests and what they're bringing to the party! The app also includes a menu feature to see what's in store for the day. 
## Stretch Goals
Ideally I'd like the app to be an entire ecosystem of a potluck loving community. I'd like to refactor the data modeling and the entity relationships to allow the dishes to have their own profiles owned by a specific user, where others can comment and add feedback/leave reviews. This also allows information such as addresses and allergens to be saved and automated into the planning process, making all potentially releavnt information be available to all.

This was the initial conception of an ERD I was coming up with but required a lot more backend architecture and routing complications that was a bit beyond a half week project.
![ERD](https://i.ibb.co/jMmxznn/ERD-for-Unit-2-Project-drawio-2.png)

I'd also love to add some API's like Google Maps, Recipe API's, and even an Instagram API to add images from the party. 
## Credits
+ Favicon is from [Icons8](https://icons8.com)
+ Badges for technologies were take from [Ileriayo's GH repo](https://github.com/Ileriayo/markdown-badges) using shields.io
+ I followed Kyle's [open modal tutorial](https://github.com/WebDevSimplified/Vanilla-JavaScript-Modal) to create the expanding menu - really helpful tutorial!
+ My best friends for any learning project: ![MDN Web Docs](https://img.shields.io/badge/MDN_Web_Docs-black?style=for-the-badge&logo=mdnwebdocs&logoColor=white) ![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)