let web_username = "abusha";
let web_password = "abu123";
let form = document.getElementById("form");


if((window.location.pathname.endsWith("login.html"))){
    form.addEventListener('submit' , (e) => {
        e.preventDefault() 
    
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
    
        if( username == web_username && password ==  web_password ){ 
            window.location.href = "socialMediaDashboard.html";
        }
        else{
            window.alert("Enter correct username and password");
            document.getElementById("username").value = '';
            document.getElementById("password").value = '';
        }
    });
}







