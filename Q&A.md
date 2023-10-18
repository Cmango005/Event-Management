Question&Answer:
1. Ans.(a)
variable named greeting is declared, but there is a typographical error in the assignment statement where greetign is used instead of greeting. As a result, greetign is declared as an empty object ({}) but remains uninitialized.
2.Ans. (c)
 when we use the + operator to add values, it performs both numeric addition and string concatenation. In this case, the 1 (a number) is added to "2" (a string), resulting in string concatenation instead of numeric addition. Therefore, the function returns the string "12" as the output, which is the result of combining the two input values as strings
 3.Ans(a)
 const food = ["🍕", "🍫", "🥑", "🍔"]; initializes an array called food with four emoji elements.

const info = { favoriteFood: food[0] }; creates an object called info with a property favoriteFood that is initially set to the first element of the food array, which is "🍕".

info.favoriteFood = "🍝"; updates the favoriteFood property of the info object to "🍝".

console.log(food); logs the original food array to the console, which remains unchanged and still contains the elements ["🍕", "🍫", "🥑", "🍔"].

Changing the favoriteFood property of the info object does not affect the original food array.
4.Ans.(b)
The sayHi function attempts to greet a user by including their name in the greeting message. However, when called without providing a name argument, it defaults to using "undefined" as the name, resulting in a greeting that includes "Hi there, undefined."

To achieve the desired greeting, ensure that you pass a valid name as an argument when calling the sayHi function, like this: sayHi("John"), where "John" is the name you want to include in the greeting message.
5.Ans.(c)
we initialize a variable count to 0 and create an array nums containing [0, 1, 2, 3]. We then use the forEach method to iterate over each element in the nums array. Inside the callback function for forEach, we check if the current element num is truthy (i.e., not equal to 0, which evaluates to false in a boolean context). If num is truthy, we increment the count by 1. As a result, we count the number of truthy elements in the array.