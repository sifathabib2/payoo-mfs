// console.log('button clicking file added');
// document.getElementById('id').addEvenListener('click', fun)

// search : form submit reloading the page

// step1 : set event handler
document.getElementById('btn-login').addEventListener('click', function (event) {
    // step2 : prevent default behavior (prevent reloading browser) 
    event.preventDefault();     // vejal for beginners
    // console.log('login button clicked');
    // step3 : get the phone number and pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);
    // step 4: validate phone and pin
    // this is temporary. You shouldn't do like this'
    if (phoneNumber === '5' && pinNumber === '1234') {
        console.log('you are logged in');
        window.location.href = '/home.html';
    }
    else{
        console.log('wrong phone number or pin');
        
    }


})
