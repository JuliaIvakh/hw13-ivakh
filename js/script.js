const userNum = prompt("Enter any number");
const userPow = prompt("Enter a power");

function raisingPower(num, pow = 1) {
  if (num === null || pow === null) {
    return alert("argument is invalid");
  } else if (num === "" || pow === "") {
    return alert("argument is invalid");
  } else if (isNaN(+num) || isNaN(+pow)) {
    return alert("argument is invalid");
  } else {
    return alert(num ** pow);
  }
}

raisingPower(userNum, userPow);
