// Pagination function add pages, next, prev button in page
function pagination(objectChange) {
  if (objectChange == true) {
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
function nextPage(objectChange) {
  pageCount = objectChange;
  pageData = [];
  $("#tbody").empty();
  j = ((objectChange - 1) * $("#page").val());
  if (objectChange == 1) {
    k = ($("#page").val() - 1);
  }
  else if ((j + parseInt($("#page").val())) > dataGlobal.length) {
    k = (dataGlobal.length - 1);
  }
  else {
    k = ((objectChange * $("#page").val()) - 1);
  }
  for (i = j; i <= k; i++) {
    pageData.push(dataGlobal[i]);
  }
  tempObjectstore = pageData;
  var data = pageData;
  commonFunction(data);
  changeClickfunctionT();
}