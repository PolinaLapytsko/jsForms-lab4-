function validate(){
	if(document.mainForm.name.value===""){
		alert("Введите имя!");
		return false;
	}
	if(document.mainForm.programs.value===""){
		alert("Введите ваши любимые передачи!");
		return false;
	}
	if(document.mainForm.genre[0].checked==false && 
			document.mainForm.genre[1].checked==false &&
			document.mainForm.genre[2].checked==false &&
			document.mainForm.genre[3].checked==false &&
			document.mainForm.genre[4].checked==false &&
			document.mainForm.genre[5].checked==false &&
			document.mainForm.genre[6].checked==false &&
			document.mainForm.genre[7].checked==false){
		alert("Выберите любимые типы телепередач!");
		return false;
	}
	if(/[A-zА-яЁё]/.test(document.mainForm.name.value)==false){
		alert("Некорректные данные имени");
		return false;
	}
	return true;
}

function transfer(){
	var postString=createObject();
	document.location="tableData.html?"+postString;
}

function createObject(){
	var allSex=document.mainForm.sex;
	var sex;
	for(var i=0;i<allSex.length;i++){
		if(allSex[i].checked){
			sex=allSex[i].value;
		}
	}
	var name=document.mainForm.name.value;
	var allAge=document.mainForm.age;
	var number=document.mainForm.age.selectedIndex;
	var age=document.mainForm.age[number].value;
	var programs=document.mainForm.programs.value;
	var allGenres=document.mainForm.genre;
	var genre=[];
	for(var i=0;i<allGenres.length;i++){
		if(allGenres[i].checked){
			genre.push(allGenres[i].value);
		}
	}
	var comment=document.mainForm.comment.value;
	var stringGenre;
	for(var i=0;i<genre.length;i++){
		stringGenre=stringGenre+" "+genre[i];
	}
	var postString="sex="+sex+"&name="+name+"&age="+age+
			"&programs="+programs+"&genre="+genre+"&comment="+comment;
	return postString;
}

function reset(){
	document.forms['mainForm'].reset();
}
