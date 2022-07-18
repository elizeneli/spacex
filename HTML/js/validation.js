

function validateLoginForm(){  
    var name=document.login_form.name.value;  
    var password=document.login_form.password.value; 
    var wrongUsername = document.getElementById('wrong_username');
    var wrongPassword = document.getElementById('wrong_password');
      
    if (name==null || name==""){
        wrongUsername.style.display = 'block';
      return false;
    }else if(password.length<6 || password.length==null){  
        wrongPassword.style.display = 'block';
      return false;  
      }  
    } 