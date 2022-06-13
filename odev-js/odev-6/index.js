function adminPage() {
    alert("Admin Sayfası");
  }
  
  let login = () => {
    let dbUserEmail = 'deneme@gmail.com',
      dbUserPassword = 'root'
    let userEmail, userPassword;
  
    let count = 4;
    while (count > 0) {
      userEmail = prompt('email giriniz')
      userPassword = prompt('şifre giriniz')
      if (userEmail === dbUserEmail && userPassword === dbUserPassword)
        return adminPage()
      else {
        count--;
        alert(`kalan hakkınız: ${count}`)
      }
    }
    alert('Hakkınız kalmadığı için kullanıcı bloke edildi');
  }
  login();