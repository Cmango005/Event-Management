Here are five features of the `Home` component:

1. **Buy Now Button with Link**: The component includes a "Buy Now" button that is wrapped with a `Link` component from React Router. This allows users to navigate to the "/latest" route when they click the button.

2. **Marquee for Latest iPhone 15**: The component uses the "react-fast-marquee" library to display a scrolling marquee that announces the release of the latest iPhone 15. It adds a dynamic and eye-catching element to the page.

3. **Clickable Service Card**: There is a clickable service card with a pink background that invites users to click and see the latest gadgets. It provides an interactive way for users to explore products.

4. **Clickable Review Card**: Another card in the component is designed for showcasing customer reviews. Users can click on it to access reviews from happy customers, creating a sense of trust and credibility.

5. **Facebook Link**: The component includes a section with a "Find Us on Facebook" message, and it is wrapped with a `Link` component pointing to the Apple Facebook page. Clicking on it will take users to the Apple Facebook page.

These features enhance the user experience and encourage user engagement by providing easy navigation, dynamic content, and links to relevant information and resources.

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







