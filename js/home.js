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


function start(){
    const courseGrid = document.querySelector(".courses-grid")
    courseGrid.innerHTML = `
                    <div class="course-card">
                    <div class="course-header">
                        <h3>${code}</h3>
                        <span class="course-category">${category}</span>
                    </div>
                    <div class="course-content">
                        <h4>${name}</h4>
                        <p>${description}</p>
                        <div class="course-details">
                            <span><i class="fas fa-user"></i>${instructor}</span>
                            <span><i class="fas fa-users"></i> 15/30 Enrolled</span>
                        </div>
                    </div>
                    <div class="course-footer">
                        <button class="btn btn-secondary">View Details</button>
                        <button class="btn btn-primary">Register</button>
                    </div>
                </div>` 
                
}
