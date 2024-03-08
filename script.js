const form = document.getElementById("form1")
const uname = document.getElementById("uname")

const email = document.getElementById("email")
const phoneNumber = document.getElementById("phoneNumber")
const password = document.getElementById("psd")
const cpassword = document.getElementById("cpassword")
const term = document.getElementById("term")


var isValidName = false;
var isValidEmail= false;
var isValidPhoneNumber = false;
var isValidPassword = false;
var isValidNameCpassword = false;
var isValidTerm = false;

form.addEventListener('submit',(e)=>{
    
    e.preventDefault()
    validate()
})
function validate(){
    let nameValue = uname.value.trim()
    let phoneNumberValue = phoneNumber.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let cpasswordValue = cpassword.value.trim()
    let termValue = term.value.trim()

    isValidName = false;
    isValidEmail= false;
    isValidPhoneNumber = false;
    isValidPassword = false;
    isValidNameCpassword = false;
    isValidTerm = false;


    if(nameValue===''){
        setError(uname,'user name cannot be empty')
    }else if(nameValue.length<3){
        setError(uname,'user name should not be minimum 3 characters')
    }else{
        setSuccess(uname);
        isValidName = true;
    }



    if(emailValue===''){
        setError(email,'email cannot be empty')
    }else if(!emailCheck(emailValue)){
        setError(email,'Enter a valid email Id')
    }else{
        setSuccess(email);
        isValidEmail= true;
    }



    if(phoneNumberValue===''){
        setError(phoneNumber,'Phone should not be empty')
    }else if(phoneNumberValue.length<10){
        setError(phoneNumber,'Enter a vaild phone number')
    } else{
        setSuccess(phoneNumber);
        isValidPhoneNumber = true;
    }



    if(passwordValue===''){
        setError(password,'password cannot be empty')
    }else if((passwordValue.length < 8)){
        setError(password,'password should be minimum 8 characters')
    } else{
        setSuccess(password);
        isValidPassword = true;
    }


    if(cpasswordValue===''){
        setError(cpassword,'password cannot be empty')
    }else if(passwordValue !== cpasswordValue){
        setError(cpassword,'password not matched')
    }else{
        setSuccess(cpassword);
        isValidNameCpassword = true;
    }



    if(!term.checked){
        setError(term,'Click on terms and conditions')
    } else{
        setSuccess(term);
        isValidTerm = true;
    }

    if(isValidName &&  isValidEmail && isValidPhoneNumber &&   isValidPassword &&  isValidNameCpassword && isValidTerm)
    form.submit()


    function setError(input,message){
        let parent = input.parentElement;
        let small = parent.querySelector('small')
        small.innerText = message
        parent.classList.add('error')
        parent.classList.remove('success')
    }
    function setSuccess(input){
        let parent = input.parentElement;
        parent.classList.add('success')
        parent.classList.remove('error')
    }
    function emailCheck(input){
        let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let valid = emailReg.test(input)
        return valid
    }
    
}




