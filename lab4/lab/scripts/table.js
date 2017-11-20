function receive(){

    var postString=location.search.substring(1);
    localStorageWork(postString);
    var results=JSON.parse(localStorage.getItem('results'));
    var values=new Array(results.length);
    for(var i=0;i<results.length;i++){
        values[i]=new Array(4);
    }
    var parameter;
    for(var i=0;i<results.length;i++){
        parameter=results[i].toString().split("&");
        for(var j=0;j<4;j++){
            var tmp=parameter[j].split("=");
            values[i][j]=decodeURIComponent(tmp[1]);
        }
    }
    var table=document.getElementById("table").getElementsByTagName('TBODY')[0];
    for(var i=0;i<values.length;i++){
        var row=document.createElement("TR");
        table.appendChild(row);
        for(var j=0;j<4;j++){
            var cell=document.createElement("TD");
            row.appendChild(cell);
            cell.innerHTML=values[i][j];
        }
    }
}

function goBack(){
    location.href="page1.html";
}

function localStorageWork(string){
    var results = localStorage.getItem('results') || "[]";
    results = JSON.parse(results);
    results.push(string);
    localStorage.setItem('results', JSON.stringify(results));
}