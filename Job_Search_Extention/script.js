//Enter in a job url
//Save it with localStorage
//It tells you when the due date is
//Order them by due date
//Add delete button next to each link


const job_url = document.getElementById("save_job")
const save_button = document.getElementById("button")
const job_list = document.getElementById("list_of_jobs")
const job_check = JSON.parse(localStorage.getItem("my_jobs"))
document.getElementById("button").addEventListener("click", save_function);


let jobs = []
if(job_check){
    jobs = job_check
    show_list()
}

/* function delete_data(index){
    //index is a placeholder for that point in the array?
    jobs.splice(index, 1)
    //Everytime you delete an item from the array you need to update local storage again. 

    localStorage.setItem("my_jobs", JSON.stringify(jobs))
    show_list()
} */

let storage_keys = []
function save_function(){
    for (i = 0; i<=storage_keys.length; i++){
        
        
        jobs.push(job_url.value)
        

        localStorage.setItem("my_jobs", JSON.stringify(jobs))
        console.log(JSON.parse(localStorage.getItem("my_jobs")))
        job_url.value = ""
        show_list()
    }
        
        
}

function show_list(){
    let list_items = ""
    for(i=0; i<jobs.length; i++){
        list_items += `
        <li>
            <a target='_blank' href='${jobs[i]}'>
                ${jobs[i]} <a  id="delete_button" class="delete_button">
                <img class="delete_image" src="an.png">
                </a>
            </a>
        </li>
    `
        

        
    }
    job_list.innerHTML = list_items
    const delete_list = document.querySelectorAll(".delete_button");
        for (let i = 0; i < delete_list.length; i++){
            delete_list[i].addEventListener("click", function() {
                jobs.splice(i, 1)
                //Everytime you delete an item from the array you need to update local storage again. 
            
                localStorage.setItem("my_jobs", JSON.stringify(jobs))
                show_list()
            })
        }
}
console.log(jobs)