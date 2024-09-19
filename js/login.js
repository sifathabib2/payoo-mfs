// console.log('button clicking file added');
// document.getElementById('id').addEvenListener('click', fun)

// search : form submit reloading the page

// step1 : set event handler
document.getElementById('btn-login').addEventListener('click', function (event) {
    // step2 : prevent default behavior (prevent reloading browser) 
    event.preventDefault();     // vejal for beginners
    console.log('login button clicked');
    // step3 : get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
    


})
