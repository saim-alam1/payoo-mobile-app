document.getElementById('add-money').addEventListener('click', function () {
  const pinNumber = document.getElementById('pin-number').value;
  const convertedPin = parseInt(pinNumber);

  const amountNumber = document.getElementById('account').value;
  const convertedAmount = parseFloat(amountNumber);

  const mainBalance = document.getElementById('main-balance').innerText;
  const convertedMainBalance = parseFloat(mainBalance);

  if (convertedAmount && convertedPin) {
    if (convertedPin === 1234) {
      const sum = convertedMainBalance + convertedAmount;

      document.getElementById('main-balance').innerText = sum;
    } else {
      alert('Enter valid PIN');
    }
  } else {
    alert('Enter valid amount and PIN');
  }
})