// Global variable
let uId;

// Hide the registration and admin part on load body
function showLogin(){
$("#regiId").hide();
$("#adminloginId").hide();
};

//Open registration section
function regiFun() {
  $("#loginId").hide();
  $("#regiId").show();
  $("#adminloginId").hide();
};

//Open the login section
function loginFun() {
  $("#loginId").show();
  $("#regiId").hide();
  $("#adminloginId").hide();
};

//open the admin section
function adminLogin() {
  $("#loginId").hide();
  $("#regiId").hide();
  $("#adminloginId").show();
};

// On registration set the data into the localstorage
function register() {
  let sUname = $('#unameRid').val();
  let sName = $("#snameRid").val();
  let sAge = $("#sageRid").val();
  let sGen = '';
  $.each($("input[name='gender']:checked"), function () {
    sGen += ($(this).val());
  });
  let sPass = $("#upassRid").val();
  let pname = 'No plan';
  let sdate = '';
  let edate = '';
  i = localStorage.length + 1;
  const data = { id: i.toString(), user_name: sUname, student_name: sName, age: sAge, gender: sGen, password: sPass, plan_name: pname, starting_Date: sdate, ending_Date: edate };
  window.localStorage.setItem(i, JSON.stringify(data));
  loginFun();
};

//Validate the user the redirected to home page with userid
function valid() {
  let sUname = $('#unameId').val();
  let sPass = $("#upassId").val();
  for (var j = 1; j <= localStorage.length; j++) {
    let obj = JSON.parse(localStorage.getItem(j));
    if (obj.user_name == sUname && obj.password == sPass) {
      uId = obj.id;
      window.location.href = 'home.html?' + uId;
    }
    else {
      notValid();
    }
  };
};

// Validate the admin and redirected to home page with admin username
function validAdmin() {
  let dataEntry;
  var aUname = $('#unameAid').val();
  var aPass = $("#upassAid").val();
  $.get("data/admin.json", function (data, status, xhr) {
    for (var j = 0; j < data.length; j++) {
      dataEntry = data[j];
      let aUser = dataEntry.username;
      let aUpass = dataEntry.password;
      if (aUser == aUname && aUpass == aPass) {
        window.location.href = 'home.html?' + aUser;
      }
      else {
        notValid();
      }
    }
  });
};

// Not valid the username and password than give the warning 
function notValid() {
  $(".addWarning").html('<h7 class="text-danger">Enter Valid Username & Password!</h7>');
  $("#upassId").val('');
  $("#upassAid").val('');
  const myTimeout = setTimeout(clearWarning, 1000);
};

//Clear warning after 1 second
function clearWarning() {
  $(".addWarning").empty();
};

//If not login and back home
function backHome() {
  window.location.href = 'home.html';
};
