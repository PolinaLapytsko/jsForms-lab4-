function OnLoad() {
    var query = window.location.href.split("?")[1]; // результат - строка запроса без адреса страницы "id=someName&userMail=some@mail.com&usText=MemoText"
    var params = query.split("&");  // результат - массив строк из пар "id=someName", "userMail=some@mail.com", "usText=MemoText"
    // теперь брать по очереди
    document.getElementById("userName").innerHTML = params[0].split("=")[1];
    document.getElementById("userSex").innerHTML = params[1].split("=")[1];
    document.getElementById("userPhone").innerHTML = params[2].split("=")[1];
    document.getElementById("userText").innerHTML = params[3].split("=")[1];
}