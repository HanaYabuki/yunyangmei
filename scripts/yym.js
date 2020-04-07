// 这个变量用来控制花枝丸的对话逻辑
talkState = 0
// 这个变量用于控制和花枝丸的情感关系
// 0 游客 1 情侣
mainState = 0


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
    tmp.value = ""
    talkRight("talkBox",txt);
    
    setTimeout(
        "talkLeft('talkBox',reply(txt))",
        Math.ceil(Math.random()*1000) + 1000
    )
}
function reply(txtfor){
    // 条件处理
    if(talkState==1 && (txtfor.indexOf("男朋友")>=0 || txtfor.indexOf("要")>=0 || txtfor.indexOf("可以")>=0)){
        talkState = 0
        mainState = 1
        return "呐....呐丸子就是你的女朋友了哦~"
    }
    
    // 条件清除
    talkState = 0
    // 条件触发
    if(txtfor.indexOf("女朋友")>=0){
        talkState = 1
        return "女朋友什么的....还不是啦！诶！？你要做我男朋友吗？"
    }
    
    // 女友部分
    if(txtfor.indexOf("我妈")>=0 && txtfor.indexOf("掉")>=0){
        if(mainState==1){
            mainState = 0
            return "唔哇！你怎么这么坏坏！不可以问这种让人为难的问题哦~ 分手了！！"
        }
        return "诶！？怎么突然问起这个....我们还不是“那种”关系吧...."
    }
    if(txtfor.indexOf("分手")>=0){
        if(mainState==1){
            mainState = 0
            return "你是坏坏！！分手了！！"
        }
        return "嗯！？我们还不是“那种”关系吧...."
    }
    if(txtfor.indexOf("爱你")>=0){
        if(mainState==1){
            return "我也爱你哟！（啵啵叽~"
        }
        return "啊....是....是的呀"
    }
    if(txtfor.indexOf("亲亲")>=0){
        if(mainState==1){
            return "啵啵叽~"
        }
        return "你干嘛！（危）"
    }
    if(txtfor.indexOf("抱抱")>=0){
        if(mainState==1){
            return "抱抱抱抱~"
        }
        return "摸摸头~"
    }
    if(txtfor.indexOf("哭")>=0){
        if(mainState==1){
            return "不哭不哭~亲亲你"
        }
        return "不哭不哭"
    }

    // 常规部分
    if(txtfor.indexOf("你好")>=0){
        return "你好呀~"
    }
    if(txtfor.indexOf("是谁")>=0 || txtfor.indexOf("叫什么")>=0
    || txtfor.indexOf("叫啥")>=0){
        return "我叫花枝丸哟！"
    }
    if(txtfor.indexOf("笨笨")>=0){
        return "你再骂？QAQ"
    }
    if(txtfor.indexOf("Python")>=0 || txtfor.indexOf("Java")>=0
    || txtfor.indexOf("C++")>=0 || txtfor.indexOf("C语言")>=0
    || txtfor.indexOf("VB")>=0 || txtfor.indexOf("VisualBasic")>=0
    || txtfor.indexOf("JavaScript")>=0 || txtfor.indexOf("JS")>=0
    || txtfor.indexOf("PHP")>=0 || txtfor.indexOf("Pascal")>=0
    || txtfor.indexOf("R语言")>=0 || txtfor.indexOf("SQL")>=0
    || txtfor.indexOf("Go")>=0 || txtfor.indexOf("Ruby")>=0
    || txtfor.indexOf("Perl")>=0 || txtfor.indexOf("Matlab")>=0){
        return "别问！问就是C#迟早大一统！"
    }
    if(txtfor.indexOf("C#")>=0){
        return "C#天下第一！"
    }
    if(txtfor.indexOf("知道")>=0 || txtfor.indexOf("听说过")>=0 || txtfor.indexOf("听过")>=0){
        return "不知道呢，你给我讲讲吧，虽然我可能听不懂"
    }
    if(txtfor.indexOf("会")>=0 || txtfor.indexOf("懂")>=0){
        return "不会TAT，你来教我吧，虽然我肯定也学不会"
    }
    if(txtfor.indexOf("认识")>=0){
        return "不认识QAQ，你不会嫌弃我吧"
    }
    if(txtfor.indexOf("喜欢")>=0 && txtfor.indexOf("吃")>=0){
        return "嗷嗷！花枝丸喜欢吃花枝丸哟！（怎么听起来怪怪的...."
    }
    if(txtfor.indexOf("奥力给")>=0 || txtfor.indexOf("奥里给")>=0 || txtfor.indexOf("奥利给")>=0){
        return "我们遇到什么困难，也不要怕，微笑着面对它，消除恐惧的最好办法就是面对恐惧，坚持，才是胜利！加油，奥力给！"
    }
    if(txtfor.indexOf("复读机")>=0){
        return txtfor+" (一条五毛"
    }
    if(txtfor.indexOf("好")>=0){
        return "好耶！"
    }
    // 无法识别的报错部分
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
        +"7.花枝丸讨厌“复读机”！\n"
        +"8.“奥力给！”\n"
        +"9.控制得当的话，花枝丸是可以变成女朋友的哟！(会触发一些有趣的东西\n"
        +"10.不可以问考验人性的问题！比如“你和你妈掉水里”之类的....\n"
    );
}