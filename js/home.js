const BASE_URL = 'http://127.0.0.1:3000/cmps350-project/home.html'

document.addEventListener("DOMContentLoaded",start)

async function start(){
    console.log("Fetching works");  
    const response = await fetch(BASE_URL);
    const datas = await response.json();

    if (!localStorage.getItem("storedData")) {
        localStorage.setItem("storedData", JSON.stringify(datas));  
    }
    storedData = localStorage.getItem("storedData");

    handleChangingElements();
}


// function start(){
//     const courseGrid = document.querySelector(".courses-grid")
//     courseGrid.innerHTML = `
//                     <div class="course-card">
//                     <div class="course-header">
//                         <h3>${code}</h3>
//                         <span class="course-category">${category}</span>
//                     </div>
//                     <div class="course-content">
//                         <h4>${name}</h4>
//                         <p>${description}</p>
//                         <div class="course-details">
//                             <span><i class="fas fa-user"></i>${description}</span>
//                             <span><i class="fas fa-users"></i> 15/30 Enrolled</span>
//                         </div>
//                     </div>
//                     <div class="course-footer">
//                         <button class="btn btn-secondary">View Details</button>
//                         <button class="btn btn-primary">Register</button>
//                     </div>
//                 </div>` 
                
// }

let courseList = {
    "courses": [
        {
            "id": "CMPS151",
            "code": "CMPS 151",
            "name": "Programming Concepts",
            "credits": 3,
            "category": "Programming",
            "prerequisites": [],
            "description": "Introduction to programming concepts and fundamentals",
            "status": "open",
            "registrationOpen": true
        },
        {
            "id": "CMPS251",
            "code": "CMPS 251",
            "name": "Object Oriented Programming",
            "credits": 4,
            "category": "Programming",
            "prerequisites": ["CMPS151"],
            "description": "Fundamentals of object-oriented programming paradigm",
            "status": "open",
            "registrationOpen": true
        },
        {
            "id": "CMPS200",
            "code": "CMPS 200",
            "name": "Computer Ethics",
            "credits": 1,
            "category": "Ethics",
            "prerequisites": [],
            "description": "Ethical issues related to computer usage and IT profession",
            "status": "open",
            "registrationOpen": true
        },
        {
            "id": "CMPS205",
            "code": "CMPS 205",
            "name": "Discrete Structures",
            "credits": 3,
            "category": "Mathematics",
            "prerequisites": ["MATH101"],
            "description": "Mathematical structures for computer science",
            "status": "open",
            "registrationOpen": true
        },
        {
            "id": "CMPS303",
            "code": "CMPS 303",
            "name": "Data Structures",
            "credits": 4,
            "category": "Programming",
            "prerequisites": ["CMPS251", "CMPS205"],
            "description": "Implementation and application of fundamental data structures",
            "status": "open",
            "registrationOpen": true
        }
    ]
};

function start(){
    const courseGrid = document.querySelector(".courses-grid")
    courseList.courses.forEach(course => courseGrid.innerHTML += `
                    <div class="course-card">
                    <div class="course-header">
                        <h3>${course.id}</h3>
                        <span class="course-category">${course.category}</span>
                    </div>
                    <div class="course-content">
                        <h4>${course.name}</h4>
                        <p>${course.description}</p>
                        <div class="course-details">
                            <span><i class="fas fa-user"></i></span>
                            <span><i class="fas fa-users"></i> 15/30 Enrolled</span>
                        </div>
                    </div>
                    <div class="course-footer">
                        <button class="btn btn-secondary">View Details</button>
                        <button class="btn btn-primary">Register</button>
                    </div>
                </div>` )                
}
