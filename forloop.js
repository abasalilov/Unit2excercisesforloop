/*Multiplication Tables
Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).*/

//first version
for (var i = 0; i <= 10; i++){
	console.log(i + " * 9 = " + (i*9))
}

//bonus version
for (var i = 1; i <= 10; i++){
 for(var n=1; n<=10; n++){
     	console.log(i + " * " +n+ " = " + (i*n))
}
}