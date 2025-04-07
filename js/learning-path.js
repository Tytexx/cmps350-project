const BASE_URL = 'http://127.0.0.1:3000/cmps350-project/home.html'
console.log("Hey");

document.addEventListener("DOMContentLoaded",fetchData)
const learningPathGrid = document.querySelector(".course-path-grid")
const progressContainer = document.querySelector(".progress-stats")

async function fetchData(){
    const courses = await fetch("../data/courses2.json");
    let courseList = await courses.json();
    localStorage.courses = JSON.stringify(courseList)

    const students = await fetch("../data/students.json");
    let studentList = await students.json();
    localStorage.students = JSON.stringify(studentList)
    
    start()
}

async function start(){
    
    JSON.parse(localStorage.courses).forEach(course => learningPathGrid.innerHTML += `
                                <!-- Course begin here -->
                                 <!-- Year 1 -->
                                <div class="course-box">
                                    ${course.code}
                                </div>

        `)
        loadProgramProgress()

                          
}

async function loadProgramProgress(){
        const currentStudentId = JSON.parse(localStorage.getItem("user"))

        const studentList = JSON.parse(localStorage.students)            
        const student = studentList.find(student => String(student.id) == currentStudentId)
        console.log(student);

        const completedCourses = student.courses.filter(course => course.status == "completed").length
        console.log(completedCourses);

        progressContainer.innerHTML = `<div class="stat-item">
        <span class="stat-label">Completed Courses:</span>
        <span class="stat-value" id="completed-courses">${completedCourses}/20</span>
        </div>
        <div class="stat-item">
        <span class="stat-label">Credits Earned:</span>
        <span class="stat-value" id="credits-earned">${completedCourses*3}/100</span>
        </div>
        <div class="stat-item">
        <span class="stat-label">Current GPA:</span>
        <span class="stat-value" id="current-gpa">${completedCourses*3}</span>
        </div>`                    
}
// #28a745
// #ffc107
// #355c7d

