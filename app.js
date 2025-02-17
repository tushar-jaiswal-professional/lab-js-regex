/* Fill your code*/
function formValidate(){
    //Input variable
    var name = document.forms["RegForm"]["Name"];
    var address = document.forms["RegForm"]["Address"];
    var email = document.forms["RegForm"]["EMail"];
    var password = document.forms["RegForm"]["Password"];
    var cpassword = document.forms["RegForm"]["cPassword"];
    var phone = document.forms["RegForm"]["Phone"];

    //Error Field Variable
    var errname = document.getElementById("name");
    var erraddress = document.getElementById("address");
    var erremail = document.getElementById("email");
    var errpassword = document.getElementById("pwd");
    var errcpassword = document.getElementById("cpwd");
    var errphone = document.getElementById("phone");
    var validate = document.getElementById("validate");
    var checkbtn = document.getElementById("checkbtn");

    //All Field Empty
    if (name.value == "" && address.value == "" && email.value == "" && password.value == "" && cpassword.value == "" && phone.value == "") {
        errname.innerText = "Alteast 8 to 15 Characters Required";
        erraddress.innerText = "Kindly fill Address field";
        erremail.innerText = "Kindly fill Email field";
        errpassword.innerText = "Kindly fill this field";
        errcpassword.innerText = "Kindly fill this field";
        errphone.innerText = "Kindly fill this field";
        validate.innerText = ""
    }

    //Name errors
    if(name.value.length<8 || name.value.length>15){
        errname.innerText = "Atleast 8 to 15 Character Required";
        validate.innerText = ""
        name.focus();
        return false;
    }
    else{
        errname.innerText = "";
        validate.innerText = ""
    }

    //Address errors
    if(address.value == ""){
        erraddress.innerText = "Kindly fill Address Field";
        validate.innerText = ""
        address.focus();
        return false;
    }
    else{
        erraddress.innerText = "";
        validate.innerText = ""
    }

    //Email errors
    if(email.value == ""){
        erremail.innerText = "Kindly fill Email Field";
        validate.innerText = ""
        email.focus();
        return false;
    }
    else if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.value)){
        erremail.innerText = "";
        validate.innerText = ""
    }
    else{
        erremail.innerText = "Email is Invalid";
        validate.innerText = ""
        email.focus();
        return false;
    }

    //Password errors
    if(password.value == ""){
        errpassword.innerText = "Kindly fill Password Field";
        validate.innerText = ""
        password.focus();
        return false;
    }
    else if(password.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/)){
        errpassword.innerText="";
        validate.innerText = ""
    }
    else{
        errpassword.innerText = "Password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number and any symbol";
        validate.innerText = ""
        password.focus();
        return false;
    }

    //Confirm Password errors
    if(cpassword.value == ""){
        errcpassword.innerText = "Kindly fill Confirm Password Field";
        validate.innerText = ""
        cpassword.focus();
    }
    else if(cpassword.value==password.value){
        errcpassword.innerText = "";
        validate.innerText = ""
    }
    else{
        errcpassword.innerText = "Password and Confirm Password must be same";
        validate.innerText = ""
        cpassword.focus();
        return false;
    }

    //Phone errors
    if(phone.value == ""){
        errphone.innerText = "Kindly fill this field";
        validate.innerText = ""
        phone.focus();
        return false;
    } 
    else if(phone.value.length < 10){
        errphone.innerText = "phone number should contain 10 numbers";
        validate.innerText = ""
        phone.focus();
        return false;
    }
    else{
        errphone.innerText = "";
        validate.innerText = ""
    }

    validate.innerText = "Regex Validation Success"
    checkbtn.focus();
    return false;
}