// Global
var regex = {
    nameSign:/^[a-zA-Z\s-]+$/,
    emailSign: /^(\w+|\W)+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    passwordSign: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/
}

var couldSign = {
    nameSign:false,
    emailSign:false,
    passwordSign:false
}

// ====================================================================
// Home page
var username = document.querySelector('#username');
var btnLogout = document.querySelector('#btnLogout');

// ====================================================================
// Login page

var emailLogin = document.querySelector("#emailLogin");
var passwordLogin = document.querySelector("#passwordLogin");
var loginForm = document.querySelector('#loginForm');
var btnLogin = document.querySelector('#btnLogin')


// ====================================================================
// Sign up page

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
    })
}
catch(error)
{
    console.log(`Create user submit event:
        ${error}`)
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
    }
}
catch(error)
{
    console.log(`validation keyup event:
        ${error}`)
}

//====================================================================
// home page user check redirection
var username = document.querySelector('#username');

if(window.location.href.split('/')[window.location.href.split('/').length-1].match(/^home\.html\#?$/))
{
    if(!localStorage.getItem('username'))
    {
        window.location.href = 'index.html'
    }
    else
    {
        username.innerHTML = `Welcome ${localStorage.getItem('username')}`
    }
}

//====================================================================
// home page user check redirection

if(window.location.href.split('/')[window.location.href.split('/').length-1].match(/^(?:index\.html|signup\.html)?#?$/))
{
    if(localStorage.getItem('username'))
    {
        window.location.href = 'home.html'
    }
    else
    {
        // username.innerHTML = `Welcome ${localStorage.getItem('username')}`
    }
}

//====================================================================
// login function
try
{
    loginForm.addEventListener('submit', function(e)
    {
        e.preventDefault();
        
        for (var user of users) 
        {
            if(user.email == emailLogin.value &&
                user.password == passwordLogin.value
            )
            {
                window.location.href = 'home.html';
                localStorage.setItem('username', user.name)
            }
            else
            {
                console.log(user);
            }
        }
        // btnLogin.dataset.bsToggle = "modal"
        // // btnLogin.dataset.bsTarget = "#exampleModal1"
        // console.log();
        
    })
}
catch(error)
{
    console.log(`login submit event:
        ${error}`);
}

//====================================================================
// logout function 

try
{
    btnLogout.addEventListener('click', function()
    {
        // console.log('i am here')
        localStorage.removeItem('username');
        window.location.href = ""
    })
}
catch(error)
{
    console.log(`logout submit event:
        ${error}`);
}
