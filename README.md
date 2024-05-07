To launch this application, the user needs to install node.js on their device
You will need to clone gihub repository of this project.
You should then open terminal and navigate to the folder "event_manager". In this folder you cun run command "npm start" 
This will launch this react web application.

To register in this web application, click on button "Log in/Sign up" in the upper right corner of the main page. After enter your information you will be redirected to the other page where you can register fo the event. 

Here I have several problems with the implementation, currently there are 3 events and 3 users in the firebase database of this application. Logic of registering works in the way that program looks for ID of the registered user in the corresponding fields of records of events. This can cause issues because newly registered user's ID is not in the records of events and if we try accessing event/people-registered/userID, program might crash because new user will not have a corresponding entry. Also, there is currently no check for if the user has already been registered for the event, and trying to Log in (not Sign up for the first time) will cause crash in the program. 

These problems can be easily avoided: dynamically creating records for users and events in database, separating logic of Sign up and Log in, checking if user is registered in the corresponding records of events. Unfortunately, I didn't have time. 

In this project, I tried to identify "reusable" components as much as possible. For example, Overlay.js and EventCards.js. It allowed me to avoid repeating code, and added flexibility - I could change an entire component or I could introduce small changes outside of these components. 