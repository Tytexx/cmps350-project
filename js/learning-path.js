const BASE_URL = 'http://127.0.0.1:3000/cmps350-project/home.html'
console.log("Hey");

document.addEventListener("DOMContentLoaded",fetchData)
const learningPathGrid = document.querySelector(".course-path-grid")

async function fetchData(){
    const courses = await fetch("../data/courses2.json");
    let courseList = await courses.json();
    localStorage.courses = JSON.stringify(courseList)
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

                          
}