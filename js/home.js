const BASE_URL = 'http://127.0.0.1:3000/cmps350-project/home.html'

document.addEventListener("DOMContentLoaded",start)
let selectedCourse = ''

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


const courseGrid = document.querySelector(".courses-grid")

async function start(){
    const courses = await fetch("../data/courses2.json");
    courseList = await courses.json();
    const courseGrid = document.querySelector(".courses-grid")
    courseList.forEach(course => courseGrid.innerHTML += `
                    <div class="course-card">
                    <div class="course-header">
                        <h3>${course.id}</h3>
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
                            <span><i class="fas fa-clock"></i> ${course.status}</span>
                        </div>
                        
                    </div>
                    <div class="course-footer">
                        <button onclick='showDiv(${JSON.stringify(course)})'
                        class="btn btn-secondary">View Details</button>
                        <button class="btn btn-primary">Register</button>
                    </div>
                </div>` )      
                          
}

function showDiv(course){
    courseGrid.innerHTML = `
                    <div class="extended-course-card">
                    <div class="course-header">
                        <h3>${course.id}</h3>
                        <span class="course-category">${course.category}</span>
                    </div>
                    <div class="course-content">
                        <h4>${course.name}</h4>
                        <p>${course.description}</p>
                        <p>${course.extraDescription}</p>

                        <div class="course-details">
                            <span><i class="fas fa-user"></i> ${course.instructor}</span>
                            <span><i class="fas fa-users"></i> ${course.enrolled}/30</span>
                        </div>
                        <div class="course-details">
                            <span><i class="fas fa-user"></i> Credit : ${course.credits}</span>
                            <span><i class="fas fa-users"></i> ${course.enrolled}/30</span>
                        </div>
                    </div>
                    <div class="course-footer">
                        <button onclick="showDiv()" class="btn btn-secondary">View Details</button>
                        <button class="btn btn-primary">Register</button>
                    </div>
                </div>`
}