//find user id or username
let userID = window.location.href.split('?')[1];

//for back home
function home() {
  if (userID != undefined) {
    window.location.href = 'home.html?' + userID;
  }
  else {
    window.location.href = 'home.html';
  }
};