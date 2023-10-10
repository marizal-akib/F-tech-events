<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B 

<i> There is a typo in the variable name 'greetings' </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>When you do 1 + "2", JavaScript takes the number 1 and the string "2" and combines them together. It doesn't add them like numbers; instead, it treats them both as text and puts them side by side. So, you get the result "12" because it's like putting two pieces of text next to each other.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: a

<i>The info object initially had a favouriteFood property with a value, but that value was replaced. So, if you were to log info.favouriteFood, it would show the new value. If we log the food array,  it will remain unaffected by the changes to the info object.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>This function sayHi that takes one parameter, 'name' and returns a Hi there with dynamic name in it. But when it call sayHi() in  console.log, It haven't get any argument for the name parameter. so when it try to set the name dynamically with a parameter which is undefine it will output undefined if we try to log it.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>In this code there is a for loop for count each element in the nums array. this loop has an if condition that is if there is an if there is num element or we can say if there is a truthy element then this loop will add 1 with the value of count which is 0. In this sense there is 4 element in nums array so for loop should add 1 to count 4 times and the count value should become after calling this loop. But the 1st element of nums array is 0 which is falsy so the if condition doesn't count 0. and that's why the value of count should be 3.
</i>

</p>
</details>
