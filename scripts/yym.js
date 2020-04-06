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
    tmp.value = ""
    talkRight("talkBox",txt);
    
    setTimeout(
        "talkLeft('talkBox',reply(txt))",
        Math.ceil(Math.random()*1000) + 1000
    )
}

function reply(txtfor){
    if(txtfor.indexOf("笨笨")>=0){
        return "你再骂？QAQ"
    }
    if(txtfor.indexOf("知道")>=0){
        return "不知道呢，你给我讲讲吧，虽然我可能听不懂"
    }
    if(txtfor.indexOf("会")>=0){
        return "不会TAT，你来教我吧，虽然我肯定也学不会"
    }
    if(txtfor.indexOf("认识")>=0){
        return "不认识QAQ，你不会嫌弃我吧"
    }
    if(txtfor.indexOf("爱你")>=0){
        return "谢谢你哦~不过我只爱发明我的人呢~"
    }
    if(txtfor.indexOf("喜欢")>=0 && txtfor.indexOf("吃")>=0){
        return "嗷嗷！花枝丸喜欢吃花枝丸哟！（怎么听起来怪怪的...."
    }
    if(txtfor.indexOf("Python")>=0 || txtfor.indexOf("Java")>=0
    || txtfor.indexOf("C++")>=0 || txtfor.indexOf("C语言")>=0
    || txtfor.indexOf("VB")>=0 || txtfor.indexOf("VisualBasic")>=0
    || txtfor.indexOf("JavaScript")>=0 || txtfor.indexOf("JS")>=0
    || txtfor.indexOf("PHP")>=0
    || txtfor.indexOf("R语言")>=0 || txtfor.indexOf("SQL")>=0
    || txtfor.indexOf("Go")>=0 || txtfor.indexOf("Ruby")>=0
    || txtfor.indexOf("Perl")>=0 || txtfor.indexOf("Matlab")>=0){
        return "别问！问就是C#迟早大一统！"
    }
    if(txtfor.indexOf("C#")>=0){
        return "C#天下第一！"
    }
    if(txtfor.indexOf("奥力给")>=0 || txtfor.indexOf("奥里给")>=0 || txtfor.indexOf("奥利给")>=0){
        return "我们遇到什么困难，也不要怕，微笑着面对它，消除恐惧的最好办法就是面对恐惧，坚持，才是胜利！加油，奥力给！"
    }
    if(txtfor.indexOf("复读机")>=0){
        return txtfor
    }
    i = Math.ceil(Math.random()*5)
    if(i==1) return "丸子听不懂了嘤嘤嘤~看来丸子还要多多学习才行"
    if(i==2) return "那个那个，我听不懂你在说什么...."
    if(i==3) return "对不起....是丸子太笨了，听不懂你的话QAQ"
    if(i==4) return "TAT您能把话说得再简单一点吗....丸子是小笨蛋"
    if(i==5) return "哎呀，你说的话太高深了，丸子听不懂呢~"
}

function help() {
    alert(""
        +"这里是云养妹小助手鸭！\n"
        +"0.花枝丸还在开发的初期，可能会“笨笨”的，你可不要骂她鸭！\n"
        +"1.花枝丸会“知道”很多东西，你可以问她“知道”什么，当然，如果她不知道是不会告诉你的\n"
        +"2.花枝丸“会”很多好玩的东西，当然，如果她不会是会告诉你的\n"
        +"3.花枝丸“认识”好多人，你可以和她交流交流\n"
        +"4.花枝丸会表达对你真诚的“爱”，如果你也“爱”她的话\n"
        +"5.花枝丸喜欢“吃”东西！\n"
        +"6.花枝丸可是很喜欢编程的！不过询问编程语言的时候首字母要大写~单个字母时要强调是“语言”哦\n"
        +"7.花枝丸讨厌“复读机”！不过她喜欢其人之道还治其人之身（嘿嘿\n"
        +"8.“奥力给！”"
    );
}