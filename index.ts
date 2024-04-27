#!/usr/bin/env node
import inquirer from "inquirer";

let accountBalance = 10000;
let accountPin = 1221;

console.log("Welcome to the ATM by Waniza Khan");

let pinAnswer = await inquirer.prompt([
  {
    name: "pincode",
    type: "number",
    message: "enter  your pin:"
  }
])
if (pinAnswer.pincode === accountPin) {
  console.log("Correct Pin Code!")

  let operations = await inquirer.prompt([
  {
    name: "operation",
    type: "list",
    message: "select any one option:",
    choices: ["withdraw", "check balance"]
  }
])
//console.log("operations");
if (operations.operation === "withdraw") {
  let amountAns = await inquirer.prompt([
    {
      name: "amount",
      type: "number",
      message: "enter the amount to withdraw:"
    }
  ])
 if(amountAns.amount > accountBalance){
    console.log("Insufficient Balance");
 }else{accountBalance -= amountAns.amount;
    console.log(`${amountAns.amount} Withdraw Succesfully`);
    console.log(`Your Remaining Balance is: ${accountBalance}`);

   }
} else if (operations.operation === "check balance") {
   console.log(`Your balance is: " + accountBalance`)

}
}else{
  console.log(`Wrong Pin Code!`);}