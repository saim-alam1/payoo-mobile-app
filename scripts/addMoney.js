document.getElementById('add-money').addEventListener('click', function (event) {
  event.preventDefault();
  const amount = document.getElementById('account').value;
  const convertedAmount = parseInt(amount);

  const pinNumber = document.getElementById('pin-number').value;
  const convertedPin = parseInt(pinNumber);

  const mainBalance = document.getElementById('main-balance').innerText;
  const convertedMainBalance = parseInt(mainBalance);

  if (convertedPin === 1234) {
    const sum = convertedMainBalance + convertedAmount;

    document.getElementById('main-balance').innerText = sum;
  }
  else {
  }
})