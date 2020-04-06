function talkRight(idTo,txt) {
    tmp = '<div class="dia-right dia">' 
        + '<pre>'
        + txt
        + '</pre>'
        + '</div>'
    document.getElementById(idTo).innerHTML += tmp;
    window.scrollBy(0,10000000);
}
function talkLeft(idTo,txt) {
    tmp = '<div class="dia-left dia">' 
        + '<pre>'
        + txt
        + '</pre>'
        + '</div>'
    document.getElementById(idTo).innerHTML += tmp;
    window.scrollBy(0,10000000);
}

function talk(idFrom) {
    tmp = document.getElementById(idFrom);
    txt = tmp.value;
    if(txt!=""){
        tmp.value = ""
        talkRight("talkBox",txt);
        
        setTimeout(
            'talkLeft("talkBox","喵？")',
            Math.ceil(Math.random()*500) + 500
        )
    }
}

function help() {
    alert("众所周知，人类的语言过于低级，喵星人不屑于使用");
}