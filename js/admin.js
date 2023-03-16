// Define Global Variable 
let tempObjectstore = [];
let dataGlobal;
let count = 0;
var dataLength;
var pageCount;

// fecth data of user from local storage and call append function
function fetchuser() {
  let userName = window.location.href.split('?')[1];
  $.get("data/admin.json", function (data, status, xhr) {
    for (var j = 0; j < data.length; j++) {
      let dataEntry = data[j];
      if (dataEntry.username == userName) {
        let username = dataEntry.username;
        let name = dataEntry.name;
        let userPass = dataEntry.password;
        $("#usernameId").html(username);
        $("#nameId").html(name);
        $("#passwordId").html(userPass);
      };
    };
  });

  // Common data add from localfile file
  let data = [];
  for (i = 1; i <= localStorage.length; i++) {
    let obj = JSON.parse(localStorage.getItem(i));
    data.push(obj);
  };
  dataLength = data.length;
  dataGlobal = data;
  commonFunction(data);

};

// Id ascending function
function idAscending(parameterPass) { 
  if (parameterPass == true) {
    var data = tempObjectstore;
  }
  else {
    var data = dataGlobal;
  }
  $("#tbody").empty();
  data.sort((a, b) => (a.id < b.id) ? -1 : ((a.id < b.id) ? 1 : 0));
  commonFunction(data);
};

// Id descending function
function idDescending(parameterPass) {
  if (parameterPass == true) {
    var data = tempObjectstore;
  }
  else {
    var data = dataGlobal;
  }
  $("#tbody").empty();
  data.sort((a, b) => (a.id > b.id) ? -1 : ((a.id > b.id) ? 1 : 0));
  commonFunction(data);
};

// Username ascending function
function usernameAscending(parameterPass) {
  if (parameterPass == true) {
    var data = tempObjectstore;
  }
  else {
    var data = dataGlobal;
  }
  $("#tbody").empty();
  data.sort((a, b) => (a.user_name < b.user_name) ? -1 : ((a.user_name < b.user_name) ? 1 : 0));
  commonFunction(data);
};

// Username descending function
function usernameDescending(parameterPass) {
  if (parameterPass == true) {
    var data = tempObjectstore;
  }
  else {
    var data = dataGlobal;
  }
  $("#tbody").empty();
  data.sort((a, b) => (a.user_name > b.user_name) ? -1 : ((a.user_name > b.user_name) ? 1 : 0));
  commonFunction(data);
};

// student_name ascending function
function snameAscending(parameterPass) {
  if (parameterPass == true) {
    var data = tempObjectstore;
  }
  else {
    var data = dataGlobal;
  }
  $("#tbody").empty();
  data.sort((a, b) => (a.student_name < b.student_name) ? -1 : ((a.student_name < b.student_name) ? 1 : 0));
  commonFunction(data);
};

// student_name descending function
function snameDescending(parameterPass) {
  if (parameterPass == true) {
    var data = tempObjectstore;
  }
  else {
    var data = dataGlobal;
  }
  $("#tbody").empty();
  data.sort((a, b) => (a.student_name > b.student_name) ? -1 : ((a.student_name > b.student_name) ? 1 : 0));
  commonFunction(data);
};

// Age ascending function
function ageAscending(parameterPass) {
  if (parameterPass == true) {
    var data = tempObjectstore;
  }
  else {
    var data = dataGlobal;
  }
  $("#tbody").empty();
  data.sort((a, b) => (a.age < b.age) ? -1 : ((a.age < b.age) ? 1 : 0));
  commonFunction(data);
};

// Age descending function
function ageDescending(parameterPass) {
  if (parameterPass == true) {
    var data = tempObjectstore;
  }
  else {
    var data = dataGlobal;
  }
  $("#tbody").empty();
  data.sort((a, b) => (a.age > b.age) ? -1 : ((a.age > b.age) ? 1 : 0));
  commonFunction(data);
};

// Gender ascending function
function genderAscending(parameterPass) {
  if (parameterPass == true) {
    var data = tempObjectstore;
  }
  else {
    var data = dataGlobal;
  }
  $("#tbody").empty();
  data.sort((a, b) => (a.gender < b.gender) ? -1 : ((a.gender < b.gender) ? 1 : 0));
  commonFunction(data);
};

