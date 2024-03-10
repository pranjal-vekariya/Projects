
function doLogin() {
  const emailInput = document.getElementById('email').value // a@b.com
  const passwordInput = document.getElementById('password').value

  let usersData = localStorage.getItem('usersData')
  usersData = JSON.parse(usersData) || []
  console.log('12', usersData)
  const emailExist = usersData.find(user => user.email === emailInput)  // {name: , email, password}
  if(emailInput === "" && passwordInput === ""){
    return alert("enter your email and password")
  }
  else if (!emailExist) {
    alert('Email is not registered!')
    window.location.replace('register.html')
    return
  }
  console.log('19line')
  if (emailExist.password !== passwordInput) {
    alert('Wrong password!')
    return
  }
  alert('Login Success!!')
  localStorage.setItem('loggedInUser', JSON.stringify(emailExist))
  window.location.replace('dashboard.html')
  return
}
