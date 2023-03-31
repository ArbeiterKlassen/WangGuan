function display_tags_moblie(id){
    if (id == "sign_open")document.getElementById('sign').innerHTML = '<a class="w-h-100 fl" onclick="{display_tags_moblie(\'sign_close\')}" style="cursor: pointer;">公告版<<</a><br><a class="w-h-100 fl" href="../templates/web.sign.html">   网页公告</a></a><br><a class="w-h-100 fl" href="../templates/club.sign.html">   赤原社公告</a>';
    if (id == "sign_close") document.getElementById('sign').innerHTML = '<a class="w-h-100 fl" onclick="{display_tags_moblie(\'sign_open\')}" style="cursor: pointer;">公告板>></a>';
}
function display_tags(id){
    if (id == "sub_sign_open") document.getElementById('sublist-sign').innerHTML = '<a class="nb-a ta-c" href="../templates/web.sign.html">网站公告</a><a class="nb-a ta-c" href="../templates/club.sign.html">赤原社公告</a>';
    if (id == "sub_club_open") document.getElementById('sublist-club').innerHTML = '<a class="nb-a ta-c" href="../templates/about.html?name=1">赤原社</a><a class="nb-a ta-c" href="../templates/about.html?name=2">兰州红松学会</a><a class="nb-a ta-c" href="../templates/about.html?name=3">呼马学会</a><a class="nb-a ta-c" href="../templates/about.html?name=4">北桥联社</a><a class="nb-a ta-c" href="../templates/about.html?name=5">马列社-为公社</a><a class="nb-a ta-c" href="../templates/about.html?name=6">鄂尔多斯</a><a class="nb-a ta-c" href="../templates/about.html?name=7">新赤峰学社</a>';
}
function recover_tags(id){
    document.getElementById("sublist-club").innerHTML = "";
    document.getElementById("sublist-sign").innerHTML = "";
}
document.write('<!--PC导航栏-->')
document.write('<nav class="nav-bar-holder" style="background-color:#303643">')
document.write('    <!--<img src="https://i.postimg.cc/RFyJLX7P/headimg.jpg" alt="Head Image" style="text-align: left;width:auto">-->')
document.write('    <div class="nav-bar" id="nav-bar">')
document.write('        <div class="logo-box">')
document.write('            <a href="index.html" class="blog-title ta-c"><img style="vertical-align: top;height:32px" alt="logo"src="../img/user_ops.jpeg" /></a>')
document.write('        </div>')
document.write('        <div class="nb-a-holder" id="home"><a class="nb-a ta-c" href="../templates/index.html">首页</a></div>')
document.write('        <div class="nb-a-holder" id="home"><a class="nb-a ta-c" href="../templates/aulim.html">内左联</a></div>')
document.write('        <div class="nb-a-holder"><a class="nb-a ta-c" onmouseover="display_tags(\'sub_club_open\')" style="cursor: pointer;">社团</a><div class="sub-list" id="sublist-club" onmouseleave="recover_tags()"></div></div>')
document.write('        <div class="nb-a-holder"><a class="nb-a ta-c" onmouseover="display_tags(\'sub_sign_open\')" style="cursor: pointer;">公告板</a><div class="sub-list" id="sublist-sign" onmouseleave="recover_tags()"></div></div>')
document.write('        <div class="nb-a-holder"><a class="nb-a ta-c" href="../templates/category.html">文章分类</a></div>')
document.write('        <div class="nb-a-holder"><a class="nb-a ta-c" href="../templates/archive.html">文件归档</a></div>')
document.write('        <div class="nb-a-holder"><a class="nb-a ta-c" href="../templates/issue.html">讨论</a></div>')
document.write('        <div class="nb-a-holder"><a class="nb-a ta-c" href="../templates/propagate.html">宣传墙</a></div>')
document.write('        <div class="nb-a-holder"><a class="nb-a ta-c" href="../templates/link.html">友情链接</a></div>')
document.write('    </div><br>')
// document.write('    <div id="nav-bar-cover" style="width:100%;height:30px"></div>')
document.write('</nav>')
document.write('<!--mobile导航栏-->')
document.write('<nav class="mobile-nav">')
document.write('    <img src="https://i.postimg.cc/RFyJLX7P/headimg.jpg" alt="Head Image" style="text-align: left;width:100%">')
document.write('    <div class="logo-box">')
document.write('        <a href="index.html" class="blog-title ta-c">')
document.write('            <img style="vertical-align: top;" alt="logo" src="../img/user.jpeg">')
document.write('        </a>')
document.write('    </div>')
document.write('    <a id="mobile_cate" alt="null" href="javascript:void(0);"><img style="width:35px" alt="moblie-nav" src="../img/cate.jpeg"></a>')
document.write('</nav>')
document.write('<ul id="nav-m-list">')
document.write('    <li id="cancel-li"><a class="fr" id="cancel" href="javascript:void(0);"></a></li>')
document.write('    <li id="m-img-li">')
document.write('        <img id="m-img" alt="雄关漫道真如铁，而今迈步从头越" src="../img/user.jpeg">')
document.write('    </li>')
document.write('    <li><a class="w-h-100 fl" href="../templates/index.html">首页</a></li>')
document.write('    <li><a class="w-h-100 fl" href="../templates/aulim.html">内左联</a></li>')
// document.write('    <li><div id="club"><a class="w-h-100 fl" onclick="{display_tags_moblie(\'club_open\')}" style="cursor: pointer;">社团>></a></div></li>')
document.write('    <li><a class="w-h-100 fl" href="../templates/about.html?name=0">社团</a></li>')
document.write('    <li><div id="sign"><a class="w-h-100 fl" onclick="{display_tags_moblie(\'sign_open\')}" style="cursor: pointer;">公告板>></a></div></li>')
document.write('    <li><a class="w-h-100 fl" href="../templates/category.html">文章分类</a></li>')
document.write('    <li><a class="w-h-100 fl" href="../templates/archive.html">文件归档</a></li>')
document.write('    <li><a class="w-h-100 fl" href="../templates/issue.html">讨论</a></div>')
document.write('    <li><a class="w-h-100 fl" href="../templates/propagate.html">宣传墙</a></div>')
document.write('    <li><a class="w-h-100 fl" href="../templates/link.html">友情链接</a></li>')
document.write('</ul>')