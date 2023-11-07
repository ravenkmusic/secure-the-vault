/* Step One: Initialize repository
Step Two: Title the page and link javascript file
Step Three: Create alert to invite user to open the vault and display the combination.
Step Four: Initialize three variables to serve as the equations
to generate the combination
Step Five: Create text field so that user can enter each number one at a time.
Step Six: Create functions retrieve input and to alert user whether or not the combination is entered successfully.
*/

const inviteMessage = alert("You have received this message because you have been chosen to open an important vault. Here is the secret combination: 10 - 40 - 39."); //alerting user to enter combination

document.getElementById('combination').addEventListener('submit', retrieveInput);

function retrieveInput(){
    const first = document.getElementById('first').value; //retrieves input from first field
    const second = document.getElementById('second').value; //retrieves input from second field
    const third = document.getElementById('third').value; //retrieves input from third field
    console.log(first); //logs user input from first field
    console.log(second); //logs user input from second field
    console.log(third); //logs user input from third field

    openOrShutVault(first, second, third); //calls function using the input values
}

function openOrShutVault (first, second, third){
    //verifies if user input is the correct combination

    const firstNumber = 5 * 2; //equation for first number
    const secondNumber = 8 * 5; // equation for second number
    const thirdNumber = 13 * 3; // equation for third number
        if (first == firstNumber && second == secondNumber && third == thirdNumber){
            alert("Correct! You've opened the vault!");
        } else {
            alert("Not quite. Try again.");
        }
}