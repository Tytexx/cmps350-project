const BASE_URL = 'http://127.0.0.1:3000/cmps350-project/home.html'

document.addEventListener("DOMContentLoaded",fetchData)
const courseGrid = document.querySelector(".courses-grid")

async function fetchData(){
    const courses = await fetch("../data/courses.json");
    let courseList = await courses.json();
    localStorage.courses = JSON.stringify(courseList)
    start()
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

async function start(){
    JSON.parse(localStorage.courses).forEach(course => courseGrid.innerHTML += `
                    <div class="course-card">
                    <div class="course-header">
                        <h3>${course.code}</h3>
                        <span class="course-category">${course.category}</span>
                    </div>
                    <div class="course-content">
                        <h4>${course.name}</h4>
                        <p>${course.description}</p>
                        <div class="course-details">
                            <span><i class="fas fa-user"></i> ${course.instructor}</span>
                            <span><i class="fas fa-users"></i> ${course.enrolled}/30</span>
                        </div>
                        <div class="course-details">
                            <span><i class="fas fa-clock"></i> ${course.registrationOpen ? 'Registration Open' : 'Registration Closed'}</span>
                        </div>
                        
                    </div>
                    <div class="course-footer">
                        <button onclick='showDiv(${JSON.stringify(course)})'
                        class="btn btn-secondary">View Details</button>
                        <button onclick='register(${JSON.stringify(course)})' class="btn btn-primary">Register</button>
                    </div>
                </div>`
            )      
                          
}

function showDiv(course){
    // Show details won't work for now because the course names are too
    courseGrid.style.display = "flex";
    courseGrid.style.flexDirection = "column";
    courseGrid.style.gap = "20rem"
    courseGrid.innerHTML = `
                <div class="extended-course-card">
                    <div class="course-header">
                        <h3>${course.code}</h3>
                        <span class="course-category">${course.category}</span>
                    </div>
                    <div class="course-content">
                        <h4>${course.name}</h4>
                        <p>${course.description}</p>
                        <!-- <p>${course.extraDescription}</p> -->

                        <div class="course-details">
                            <span><i class="fas fa-user"></i> ${course.instructor}</span>
                            <span><i class="fas fa-users"></i> ${course.enrolled}/30</span>
                        </div>
                        <div class="course-details">
                            <span><i class="fas fa-hourglass-start"></i> Credit : ${course.credits}</span>
                            <span><i class="fas fa-book-open"></i> Pre-requisites :  ${course.prerequisites.length != 0? course.prerequisites : "None"}</span>
                        </div>
                    </div>
                </div>
                `
}

function register(course){
        // Register won't work for now because the course names are too
    console.log("Working");
    courseGrid.style.display = "flex";
    courseGrid.style.flexDirection = "column";
    courseGrid.style.gap = "20rem"
    courseGrid.innerHTML = `
                <div class="extended-course-card">
                    <div class="course-header">
                        <h3>${course.code}dsadsad</h3>
                        <span class="course-category">${course.category}</span>
                    </div>
                    <div class="course-content">
                        <h4>${course.name}</h4>
                        <p>${course.description}</p>
                        <!-- <p>${course.extraDescription}</p> -->

                        <div class="course-details">
                            <span><i class="fas fa-user"></i> ${course.instructor}</span>
                            <span><i class="fas fa-users"></i> ${course.enrolled}/30</span>
                        </div>
                        <div class="course-details">
                            <span><i class="fas fa-hourglass-start"></i> Credit : ${course.credits}</span>
                            <span><i class="fas fa-book-open"></i> Pre-requisites :  ${course.prerequisites.length != 0? course.prerequisites : "None"}</span>
                        </div>
                    </div>
                    <div class="register-course-footer">
                        <button class="btn btn-primary">Register</button>
                    </div>
                </div>
                <div class="course-card">
                    <div class="course-header">
                        <button>Hey</button>
                    </div>
                </div>
                `
    
}