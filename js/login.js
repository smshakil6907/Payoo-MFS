

document.getElementById('button-login').addEventListener('click', function(event){
event.preventDefault();
// console.log('login button clicked');

const phoneNumber = document.getElementById('phone-number').value;
const pinNumber = document.getElementById('pin-number').value;
// console.log(phoneNumber, pinNumber);

if(phoneNumber === '5' && pinNumber === '1234'){
    console.log('you are loged in')
    window.location.href = '/home.html'
}
else{
    alert('your phone or pin is incorrect.')
};
});
