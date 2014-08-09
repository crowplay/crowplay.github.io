function loadXML(url){
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET",url, false);
    xmlhttp.send();
    return xmlhttp.responseXML;
}
window.addEventListener("load",function(){
    var xmlDoc=loadXML("index.xml");
    var items = xmlDoc.getElementsByTagName("item");
    for (var i = 0; i < items.length; i++) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.setAttribute("href", xmlDoc.getElementsByTagName("link")[i].childNodes[0].nodeValue);
        a.innerHTML=xmlDoc.getElementsByTagName("title")[i].childNodes[0].nodeValue;
        li.appendChild(a);
        document.getElementById("items").appendChild(li);
    }
},false);