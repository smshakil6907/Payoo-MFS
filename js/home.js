document.getElementById('btn-add-money').addEventListener('click', function(event){
event.preventDefault();
const addInputMoney = document.getElementById('input-add-money').value;
const addPinNumber = document.getElementById('input-pin-number').value;
console.log(addInputMoney, addPinNumber);

if(addPinNumber === '1234'){
    const balance = document.getElementById('account-balance').innerText;

    const addBalance = parseFloat(addInputMoney);
    const balanceNumber = parseFloat(balance);
    const newBalance = addBalance + balanceNumber;

    document.getElementById('account-balance').innerText = newBalance   ;
    
}
else{
    alert('Failed to add money ! try again');
}
});