// Gender decending funcation
function genderDescending(parameterPass) {
  if (parameterPass == true) {
    var data = tempObjectstore;
  }
  else {
    var data = dataGlobal;
  }
  $("#tbody").empty();
  data.sort((a, b) => (a.gender > b.gender) ? -1 : ((a.gender > b.gender) ? 1 : 0));
  commonFunction(data);
};

// Starting date ascending function
function sdateAscending(parameterPass) {
  if (parameterPass == true) {
    var data = tempObjectstore;
  }
  else {
    var data = dataGlobal;
  }
  $("#tbody").empty();
  data.sort((a, b) => (a.starting_Date < b.starting_Date) ? -1 : ((a.starting_Date < b.starting_Date) ? 1 : 0));
  commonFunction(data);
};

// Starting date decending funcation
function sdateDescending(parameterPass) {
  if (parameterPass == true) {
    var data = tempObjectstore;
  }
  else {
    var data = dataGlobal;
  }
  $("#tbody").empty();
  data.sort((a, b) => (a.starting_Date > b.starting_Date) ? -1 : ((a.starting_Date > b.starting_Date) ? 1 : 0));
  commonFunction(data);
};

// Ending date ascending function
function edateAscending(parameterPass) {
  if (parameterPass == true) {
    var data = tempObjectstore;
  }
  else {
    var data = dataGlobal;
  }
  $("#tbody").empty();
  data.sort((a, b) => (a.ending_Date < b.ending_Date) ? -1 : ((a.ending_Date < b.ending_Date) ? 1 : 0));
  commonFunction(data);
};

// Ending date decending funcation
function edateDescending(parameterPass) {
  if (parameterPass == true) {
    var data = tempObjectstore;
  }
  else {
    var data = dataGlobal;
  }
  $("#tbody").empty();
  data.sort((a, b) => (a.ending_Date > b.ending_Date) ? -1 : ((a.ending_Date > b.ending_Date) ? 1 : 0));
  commonFunction(data);
};

// Plan name ascending function
function pnameAscending(parameterPass) {
  if (parameterPass == true) {
    var data = tempObjectstore;
  }
  else {
    var data = dataGlobal;
  }
  $("#tbody").empty();
  data.sort((a, b) => (a.plan_name < b.plan_name) ? -1 : ((a.plan_name < b.plan_name) ? 1 : 0));
  commonFunction(data);
};

// Plan name decending funcation
function pnameDescending(parameterPass) {
  if (parameterPass == true) {
    var data = tempObjectstore;
  }
  else {
    var data = dataGlobal;
  }
  $("#tbody").empty();
  data.sort((a, b) => (a.plan_name > b.plan_name) ? -1 : ((a.plan_name > b.plan_name) ? 1 : 0));
  commonFunction(data);
};

// Filter function
function find(parameterPass) {
  if (parameterPass == true) {
    pageData = [];
    $("#tbody").empty();
    tempObjectstore.findIndex(function (entry, i) {
      if (entry.id.includes($("#search").val()) == true || entry.user_name.includes($("#search").val()) == true || entry.student_name.includes($("#search").val()) == true || entry.age.includes($("#search").val()) == true || entry.gender.includes($("#search").val()) == true || entry.starting_Date.includes($("#search").val()) == true || entry.ending_Date.includes($("#search").val()) == true || entry.plan_name.includes($("#search").val()) == true) {
        pageData.push(entry);

      };
    });
    data = pageData;
    tempObjectstore = pageData;
    commonFunction(data);
    changeClickfunctionT();
    pagination(true);
  }
  else {
    $("#tbody").empty();
    tempObjectstore = [];
    dataGlobal.findIndex(function (entry, i) {
      if (entry.id.includes($("#search").val()) == true || entry.user_name.includes($("#search").val()) == true || entry.student_name.includes($("#search").val()) == true || entry.age.includes($("#search").val()) == true || entry.gender.includes($("#search").val()) == true || entry.starting_Date.includes($("#search").val()) == true || entry.ending_Date.includes($("#search").val()) == true || entry.plan_name.includes($("#search").val()) == true) {
        tempObjectstore.push(entry);
      };
    });
    data = tempObjectstore;
    dataGlobal = tempObjectstore;
    commonFunction(data);
    changeClickfunctionT();
  }
};

