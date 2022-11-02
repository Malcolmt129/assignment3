// SPDX-License-Identifier: Unlicensed


pragma solidity ^0.8.14;

contract careerfair {

address public owner;
uint256 public numOfAttendees;


struct Company {
    string name;
    bool exists;
    
}

struct Student {
    address id;
    bool exists;
    bool enrolled;
}

mapping (string => Company) companies;
string[] public compArr;

mapping (address => Student) students;
address[] public studArr;


constructor(){
    owner = msg.sender;
}



/**
 * Save when a student enrolls for the career fair. If a student is 
 * currently enrolled, theu cannot enroll again.
 */
function enroll () public {

    Student memory currStudent = students[msg.sender];
    require(students[msg.sender].enrolled == false, "Student alread enrolled");

    currStudent.exists = true;
    currStudent.enrolled  = true;

    studArr.push(currStudent.id);
    numOfAttendees++;
}


/**
 * 
 * Only the owner can add a new company to the career fair contract. The owner
 * cannot add a companty that already exists(same company name)
 * 
 */
function add (string memory companyName) public {

    require(msg.sender == owner, "Only owner can add a new company");
    require(companies[companyName].exists == false, "This company already exists");


    Company memory currComp = companies[companyName];

    currComp.exists = true;

    compArr.push(currComp.name);
}


/**
 * Returns all of the student addresses enrolled in the career fair
 * 
 */

function getAttendees() public {
    emit printAttendees(studArr);
}


/**
 * A student can unenroll from the career fair. A student cannot unenroll unless
 * they are already enrolled
 */

function unenroll() public {

    Student memory currStudent = students[msg.sender];
    require(currStudent.enrolled == true, "Can't unroll a student that is not enrolled");
    require(currStudent.exists == true, "This student does not exist");

    currStudent.exists = false;
    currStudent.enrolled  = false;

    //Find in array and delete them. 
    for (uint256 i = 0; i < studArr.length; i++){
        if (studArr[i] == currStudent.id) {
            delete studArr[i];
            break;
        }
    }

    numOfAttendees--;
}

event printAttendees(address[] attendees);


}
