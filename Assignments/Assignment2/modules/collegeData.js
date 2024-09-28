const { rejects } = require('node:assert');
const fs = require('node:fs');
const { resolve } = require('node:path');

class Data{
    constructor(students,courses){
        this.students=students;
        this.courses=courses;

    }
}

let dataCollection=null;

function initialize() {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/students.json', 'utf8', (err, studentDataFromFile) => {
            if (err) {
                reject('unable to read students.json');
                return;
            }

            fs.readFile('./data/courses.json', 'utf8', (err, courseDataFromFile) => {
                if (err) {
                    reject('unable to read courses.json');
                    return;
                }

                // Parse the JSON data
                let students = JSON.parse(studentDataFromFile);
                let courses = JSON.parse(courseDataFromFile);

                // Creating new instance of Data class
                dataCollection = new Data(students, courses);
                
            
                resolve();
            });
        });
    });
}

// Function getallstudents
function getAllStudents() {
    return new Promise((resolve, reject) => {
        if (dataCollection && dataCollection.students.length > 0) {
            resolve(dataCollection.students);
        } else {
            reject('no results returned');
        }
    });
}

// Function getallTAs
function getTAs() {
    return new Promise((resolve, reject) => {
        if (dataCollection) {
            let tas = dataCollection.students.filter(student => student.TA === true);
            if (tas.length > 0) {
                resolve(tas);
            } else {
                reject('no results returned');
            }
        } else {
            reject('data not initialized');
        }
    });
}

// Function  getallcourses
function getCourses() {
    return new Promise((resolve, reject) => {
        if (dataCollection && dataCollection.courses.length > 0) {
            resolve(dataCollection.courses);
        } else {
            reject('no results returned');
        }
    });
}

// Export the functions to a2.js
module.exports = {
    initialize,
    getAllStudents,
    getTAs,
    getCourses
};

    




