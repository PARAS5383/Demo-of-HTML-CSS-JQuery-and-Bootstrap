// Define Global Variable 
let tempObjectstore = [];
let dataGlobal;
let count = 0;
let dataLength;
let pageCount;
let userName = window.location.href.split('?')[1];

// fecth data of admin and user json file and local storage
function fetchuser() {
  // for admin
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

  // for user
  let data = [];
  for (i = 1; i <= localStorage.length; i++) {
    let obj = JSON.parse(localStorage.getItem(i));
    data.push(obj);
  };
  dataLength = data.length;
  dataGlobal = data;
  commonFunction(data);

};

// Check that another serching or pagination is present or not
function checkParameter(objectChange){
  if (objectChange == true) {
    var data = tempObjectstore;
  }
  else {
    var data = dataGlobal;
  }
  return data;
}

// Table ascending function 
function ascending(fieldName, objectChange){
  var data = checkParameter(objectChange);
  fieldValue = fieldName.valueOf();
  $("#tbody").empty();
  data.sort((a, b) => (a[fieldValue] < b[fieldValue]) ? -1 : ((a[fieldValue] < b[fieldValue]) ? 1 : 0));
  commonFunction(data); 
};

// Table descending function 
function descending(fieldName, objectChange) {
  var data = checkParameter(objectChange);
  fieldValue = fieldName.valueOf();
  $("#tbody").empty();
  data.sort((a, b) => (a[fieldValue] > b[fieldValue]) ? -1 : ((a[fieldValue] > b[fieldValue]) ? 1 : 0));
  commonFunction(data);
};

// Filter function
function find(objectChange) {
  if (objectChange == true) {
    let pageData = [];
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

// Change the function parameter of assending and desending
function changeClickfunctionT() {
  $('#idUp').attr("onclick", "ascending('id',true)");
  $('#idDown').attr("onclick", "descending('id',true)");
  $('#usernameUp').attr("onclick", "ascending('user_name',true)");
  $('#usernameDown').attr("onclick", "descending('user_name',true)");
  $('#studentnameUp').attr("onclick", "ascending('student_name',true)");
  $('#studentnameDown').attr("onclick", "descending('student_name',true)");
  $('#userageUp').attr("onclick", "ascending('age',true)");
  $('#userageDown').attr("onclick", "descending('age',true)");
  $('#usergenderUp').attr("onclick", "ascending('gender',true)");
  $('#usergenderDown').attr("onclick", "descending('gender',true)");
  $('#sdateUp').attr("onclick", "ascending('starting_Date',true)");
  $('#sdateDown').attr("onclick", "descending('starting_Date',true)");
  $('#edateUp').attr("onclick", "ascending('ending_Date',true)");
  $('#edateDown').attr("onclick", "descending('ending_Date',true)");
  $('#pnameUp').attr("onclick", "ascending('plan_name',true)");
  $('#pnameDown').attr("onclick", "descending('plan_name',true)");
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