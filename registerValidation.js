const Validate=()=>{
    // picking input fields with their names
    let firstName = document.register.firstname
    let lastName = document.register.lastname
    let email = document.register.emailinput
    let phone = document.register.phoneinput
    let national = document.register.niniput
    let car = document.register.carType
    let model = document.register.modelinput
    let color = document.register.colorinput
    let number = document.register.numberplate




    // picking error fields
    let errorFirstName = document.getElementById("fnameError")
    let errorLastName = document.getElementById("lnameError")
    let errorEmail = document.getElementById("emailError")
    let errorNatinoal = document.getElementById("ninError")


   


    // validating first name input
    // validating for emptyness
    if(firstName.value == ""){
        firstName.style.border = "1px solid red";
        errorFirstName.textContent = "first name is required";
        errorFirstName.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        firstName.focus();
        return false;
    }else if(firstName.value.length < 2){
        firstName.style.border = "1px solid red";
        errorFirstName.textContent = "first name should be atleast 2 characters";
        errorFirstName.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        firstName.focus();
        return false;

    }else if(firstName.value.length > 15){
        firstName.style.border = "1px solid red";
        errorFirstName.textContent = "should be atleast 2 characters";
        errorFirstName.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        firstName.focus();
        return false
    }else{
        firstName.style.border = "1px solid green";
        firstName.focus();
        
    }

    if(lastName.value == ""){
        lastName.style.border = "1px solid red";
        errorLastName.textContent = "first name is required";
        errorLastName.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        lastName.focus();
        return false;
    }else if(lastName.value.length < 2){
        lastName.style.border = "1px solid red";
        errorLastName.textContent = "should be atleast 2 characters";
        errorLastName.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        lastName.focus();
        return false;

    }else if(lastName.value.length > 15){
        lastName.style.border = "1px solid red";
        errorLastName.textContent = "first name should be atleast 2 characters";
        errorLastName.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        lastName.focus();
        return false
    }else{
        lastName.style.border = "1px solid green";
        lastName.focus();
        
    }


    // // validating first email input
    // // validating for emptyness
    if(email.value == ""){
        email.style.border = "1px solid red";
        errorEmail.textContent = "email is required";
        errorEmail.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        email.focus();
        return false;
    }else{
        email.style.border = "1px solid green";
        email.focus();
    }

    const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(!email.test(EmailRegex)){
        email.style.border = "1px solid red";
        errorEmail.textContent = "wrong email type";
        errorEmail.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        email.focus();
        return false;
    }




//   // validating nin input
//     // validating for emptyness

    if(national.value == ""){
        national.style.border = "1px solid red";
        errorNatinoal.textContent = "nin is required";
        errorNatinoal.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        national.focus();
        return false;
    }

//     const nationalRegex = /^CF([a-zA-Z0-9]{12})+$/
//     const nationalRegex2 = /^CM([a-zA-Z0-9]{12})+$/

//     if(!(national.value.test(nationalRegex) || national.value.test(nationalRegex2))){
//         national.style.border = "1px solid red";
//         errorNatinoal.textContent = "right nin type CM/CFXXXXXXXX";
//         errorNatinoal.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
//         national.focus();
//         return false;
//     }else{
//         national.style.border = "1px solid green";
//         national.textContent = "";
        
//     }

   
    



// // generaating unique nnumber 
//  const tokenRegex = /^BB-([0-9]{3})+$/
// // eg BB-200 

// if(!(car.value.test(tokenRegex) || car.value.test())){
    

}


   
    

