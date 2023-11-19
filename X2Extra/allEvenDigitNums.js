/*
- create an empty array to hold the even numbers
- starting from the larger number check if all the digits are even
- If the digits are even, add the number to the array
- otherwise, find the next number between the two to check

* check the digits:
- start from the leftmost digit of the higher number
- If a digit is odd, remove one from it and move on to the next digit on the right
- If a digit is even, move on to the next digit on the right
- When no more digits are left to the right, ckeck if the number is in the range
- If the number is smaller than the smaller number use the previous digit and move on to the next digit on the right
- Otherwise, move down to the closest higher number and check
- If the number being checked is larger than the higher number, return the array
*/
