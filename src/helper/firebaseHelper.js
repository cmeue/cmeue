import "../index.js";
import * as firebase from "firebase";

export function getAllBrancheIdsFromCollegeId(id, callback) {
    const dbRef = firebase.database().ref();
    const collegeRef = dbRef.child("colleges").child(id);
    collegeRef.once("value", (snap) => {
        callback(snap.val().branches);
    });
}

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
export function getCollegeFromCollegeId(id, callback) {
    const dbRef = firebase.database().ref();
    const collegeRef = dbRef.child("colleges").child(id);
    collegeRef.once("value", (snap) => {
        callback(snap.val());
    });
}
export function getAllColleges(callback) {
    const dbRef = firebase.database().ref();
    const allCollegesRef = dbRef.child("colleges");
    let collegesName = [];
    allCollegesRef.once("value", (snap)=> {
        snap.forEach(function(childSnap) {
            collegesName.push(childSnap.val());
        });
        callback(collegesName);
    });
}
export function getAllStudentFromCollegeId(id,callback){
    const dbRef = firebase.database().ref();
    const allStudentRef = dbRef.child("students");
    let studentsName = [];
    allStudentRef.once("value",(snap)=>{
        snap.forEach(function(childSnap){
            if( id===childSnap.child("collegeId").val()){
                studentsName.push(childSnap.val());
            }
        });
        callback(studentsName);
    });
}

