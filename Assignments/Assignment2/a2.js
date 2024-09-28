/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Hasini Jayasekara Student ID: 165513235 Date: 9/28/2024
*
********************************************************************************/ 

const collegeData = require('./modules/collegeData');

// Initialize data 
collegeData.initialize()
    .then(() => {
        console.log("Initialization successful.");

        // Test getAllStudents
        return collegeData.getAllStudents();
    })
    .then(students => {
        console.log(`Successfully retrieved ${students.length} students.`);
        
        // Test getCourses 
        return collegeData.getCourses();
    })
    .then(courses => {
        console.log(`Successfully retrieved ${courses.length} courses.`);
        
        // Test getTAs 
        return collegeData.getTAs();
    })
    .then(tas => {
        console.log(`Successfully retrieved ${tas.length} TAs.`);
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    });