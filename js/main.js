// Global
var regex = {
    nameSign:/^[a-zA-Z\s-]+$/,
    emailSign: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    passwordSign: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/
}

var couldSign = {
    nameSign:false,
    emailSign:false,
    passwordSign:false
}


// ====================================================================
// Login 

var emailLogin = document.querySelector("#emailLogin");
var passwordLogin = document.querySelector("#passwordLogin");


// ====================================================================
// Sign up

var nameSign = document.querySelector("#nameSign");
var emailSign = document.querySelector("#emailSign");
var passwordSign = document.querySelector("#passwordSign");
var signForm = document.querySelector("#signForm");

// ====================================================================
// localstorage init
var users = [];
if(localStorage.getItem('users'))
    {
        users = JSON.parse(localStorage.getItem('users'));
    }


// ====================================================================
// reset data
function resetSignForm()
{
    nameSign.value = null; 
    emailSign.value = null; 
    passwordSign.value = null; 
} 

// ====================================================================
// Create user 
try
{
signForm.addEventListener('submit', function(e)
{
    e.preventDefault();
    if(couldSign.nameSign && 
        couldSign.emailSign &&
        couldSign.passwordSign
    )
    {
        users.push({
            name: nameSign.value,
            email: emailSign.value,
            password: passwordSign.value,
        });
        localStorage.setItem('users',JSON.stringify(users));
        resetSignForm();
        window.location.href = "index.html"
    }
    else
    {
        window.alert('enter valid data');
    }
})}
catch(error)
{
    console.log(error)
}

// ====================================================================
// validation
try
{
signForm.addEventListener('keyup' ,validateInput)
function validateInput(e)
{
    if(regex[e.target.name].test(e.target.value))
    {
        // e.target.classList.remove("bg-transparent");
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
        couldSign[e.target.name] = true;
    }
    else
    {
        // e.target.classList.remove("bg-transparent");
        e.target.classList.remove("is-valid");
        e.target.classList.add("is-invalid");
        couldSign[e.target.name] = false;
    }
}}
catch(error)
{
    console.log(error)
}

//====================================================================
// home page user check

console.log("hello")
console.log(window.location.href.split('/')[window.location.href.split('/').length-1]);
if(window.location.href.split('/')[window.location.href.split('/').length-1]=== 'home.html')
{
    if(!localStorage.getItem('username'))
    {
        window.location.href = 'index.html'
    }
}