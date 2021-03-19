// container for the sign in form
var signInForm = document.querySelector('#signIn');
// the input box of deposit form
document.querySelector("#depositInp").value = "";
var depositForm = document.querySelector('#deposit');
var signInBtn = document.querySelector("#login");
var balance = document.querySelector('#transaction');
var depositBtn = document.querySelector("#deposit-btn");
var signOutBtn = document.querySelector("#sign-out-btn");
depositBtn.addEventListener('click', deposit);

// is user logged in?
isLoggedIn();

signInBtn.addEventListener('click', function(){
  // get username
    var username = document.querySelector("#username").value;
    // get password
    var password = document.querySelector("#password").value;
    if (username =="" && password==""){
      alert("Please type your username and password");
    }
    else if (username==""){
      alert("Please type your username");
    }
    else if (password==""){
      alert("Please type your password");
    }
    else{
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      localStorage.setItem('balance', '0.00');
      isLoggedIn();
    } 
  })

function isLoggedIn(){
  if(localStorage.getItem('username') != "null" && localStorage.getItem('username') != null){
    document.querySelector("#welcome").innerText = "Welcome " + localStorage.getItem('username');
    signInForm.style.display = "none";
    depositForm.style.display = "block";
    balance.innerText = localStorage.getItem('balance');
    signOutBtn.style.visibility = "visible";

  }
  else{
    depositForm.style.display = "none";
  } 
}


function signOut(){
  localStorage.removeItem('username');
  localStorage.removeItem('password');
  localStorage.removeItem('balance')
  signInForm.style.display = "block";
  document.querySelector("#welcome").innerText = "Welcome to E-banking"
  depositForm.style.display = "none";
  location.reload();
}

function deposit(){
  console.log("deposit clicked");
  var depositAmount;
  var initialBalance = parseFloat(localStorage.getItem('balance'));
  var amountInp = document.querySelector("#depositInp");
  if(amountInp.value == "" | parseFloat(amountInp.value) < 0){
    depositAmount = 0.00;
  }
  else depositAmount = parseFloat(amountInp.value);
  localStorage.setItem('balance', (depositAmount + initialBalance));
  // set the balance innerText to the new balance from the cookie
  balance.innerText = localStorage.getItem("balance");
  amountInp.value = "";
  alert("Deposit of Ghs " + depositAmount + " made.\nNew balance is Ghs " + localStorage.getItem("balance"));
}
