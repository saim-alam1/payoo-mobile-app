function getInputValueId(id) {
  const getTheId = document.getElementById(id).value;
  const convertToNumber = parseInt(getTheId);
  return convertToNumber;
}

function getInputTextId(id) {
  const getId = document.getElementById(id).innerText;
  const convertedId = parseFloat(getId);
  return convertedId;
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}