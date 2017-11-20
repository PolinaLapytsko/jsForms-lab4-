function validate(){
    if(document.getElementById('userName').value===""){
        alert("Enter the name!");
        return false;
    }
    if(numberOfPhone()===0){
        alert("Choose the phone brand!");
        return false;
    }
    return true;
}

function goMail() {
    if (confirm("Are you sure, that you want to send information?")) {
        var name = document.getElementById("userName").value;

        var tableElem = document.getElementById('sex');
        var elements = tableElem.getElementsByTagName('input');
        for (var i = 0; i < elements.length; i++) {
            var input = elements[i];
            if (input.checked)
                var sex = input.value;
        }

        var phone=[];
        var select = document.querySelector("select");
        for (var i = 0; i < select.options.length; i++) {
            var option = select.options[i];
            if (option.selected)
                phone.push(option.value);

        }

        var text = document.getElementById("userText").value;
        var getString = "id=" + name +"&sex=" + sex + "&phone=" + phone + "&text=" + text;
        document.location = "page2.html?" + getString; //page2.html?id=Polina&sex=text
    }
}

function numberOfPhone(){
    var phone=[];
    var number=0;
    var select = document.querySelector("select");
    for (var i = 0; i < select.options.length; i++) {
        var option = select.options[i];
        if (option.selected)
            number++;
    }
    return number;
}