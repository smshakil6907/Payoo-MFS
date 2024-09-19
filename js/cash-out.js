document.getElementById('btn-cashout-add-money').addEventListener('click', function(event){
event.preventDefault();
const cashOutMoney = document.getElementById('input-cashout-money').value;
const cashOutPin = document.getElementById('input-cashOut-pin-number').value;
const cashOutNumber = parseFloat(cashOutMoney);
const balance = document.getElementById('account-balance').innerText;
const balanceNumber = parseFloat(balance);
if(cashOutPin === '1234'){
    const increaseBalance = balanceNumber - cashOutMoney;
    document.getElementById('account-balance').innerText = increaseBalance;
}
else{
    alert('invalied number or pin !')
}
})