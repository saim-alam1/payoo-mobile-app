// document.getElementById('cashout-btn')
//   .addEventListener('click', function (event) {
//     event.preventDefault();

//     const pinNumber = document.getElementById('cashout-pin-number').value;
//     const convertedPin = parseInt(pinNumber);

//     const amount = document.getElementById('amount').value;
//     const convertedAmount = parseInt(amount);

//     const mainBalance = document.getElementById('main-balance').innerText;
//     const convertedMainBalance = parseFloat(mainBalance);


//     if (convertedAmount && convertedPin) {
//       if (convertedPin === 1234) {
//         const sum = convertedMainBalance - convertedAmount;

//         document.getElementById('main-balance').innerText = sum;
//       } else {
//         alert('Enter valid PIN');
//       }
//     }

//   })


document.getElementById('cashout-btn').addEventListener('click', function (event) {
  event.preventDefault();

  const amount = getInputValueId('amount');

  const pinNumber = getInputValueId('cashout-pin-number');

  const mainBalance = getInputTextId('main-balance');

  const accountNumber = document.getElementById('account-number').value;
  // console.log(amount, pinNumber, mainBalance, accountNumber);
  // console.log(typeof accountNumber);

  if (accountNumber.length === 11) {
    if (amount && pinNumber) {
      if (pinNumber === 1234) {
        const sum = mainBalance - amount;

        setInnerText('main-balance', sum);
      }
    } else {
      console.log('Enter Amount and PIN');
    }
  } else {
    console.log('Account number thik nai');
  }
});
