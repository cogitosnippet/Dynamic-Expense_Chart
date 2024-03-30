
let day = new Date();
let weekday = ['mon','tue','wed','thu','fri','sat','sun'];
let today_day = (day.getDay());
for(let index=0; index<weekday.length; index++){
  if(index===today_day-1){
    document.getElementById(`${weekday[index]}`).classList.add('today-day');
  }
}


fetch('data.json')
  .then(response => response.json())
  // .then(data => console.log(data))
  .then(data =>{
    let array = data;

    // for finding maximum-amount
    let amount = [];
    array.forEach(element => {
      amount.push((element.amount));
    });
    let total_amount = 0;
    let maximum_amount = Math.max(...amount);

    // for setting height
    array.forEach(element=>{
      document.getElementById(`${element.day}`).style.height = `${(element.amount/maximum_amount)*100}%`;
    })

    // for setting amount of each day
    array.forEach(element=>{
      document.getElementById(`${element.day}-amount`).innerHTML = `$ ${element.amount}`;
    })

    // for total amount in whole week
    amount.forEach(element=>{
      total_amount += element;
    })
    document.getElementById('week-amount').innerHTML = `$ ${total_amount}`;
    document.getElementById('balance-amount').innerHTML = `$ ${(1000 - total_amount)}`
  })
  .catch(error => console.error('Error:', error));

;

