
//https://i.328888.xyz/2023/04/16/iE7pEF
function getParams(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
};
var mode = 1;
if(getParams("mode") != null){mode = getParams("mode")};

document.write('<!-- 悬挂的喵 -->')
document.write('<script type="text/javascript" src="../js/hangingcat/hangingcat.js" defer=""></script>')
document.write('<link rel="stylesheet" type="text/css" href="../css/hangingcat/hangingcat.css">')
document.write('<div class="back-to-top cd-top faa-float animated cd-is-visible" style="top: -300px;z-index: 999;"></div>')

if(mode==1){
    document.write('<!--PC导航栏-->')
    document.write('<nav class="nav-bar-holder" style="background-color:#303643">')
    document.write('    <!--<img src="https://i.postimg.cc/RFyJLX7P/headimg.jpg" alt="Head Image" style="text-align: left;width:auto">-->')
    document.write('    <div class="nav-bar" id="nav-bar">')
    document.write('        <div class="logo-box">')
    document.write('            <a href="index.html?mode=1" class="blog-title ta-c"><img style="vertical-align: top;height:32px" alt="logo"src="https://i.imgloc.com/2023/04/16/iE7BTH.png" /></a>')
    document.write('        </div>')
    document.write('        <div class="nb-a-holder" id="home"><a class="nb-a ta-c" href="../templates/index.html?mode=1">首页</a></div>')
    document.write('        <div class="nb-a-holder" id="home"><a class="nb-a ta-c" href="../templates/about.html?mode=1">关于</a></div>')
    document.write('        <div class="nb-a-holder" id="home"><a class="nb-a ta-c" href="../templates/web.sign.html?mode=1">公告</a></div>')
    document.write('        <div class="nb-a-holder"><a class="nb-a ta-c" href="../templates/category.html?mode=1">文章分类</a></div>')
    document.write('        <div class="nb-a-holder"><a class="nb-a ta-c" href="../templates/archive.html?mode=1">文件归档</a></div>')
    document.write('        <div class="nb-a-holder"><a class="nb-a ta-c" href="../templates/issue.html?mode=1">讨论</a></div>')
    document.write('        <div class="nb-a-holder"><a class="nb-a ta-c" href="../index.html">导航页</a></div>')
    document.write('        <div class="nb-a-holder"><a class="nb-a ta-c" href="../templates/link.html?mode=1">友情链接</a></div>')
    document.write('    </div><br>')
    document.write('</nav>')
    document.write('<!--mobile导航栏-->')
    document.write('<nav class="mobile-nav">')
    // document.write('    <img src="https://i.postimg.cc/RFyJLX7P/headimg.jpg" alt="Head Image" style="text-align: left;width:100%">')
    document.write('    <div class="logo-box">')
    document.write('        <a href="index.html?mode=1" class="blog-title ta-c">')
    // document.write('            <img style="vertical-align: top;" alt="logo" src="../img/user.jpeg">')
    document.write('        </a>')
    document.write('    </div>')
    document.write('    <a id="mobile_cate" alt="null" href="javascript:void(0);"><div style="padding:5px 5px 5px 5px;background-color:white;border-radius:25px"><img style="width:35px" alt="moblie-nav" src="../img/cate.svg" color:azure></div></a>')
    document.write('</nav>')
    document.write('<ul id="nav-m-list">')
    document.write('    <li id="cancel-li"><a class="fr" id="cancel" href="javascript:void(0);"></a></li>')
    document.write('    <li id="m-img-li">')
    document.write('        <img id="m-img" alt="雄关漫道真如铁，而今迈步从头越" src="../img/user.jpeg">')
    document.write('    </li>')
    document.write('    <li><a class="w-h-100 fl" href="../templates/index.html?mode=1">首页</a></li>')
    document.write('    <li><a class="w-h-100 fl" href="../templates/about.html?mode=1">关于</a></li>')
    document.write('    <li><a class="w-h-100 fl" href="../templates/web.sign.html?mode=1.html?mode=1">公告板</a></li>')
    document.write('    <li><a class="w-h-100 fl" href="../templates/category.html?mode=1">文章分类</a></li>')
    document.write('    <li><a class="w-h-100 fl" href="../templates/archive.html?mode=1">文件归档</a></li>')
    document.write('    <li><a class="w-h-100 fl" href="../templates/issue.html?mode=1">讨论</a></div>')
    document.write('    <li><a class="w-h-100 fl" href="../index.html">导航页</a></div>')
    document.write('    <li><a class="w-h-100 fl" href="../templates/link.html?mode=1">友情链接</a></li>')
    document.write('</ul>')
}
if(mode==2){
    document.write('<nav class="nav-bar-holder" style="background-color:#303643">')
    document.write('    <!--<img src="https://i.postimg.cc/RFyJLX7P/headimg.jpg" alt="Head Image" style="text-align: left;width:auto">-->')
    document.write('    <div class="nav-bar" id="nav-bar">')
    document.write('        <div class="logo-box">')
    document.write('            <a href="index.html?mode=2" class="blog-title ta-c"><img style="vertical-align: top;height:32px" alt="logo"src="https://i.imgloc.com/2023/04/16/iE7BTH.png" /></a>')
    document.write('        </div>')
    document.write('        <div class="nb-a-holder" id="home"><a class="nb-a ta-c" href="../templates/index.html?mode=2">首页</a></div>')
    document.write('        <div class="nb-a-holder" id="home"><a class="nb-a ta-c" href="../templates/about.html?mode=2">关于</a></div>')
    document.write('        <div class="nb-a-holder" id="home"><a class="nb-a ta-c" href="../templates/web.sign.html?mode=2">公告</a></div>')
    document.write('        <div class="nb-a-holder"><a class="nb-a ta-c" href="../templates/category.html?mode=2">文章分类</a></div>')
    document.write('        <div class="nb-a-holder"><a class="nb-a ta-c" href="../templates/archive.html?mode=2">文件归档</a></div>')
    document.write('        <div class="nb-a-holder"><a class="nb-a ta-c" href="../templates/issue.html?mode=2">讨论</a></div>')
    document.write('        <div class="nb-a-holder"><a class="nb-a ta-c" href="../index.html">导航页</a></div>')
    document.write('        <div class="nb-a-holder"><a class="nb-a ta-c" href="../templates/link.html?mode=2">友情链接</a></div>')
    document.write('    </div><br>')
    document.write('</nav>')
    document.write('<!--mobile导航栏-->')
    document.write('<nav class="mobile-nav">')
    // document.write('    <img src="https://i.postimg.cc/RFyJLX7P/headimg.jpg" alt="Head Image" style="text-align: left;width:100%">')
    document.write('    <div class="logo-box">')
    document.write('        <a href="index.html?mode=2" class="blog-title ta-c">')
    // document.write('            <img style="vertical-align: top;" alt="logo" src="../img/user.jpeg">')
    document.write('        </a>')
    document.write('    </div>')
    document.write('    <a id="mobile_cate" alt="null" href="javascript:void(0);"><div style="padding:5px 5px 5px 5px;background-color:white;border-radius:25px"><img style="width:35px" alt="moblie-nav" src="../img/cate.svg" color:azure></div></a>')
    document.write('</nav>')
    document.write('<ul id="nav-m-list">')
    document.write('    <li id="cancel-li"><a class="fr" id="cancel" href="javascript:void(0);"></a></li>')
    document.write('    <li id="m-img-li">')
    document.write('        <img id="m-img" alt="雄关漫道真如铁，而今迈步从头越" src="../img/user.jpeg">')
    document.write('    </li>')
    document.write('    <li><a class="w-h-100 fl" href="../templates/index.html?mode=2">首页</a></li>')
    document.write('    <li><a class="w-h-100 fl" href="../templates/about.html?mode=2">关于</a></li>')
    document.write('    <li><a class="w-h-100 fl" href="../templates/web.sign.html?mode=1.html?mode=2">公告板</a></li>')
    document.write('    <li><a class="w-h-100 fl" href="../templates/category.html?mode=2">文章分类</a></li>')
    document.write('    <li><a class="w-h-100 fl" href="../templates/archive.html?mode=2">文件归档</a></li>')
    document.write('    <li><a class="w-h-100 fl" href="../templates/issue.html?mode=2">讨论</a></div>')
    document.write('    <li><a class="w-h-100 fl" href="../index.html">导航页</a></div>')
    document.write('    <li><a class="w-h-100 fl" href="../templates/link.html?mode=2">友情链接</a></li>')
    document.write('</ul>')
}
// document.write('    <div id="nav-bar-cover" style="width:100%;height:30px"></div>')
