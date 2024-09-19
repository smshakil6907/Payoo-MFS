document.getElementById('btn-cash-out-form').addEventListener('click', function(){
    const cashOutButton = document.getElementById('cash-out-form').classList.remove('hidden');
    const addMoneyButton = document.getElementById('add-money-form').classList.add('hidden')

})

document.getElementById('btn-add-money-form').addEventListener('click', function(){
    const cashOutButton = document.getElementById('cash-out-form').classList.add('hidden');
    const addMoneyButton = document.getElementById('add-money-form').classList.remove('hidden')

})