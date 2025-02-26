document.getElementById('cashout-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const pinNumber = document.getElementById('cashout-pin-number').value;
    const convertedPin = parseInt(pinNumber);

    const amount = document.getElementById('amount').value;
    const convertedAmount = parseInt(amount);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);


    if (convertedAmount && convertedPin) {
      if (convertedPin === 1234) {
        const sum = convertedMainBalance - convertedAmount;

        document.getElementById('main-balance').innerText = sum;
      } else {
        alert('Enter valid PIN');
      }
    }

  })