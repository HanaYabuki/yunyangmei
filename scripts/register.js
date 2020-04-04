function checkPasswordLength(){
    var ipt = document.getElementById("PSWD1");
    var string = ipt.value + "";
    var aim = document.getElementById("waB");
    if(string.length>=6){
        aim.style.display = "none";
    }
    else{
        aim.style.display = "block";
    }
}

function checkPasswordEqual(){
    var ipt1 = document.getElementById("PSWD1");
    var ipt2 = document.getElementById("PSWD2");
    var aim = document.getElementById("waA");
    if(ipt1.value+''!=ipt2.value+''){
        aim.style.display = "block";
    }
    else{
        aim.style.display = "none";
    }
}

function reset(){
    location.reload();
}