// Pagination function add pages, next, prev button in page
function pagination(parameterPass) {
  if (parameterPass == true) {
    dataGlobal = tempObjectstore;
  }
  var pageNum = $("#page").val();
  var data = [];
  $("#tbody").empty();
  $("#addButton").empty();
  $("#addPrevbutton").empty();
  $("#addNextbutton").empty();
  x = dataGlobal.length;
  if (pageNum < x) {
    y = pageNum;
    if ((x % y) == 0) {
      z = (x / y);
    }
    else {
      z = Math.trunc(x / y) + 1;
    }
    $("#addPrevbutton").append('<button type="button" class="btn btn-warning" onclick="prevPage()">< Previous</button>');
    for (i = 1; i <= z; i++) {
      $("#addButton").append('<button type="button"  class="btn text-light" onclick="nextPage(' + i + ')">' + i + '</button>');
    }
    $("#addNextbutton").append('<button type="button" class="btn btn-warning" onclick="nextBtn()">Next ></button>');
    for (var i = 0; i < pageNum; i++) {
      data.push(dataGlobal[i]);
    }
    pageCount = 1;
    commonFunction(data);
  }
  else {
    data = dataGlobal;
    commonFunction(data)
  }
  changeClickfunctionT();
  tempObjectstore = data;
  $('#search').attr("onkeyup", "find(true)");
}

// Next page function
function nextPage(parameterPass) {
  pageCount = parameterPass;
  pageData = [];
  $("#tbody").empty();
  j = ((parameterPass - 1) * $("#page").val());
  if (parameterPass == 1) {
    k = ($("#page").val() - 1);
  }
  else if ((j + parseInt($("#page").val())) > dataGlobal.length) {
    k = (dataGlobal.length - 1);
  }
  else {
    k = ((parameterPass * $("#page").val()) - 1);
  }
  for (i = j; i <= k; i++) {
    pageData.push(dataGlobal[i]);
  }
  tempObjectstore = pageData;
  var data = pageData;
  commonFunction(data);
  changeClickfunctionT();
}

// Change the function parameter of assending and desending
function changeClickfunctionT() {
  $('#idUp').attr("onclick", "idAscending(true)");
  $('#idDown').attr("onclick", "idDescending(true)");
  $('#usernameUp').attr("onclick", "usernameAscending(true)");
  $('#usernameDown').attr("onclick", "usernameDescending(true)");
  $('#studentnameUp').attr("onclick", "snameAscending(true)");
  $('#studentnameDown').attr("onclick", "snameDescending(true)");
  $('#userageUp').attr("onclick", "ageAscending(true)");
  $('#userageDown').attr("onclick", "ageDescending(true)");
  $('#usergenderUp').attr("onclick", "genderAscending(true)");
  $('#usergenderDown').attr("onclick", "genderDescending(true)");
  $('#sdateUp').attr("onclick", "sdateAscending(true)");
  $('#sdateDown').attr("onclick", "sdateDescending(true)");
  $('#edateUp').attr("onclick", "edateAscending(true)");
  $('#edateDown').attr("onclick", "edateDescending(true)");
  $('#pnameUp').attr("onclick", "pnameAscending(true)");
  $('#pnameDown').attr("onclick", "pnameDescending(true)");
}

// Comman data append with enties details function
function commonFunction(data) {
  count = 0;
  for (var i = 0; i < data.length; i++) {
    var add = ("<tr><td>" + data[i].id + "</td><td>" + data[i].user_name + "</td><td>" + data[i].student_name + "</td><td>" + data[i].age + "</td><td>" + data[i].gender + "</td><td>" + data[i].starting_Date + "</td><td>" + data[i].ending_Date + "</td><td>" + data[i].plan_name + "</td></tr>");
    $("#tbody").append(add);
    count++;
  }
  $("#countRow").html('Showing 1 to ' + count + ' of ' + dataGlobal.length + ' entries (Total entries: ' + dataLength + ')');
};

// Next page button function
function nextBtn() {
  if (pageCount == z) {
    pageCount = 0;
  }
  nextPage(pageCount + 1);
};

// Previous page button function
function prevPage() {
  if (pageCount == 1) {
    pageCount = z + 1;
  }
  nextPage(pageCount - 1)
};

// Call the home page
function backHome() {
  window.location.href = 'home.html?' + userName;
};