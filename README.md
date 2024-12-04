# PSI-Coordinator

## Description

The goal of our project is to provide a flexible and user-friendly application that allows for students and Peer Supplemental Instructors (PSI) at Georgia Gwinnett College (GGC) to connect outside of the classroom. The software allows students to sign up for tutoring sessions with specific leaders and download any resources provided to them. PSI Leaders will be able to upload, send alerts, view signed up students, and create new sessions for the upcoming week. Our project will use React and Firebase to provide a dynamic and real-time updates to all forms. Our app runs in the development mode on [http://localhost:3000](http://localhost:3000). To use the admin account please use the following email: psicoord@ggc.edu, password: PSICOORD22. All new accounts in the database must have a password the has a captial and lowercase letter along with a number.

### Project Members
Alikhan Nuriyev, 
Danielle Mathieu

### Technologies

React/Firebase

### Installation Steps

Please make sure to have Node.js installed and that your version is 18 or higher. Link to download: [Download Node.js](http://node.js.org/en/download).

1. Clone the repository
   ```
   git clone https://github.com/InValidFire/PSI-Coordinator.git
   ```
2. Starting program
   ```
   cd src
   npm start
   ```

### Challenges/Non-Working Features

1. The upload functionality that will store the file data to our database does not currently work. Users will be able to click on the upload box and select a file however nothing will be stored and only one file will appear in the list.
2. Students will not be able to cancel a session once they have signed up.
3. PSI Leaders who go to the student dashoard will not be able to return to the PSI Leader Dashboard.
4. The PSI Leader dashboard does not currently only show the signed in leaders session but instead pulls all the stored information in the database.
5. Right now any user is able to edit any PSI Sessions and change their details
