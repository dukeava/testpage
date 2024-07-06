 // Dating
 let ticketPrice = 14.00;
 let numTickets = 3;
 let totalCost = ticketPrice * numTickets;
 document.getElementById('ticketNum').innerText = 'Tickets: ' + numTickets;
 document.getElementById('ticketCost').innerText = 'Cost: $' + ticketPrice.toFixed(2);
 document.getElementById('ttCost').innerText = 'Total: $' + totalCost.toFixed(2);

 // Shopping
 let bankBalance = 235.87;
 let shirtPrice = 35;
 let pantsPrice = 75;
 let shoesPrice = 60;
 let totalPurchase = shirtPrice + pantsPrice + shoesPrice;
 let remainingBalance = bankBalance - totalPurchase;
 let jacketPrice = 70;
 let canAddJacket = remainingBalance >= jacketPrice;
 document.getElementById('bank').innerText = 'Remaining Balance: $' + remainingBalance.toFixed(2);
 document.getElementById('addJacket').innerText = 'Can add jacket: ' + canAddJacket;

 // Pizza
 let numPizzas = 5;
 let slicesPerPizza = 8;
 let totalSlices = numPizzas * slicesPerPizza;
 let slicesPerStudent = 2.5;
 let numStudents = Math.floor(totalSlices / slicesPerStudent);
 let slicesLeft = totalSlices % slicesPerStudent;
 document.getElementById('profPizza').innerText = 'Students fed: ' + numStudents + ', Slices left: ' + slicesLeft;

 // Monty's Mega Bar
 let adultPrice = 12.00;
 let childPrice = 6.00;
 let drinkPrice = 1.50;
 let totalMealCost = (2 * adultPrice) + (1 * childPrice) + (3 * drinkPrice);
 document.getElementById('Monty').innerText = 'Total Meal Cost: $' + totalMealCost.toFixed(2);

 // Average Earned Tips
 let tipsWeek1 = 202.45;
 let tipsWeek2 = 134.97;
 let tipsWeek3 = 256.63;
 let tipsWeek4 = 178.22;
 let totalTips = tipsWeek1 + tipsWeek2 + tipsWeek3 + tipsWeek4;
 let averageTips = totalTips / 4;
 document.getElementById('tips').innerText = 'Average Weekly Tips: $' + averageTips.toFixed(2);
