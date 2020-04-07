tmpid = 0
function talkRight(idTo,txt) {
    tmp = '<div class="dia-right dia" id='+(tmpid+"")+'>' 
        + '<pre>'
        + txt
        + '</pre>'
        + '</div>'
    document.getElementById(idTo).innerHTML += tmp;
    window.scrollBy(0,10000000);
    document.getElementById(tmpid).style.opacity = '1'
    tmpid += 1;
}
function talkLeft(idTo,txt) {
    tmp = '<div class="dia-left dia" id='+(tmpid+"")+'>'
        + '<p>'
        + txt
        + '</p>'
        + '</div>'
    document.getElementById(idTo).innerHTML += tmp;
    window.scrollBy(0,10000000);
    document.getElementById(tmpid).style.opacity = '1'
    tmpid += 1;
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