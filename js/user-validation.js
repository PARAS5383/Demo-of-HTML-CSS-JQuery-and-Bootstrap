// validation on user edit their profile
function vadidationUserData() {
  if (sUname == '') {
    alert('you need to enter user name')
  }
  else if (sName == '') {
    alert('you need to enter your name')
  }
  else if (sAge == '') {
    alert('you need to enter age')
  }
  else if (sGen == '') {
    alert('you need to choose any gender')
  }
  else if (sPass == '') {
    alert('you need to set any password')
  }
  else {
    const data = { id: userId, user_name: sUname, student_name: sName, age: sAge, gender: sGen, password: sPass, plan_name: planType, starting_Date: sDate, ending_Date: eDate };
    localStorage.setItem(userId, JSON.stringify(data));
    window.location.href = 'user.html?' + userId;
  }
};