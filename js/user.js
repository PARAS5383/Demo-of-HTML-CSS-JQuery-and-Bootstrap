// fecth data of user from local storage and call append function
let userId;
function fetchUser() {
  const urlParams = window.location.href;
  userId = urlParams.split('?')[1];
  $("#editId").hide();
  $("#loginId").show();
  let obj = JSON.parse(localStorage.getItem(userId));
  useridNo = obj.id
  username = obj.user_name;
  name = obj.student_name;
  age = obj.age;
  gender = obj.gender;
  password = obj.password;
  planType = obj.plan_name;
  sDate = obj.starting_Date;
  eDate = obj.ending_Date;
  currentDate = new Date();
  day = Math.round((new Date(eDate) - currentDate) / (1000 * 3600 * 24));
  appendData();
};

// Upadate the data and set into the storage and redirected the page
function UserUpdate() {
  sUname = $('#unameEid').val();
  sName = $("#snameEid").val();
  sAge = $("#sageEid").val();
  sGen = '';
  $.each($("input[name='gender']:checked"), function () {
    sGen += ($(this).val());
  });
  sPass = $("#upassEid").val();
  vadidationUserData();
};

// Show the edit form to edit profile 
function editProfile() {
  $("#editId").show();
  $("#loginId").hide();
  $("#unameEid").val(username);
  $("#snameEid").val(name);
  $("#sageEid").val(age);
  $("#upassEid").val(password);
};

// append the data into the html
function appendData() {
  $("#idnoId").html(useridNo);
  $("#usernameId").html(username);
  $("#nameId").html(name);
  $("#ageId").html(age);
  $("#genderId").html(gender);
  $("#passwordId").html(password);
  if (planType != 'No plan' && day > 0) {
    $("#planId").html(planType);
    $("#plandayId").html('(only ' + day + ' left)');
    $("#notifiactionId").html('<p>*If you not received class material or daily lectures link then kindly contact us</p>');
    $("#contactId").html('<a href="contact-us.html?' + userId + '">Contact us<a>');
  }
  else {
    $("#planId").html('Currently you have no activated plan');
  }
};

//No change after call edit function
function fetchData() {
  $("#editId").hide();
  $("#loginId").show();
};

// Call the home page
function backHome() {
  window.location.href = 'home.html?' + userId;
};