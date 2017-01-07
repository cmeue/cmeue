import "../index.js";
import * as firebase from "firebase";

/************************************************************
 * Function to query all branches ids from given college's id
 * @param {Number} id
 * @param {function} callback
 ************************************************************/
export function getAllBrancheIdsFromCollegeId(id, callback) {
    const dbRef = firebase.database().ref();
    const collegeRef = dbRef.child("colleges").child(id);
    collegeRef.once("value", (snap) => {
        callback(snap.val().branches);
    });
}

/********************************************************
 * Function to query all branches names from college's id
 * @param {Number} id 
 * @param {function} callback
 ********************************************************/
export function getAllBrancheNamesFromCollegeId(id, callback) {
    const dbRef = firebase.database().ref();
    const branchRef = dbRef.child("branches");
    getAllBrancheIdsFromCollegeId(id, (branchIds) => {
        let branchNames = [];
        let len = branchIds.length;
        for (let i = 0; i < len; i++) {
            branchRef.child(branchIds[i]).once("value", (snap) => {
                branchNames.push(snap.val());
            }).then(() => {
                callback(branchNames);
            });
        }
    });
}

/**
 * Function to get the college info from college's id
 * @param {Number} id
 * @param {function} callback
 */
export function getCollegeFromCollegeId(id, callback) {
    const dbRef = firebase.database().ref();
    const collegeRef = dbRef.child("colleges").child(id);
    collegeRef.once("value", (snap) => {
        callback(snap.val());
    });
}

/********************************
 * Function to query all colleges
 * @param {function} callback
 ********************************/
export function getAllColleges(callback) {
    const dbRef = firebase.database().ref();
    const allCollegesRef = dbRef.child("colleges");
    let collegesName = [];
    allCollegesRef.once("value", (snap) => {
        snap.forEach(function (childSnap) {
            collegesName.push(childSnap.val());
        });
        callback(collegesName);
    });
}

/********************************************************
 * Function to get all students from a particular college
 * @param {Number} id
 * @param {function} callback
 ********************************************************/
export function getAllStudentFromCollegeId(id, callback) {
    const dbRef = firebase.database().ref();
    const allStudentRef = dbRef.child("students");
    let studentsName = [];
    allStudentRef.once("value", (snap) => {
        snap.forEach(function (childSnap) {
            if (id === childSnap.child("collegeId").val()) {
                studentsName.push(childSnap.val());
            }
        });
        callback(studentsName);
    });
}

/******************************
 * Function to get all students
 * @param {function} callback
 ******************************/
export function getAllStudents(callback) {
    const dbRef = firebase.database().ref();
    const studentsRef = dbRef.child("students");
    studentsRef.once("value", (snap) => {
        callback(snap.val());
    });
}

/**********************************************
 * Function to get student info from student id
 * @param {Number} id
 * @param {function} callback
 **********************************************/
export function getStudentFromStudentId(id, callback) {
    const dbRef = firebase.database().ref();
    const studentRef = dbRef.child("students").child(id);
    studentRef.once("value", (snap) => {
        callback(snap.val());
    });
}

/****************************************** 
 * Method to get branch name from branch id
 * @param{id} id
 * @param{callback} callback
 ******************************************/
export function getBranchNameFromBranchId(id,callback){
    const dbRef = firebase.database().ref();
    const branchRef = dbRef.child("branches").child(id);
    branchRef.once("value",(snap)=>{
        callback(snap.val());
    });
}


/************************************
 * Method to put student in firebase
 * @param{studentPojo} Pojo
 ************************************/
export function putNewStudent(studentPojo) {
    const dbRef = firebase.database().ref();
    const ref = dbRef.child("students").push();
    ref.set(studentPojo);
}


/***********************************************
 * Method to update existing student in firebase
 * @param{id} id
 * @param{studentPojo} Pojo
 **********************************************/
export function updateExistingStudent(id,studentPojo){
    const dbRef = firebase.database().ref();
    const ref = dbRef.child("students").child(id);
    ref.update(studentPojo);
    
}

/***************************************
 * Method to delete the givin id student
 * @param{id} id
 ***************************************/
export function deleteStudentFromStudentId(id){
    const dbRef = firebase.database().ref();
    const studentRef = dbRef.child("students").child(id);
    studentRef.remove();
}