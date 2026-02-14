alert("Welcome to My Menu Driven Calculator!");

let repeat = true;

while (repeat) {
    let choice = prompt(
`MENU DRIVEN CALCULATOR
1. Addition
2. Subtraction
3. Multiplication
4. Division

Enter your choice (1-4):`);

    let a, b, result;

    if (choice >= 1 && choice <= 4) {
        a = Number(prompt("Enter first number:"));
        b = Number(prompt("Enter second number:"));

        switch (choice) {
            case "1":
                result = a + b;
                break;
            case "2":
                result = a - b;
                break;
            case "3":
                result = a * b;
                break;
            case "4":
                if (b === 0) {
                    alert("Math Error: Division by zero is not allowed.");
                    result = "Not defined";
                } else {
                    result = a / b;
                }
                break;
        }

        alert("Result = " + result);
    } else {
        alert("Invalid choice!");
    }

    repeat = confirm("Do you want to continue?");
}

alert("Thank you for using the calculator!");