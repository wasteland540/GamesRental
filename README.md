# GamesRental
Light Seed for MongoDB, ExpressJS, AngularJS and NodeJS application.

#### Description
This is a lightweight web application build with the MEAN stack. I did not use any generator or something like that. 
The app is build from scratch. Why i did not use any generator? I wanted to focus on the interplay of the frameworks and therefore do not 
wanted to create any overhead.
So this is a my own light seed for another applications with the MEAN stack.

#### Intention
Byside the another points i listed in the description, i wanted to test if it's possible to develop with the MEAN stack on a Raspberry Pi.
Yes it's possible and it's really easy!
Originally i came from the Java world and created web applications with JSF and Primefaces. I'm not that administraion genius and i had
some problemes the configure my VServer to run my JSF applications. And i think this is a really good alternative for developing 
web applications. Of course the Raspberry Pi has his limitations, but for simple applictions this could be a solution.

#### Dependencies
You can see all dependencies in the package.json file. There is nothing special in it. The only thing i mentioning is, that i used 
[mongojs] (https://github.com/mafintosh/mongojs) as a wrapper for the native API. Of course you can also use [mongoose] (https://github.com/Automattic/mongoose) 
if you want.

#### Points of Interests
I deployed this appliction on my Raspberry Pi and it's available in my own LAN. My next steps will be to make the application available 
in the web. Therefore i have to implement somekind of user management. The rest should be only system adminstration on the Pi.

#### Installation
If you want to check the application on your own system, follow these steps:

1. Download the Sourcecode
2. Extract the Sourcecode to a location of your choice
3. Open terminal in extracted directory
4. Run the following commands:

  ```
  cd public
  bower install angular
  bower install angular-route
  bower install bootstrap
  cd ..
  npm install
  ```
5. Start the application by running:

  ```
  node app.js
  ```
