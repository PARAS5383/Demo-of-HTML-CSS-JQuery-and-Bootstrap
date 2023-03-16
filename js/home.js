// swiper slider optinal script 
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
    reverseDirection: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

//Global variable;
let globalVarible;

//Fetch id from url and accoring that show user page
function fetchUser(){
const urlParams = window.location.href;
userID = urlParams.split('?')[1];
idName = $.isNumeric(userID)
if (userID != undefined) {
  if (idName == true) {
    let obj = JSON.parse(localStorage.getItem(userID));
    globalVarible = obj
    $("#regiBtn").empty();
    $("#loginBtn").empty();
    $("#addUser").html('<div class="d-inline " onclick="profile()">Hi! ' + obj.student_name + '</div><a class= "text-decoration-none text-dark" href = "/home.html" > <button type="button" class="ms-2 btn btn-warning rounded border-0"><img src="/photos/icons-logout.png" alt="logout">Log out</button></a>');
    checkPlan();
  }
  else {
    $.get("data/admin.json", function (data, status, xhr) {
      for (var j = 0; j < data.length; j++) {
        dataEntry = data[j];
        if (dataEntry.username == userID) {
          $("#regiBtn").empty();
          $("#loginBtn").empty();
          $("#addUser").html('<div class="d-inline " onclick="data_entries()">' + dataEntry.name + '(Admin)</div><a class= "text-decoration-none text-dark" href = "/home.html" ><button type="button" class="ms-2 btn btn-warning rounded border-0"><img src="/photos/icons-logout.png" alt="logout">Log out</button></a>');
          $("#planId").empty();
        }
      };
    });
  }
};
};

// for open user profile 
function profile() {
  window.location.href = 'user.html?' + userID;
};

// for open admin profile
function data_entries() {
  window.location.href = 'admin.html?' + userID;
};

// If user is under the any plan then remove plan section
function checkPlan() {
  date = new Date();
  var currentDate = date.getFullYear() + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getDate();
  uendDate = globalVarible.ending_Date;
  if (currentDate <= uendDate) {
    $("#planId").empty();
  }
};

//For chooisng their plan
function plan(parameterPass) {
  planType = parameterPass;
  date = new Date();
  currentDate = '';
  EndDate = '';
  var dateToday = date.getFullYear() + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getDate();
  if (planType == 1) {
    checkLogin();
    var text = "You choose Monthly Plan.....";
    if (confirm(text) == true) {
      date.setMonth(date.getMonth() + 1);
      var EndDate = date.getFullYear() + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getDate();
      globalVarible.plan_name = "Monthly";
      currentDate = dateToday;
    }
  }
  else if (planType == 2) {
    checkLogin();
    var text = "You choose Half-yearly Plan.....";
    if (confirm(text) == true) {
      date.setMonth(date.getMonth() + 6);
      var EndDate = date.getFullYear() + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getDate();
      globalVarible.plan_name = "Half-yearly";
      currentDate = dateToday;
    }
  }
  else {
    checkLogin();
    var text = "You choose Annual Plan.....";
    if (confirm(text) == true) {
      var EndDate = (date.getFullYear() + 1) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getDate();
      globalVarible.plan_name = "Annual";
      currentDate = dateToday;
    }
  }
  globalVarible.starting_Date = currentDate;
  globalVarible.ending_Date = EndDate;
  window.localStorage.setItem(userID, JSON.stringify(globalVarible));
  checkPlan();
};

//check the user is login or not
function checkLogin() {
  if (userID == undefined) {
    alert("You need first register and login into class");
    checkPlan();
  }
};

//about us page
function aboutus() {
  if (userID != undefined) {
    window.location.href = 'about-us.html?' + userID;
  }
  else {
    window.location.href = 'about-us.html';
  }
}

// contact us page
function contactus() {
  if (userID != undefined) {
    window.location.href = 'contact-us.html?' + userID;
  }
  else {
    window.location.href = 'contact-us.html';
  }
};