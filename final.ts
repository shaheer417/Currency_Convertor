import inquirer from "inquirer";

// Conversion rates
const rates: any = {
  USD: 1,
  PKR: 160,
  EUR: 0.85,
};
function convertCurrency(
  amount: number,
  fromCurrency: string,
  toCurrency: string
): number {
  return (amount / rates[fromCurrency]) * rates[toCurrency];
}

// Function to ask user for input
let askUser = async () => {
  let userInput = await inquirer.prompt([
    {
      type: "list",
      name: "fromCurrency",
      message: "What currency are you converting from?",
      choices: Object.keys(rates),
    },
    {
      type: "list",
      name: "toCurrency",
      message: "What currency are you converting to?",
      choices: Object.keys(rates),
    },
    {
      type: "input",
      name: "amount",
      message: "Enter the amount you want to convert:",
    },
  ]);

  if (isNaN(userInput.amount)) {
    console.log("Please enter a valid number.");
  } else {
    // const numericAmount = parseFloat(userInput.amount);
    const convertedAmount = convertCurrency(
      userInput.amount,
      userInput.fromCurrency,
      userInput.toCurrency
    );
    console.log(
      `${userInput.amount} ${
        userInput.fromCurrency
      } is approximately ${convertedAmount.toFixed(2)} ${userInput.toCurrency}`
    );
  }
};
askUser();
