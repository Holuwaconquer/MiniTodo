let currentDate = new Date();
let amnpm = currentDate.getHours > 12 ? "AM" : "PM"
let dateString = `${currentDate.toLocaleDateString()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${amnpm}`;


displayDate.innerHTML = `${dateString}`
let todoArray = []

function addList(){
    let userHead1 = document.getElementById('userTitle').value
    let userHead2 = document.getElementById('userInput').value
    let userOption = {
        userText1: userHead1,
        userText2: userHead2,
    }
    if(userInput.value !== '' && userTitle.value !== ''){
        document.getElementById("dangerText").innerHTML = ""
        noItems.style.display = "none"
        todoArray.push(userOption);
        displayTodo()
        
    }else{
        document.getElementById("dangerText").innerHTML = `<p><i style="margin-right: 10px;" class="fa-solid fa-circle-exclamation"></i>Input Field cannot be empty</p>`
    }
}
function displayTodo(){
        userInput.value = ""
        userTitle.value = ""
        todoList.innerHTML = ""
        todoTitle.innerHTML = ""
    for (let i in todoArray){

        todoList.innerHTML +=  `
        <div id="cardd" class="card mb-3 border-0 shadow" style="max-width: 24rem; gap: 1rem;">
            <div class="card-header bg-transparent border-dark d-flex justify-content-between align-items-center"><h2>${todoArray[i].userText1}</h2><div><i style="font-size: 20px; cursor: pointer; color: red;" onclick="deleteMe(${i})" class="fa-solid fa-trash"></i><i style="font-size: 20px; cursor: pointer; margin-left: 10px; color: red;" data-bs-toggle="modal" data-bs-target="#editModal" onclick="editModalButton(${i})" class="fa-solid fa-pen-to-square"></i></div></div>
            <div class="card-body text-dark">
                <p class="card-text">${todoArray[i].userText2}</p>
            </div>
            <div class="card-footer bg-transparent border-dark">Time Added: ${dateString}</div>
        </div>`
        todoTitle.innerHTML += `<div id="whitee" style="display: flex; align-items: center;"><p><i style="margin-right: 10px; font-size: 20px;" id="" class="fa-solid fa-tags"></i></p> <p>${todoArray[i].userText1}</p></div>`
    }
}

function editModalButton(i){
    document.getElementById("mdbtn").innerHTML =         `
  
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" onclick="editMe(${i})" id="saveButton">Add</button>
    `
}

function deleteMe(i){
    let confirming = confirm("Are you sure you want to delete this list?")
    if(confirming){
        todoArray.splice(i, 1)
        displayTodo();
    }else{
        displayTodo()
    }
}
function editMe(i){
    console.log("Hello user", i)
    if(newUserTitle.value !='' || newUserInput.value != ''){
        let userHead3 = document.getElementById('newUserTitle').value
        let userHead4 = document.getElementById('newUserInput').value
        todoArray[i].userText1 = userHead3
        todoArray[i].userText2 = userHead4
        console.log("editMe:", todoArray, i)
        console.log("editMe[i]:", todoArray[i], i)
        displayTodo(todoArray)
    }else{
        dangerTextt.innerHTML = `<p><i style="margin-right: 10px;" class="fa-solid fa-circle-exclamation"></i>Input field cannot be empty</p>`
    }
    
}
function deleteAll(){
    if(todoArray.length >=1){
        let confirming = confirm("Are you sure you want to delete all list?")
        if(confirming){
            todoArray.splice(0, todoArray.length)
            displayTodo()
        }else{
            displayTodo()
        }
    }else{
        alert("No item to delete")
    }
    
}
function darkTheme(){
    body.style.backgroundColor = "#343a40"
    stagg.style.color = "white"
    todoTitle.style.color = "white"
    darkthemeBtn.innerHTML = `<button onclick="darkThemeagain()" style="background-color: white; color: black;" class="darkthemeBtn">Switch to Light Mode</button>`
    profilelist.style.backgroundColor = "#343a40"
    toTitle.style.color = "white"
    profilelist.style.color = "white"
    document.getElementById("todo-side").style.boxShadow = "0px 0px 50px 10px rgb(32, 32, 32)"
    document.getElementById("todo-side").style.backgroundColor = "#343a40"
    document.getElementById("deletea").style.backgroundColor = "#f8f9fa"
    document.getElementById("deletea").style.color = "black"
    displayDate.style.color = "white"
    sideTitle.style.color = "white"
}
function darkThemeagain(){
    body.style.backgroundColor = "#f8f9fa"
    stagg.style.color = "black"
    todoTitle.style.color = "black"
    darkthemeBtn.innerHTML = `<button onclick="darkTheme()" id="darkthemeBtn" class="darkthemeBtn">Switch to Dark Mode</button> `
    profilelist.style.backgroundColor = "#f8f9fa"
    toTitle.style.color = "black"
    profilelist.style.color = "black"
    document.getElementById("todo-side").style.boxShadow = "0px 0px 50px 10px rgb(32, 32, 32)"
    document.getElementById("todo-side").style.backgroundColor = "#f8f9fa"
    document.getElementById("deletea").style.backgroundColor = "#343a40"
    document.getElementById("deletea").style.color = "white"
    displayDate.style.color = "#343a40"
}



const showMore = () =>{
    document.getElementById('profilelist').style.display = "block"
}

                                   
document.getElementById('speakBtn').addEventListener('click', () => {
    var SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // recognition.interimResults = true;
    recognition.start();
    recognition.onresult = function(event){
        console.log(event);
        userInput.value = event.results[0][0].transcript;
        // let value = event.results[0][0].transcript;
        // body.style.backgroundColor = value;
        // speakBack(value)
    }
});
document.getElementById('speakBtn2').addEventListener('click', () => {
    var SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // recognition.interimResults = true;
    recognition.start();
    recognition.onresult = function(event){
        console.log(event);
        userTitle.value = event.results[0][0].transcript;
        // let value = event.results[0][0].transcript;
        // body.style.backgroundColor = value;
        // speakBack(value)
    }
});
// for the edit modal button
document.getElementById('speakBtn3').addEventListener('click', () => {
    var SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // recognition.interimResults = true;
    recognition.start();
    recognition.onresult = function(event){
        console.log(event);
        newUserTitle.value = event.results[0][0].transcript;
        // let value = event.results[0][0].transcript;
        // body.style.backgroundColor = value;
        // speakBack(value)
    }
});
document.getElementById('speakBtn4').addEventListener('click', () => {
    var SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // recognition.interimResults = true;
    recognition.start();
    recognition.onresult = function(event){
        console.log(event);
        newUserInput.value = event.results[0][0].transcript;
        // let value = event.results[0][0].transcript;
        // body.style.backgroundColor = value;
        // speakBack(value)
    }
});

                                   
