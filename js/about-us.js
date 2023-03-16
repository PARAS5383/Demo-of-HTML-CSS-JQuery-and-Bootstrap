//find user id or username
const urlParams = window.location.href;
userID = urlParams.split('?')[1];

//for back home
function home() {
  if (userID != undefined) {
    window.location.href = 'home.html?' + userID;
  }
  else {
    window.location.href = 'home.html';
  }
};