main();

function main(){
    window.addEventListener('scroll',scrollToBottom);
    loadData();
}

function scrollToBottom(){
    let st = document.documentElement.scrollTop || document.body.scrollTop;
    let ch = document.documentElement.clientHeight || document.body.clientHeight;
    let sh = document.documentElement.scrollHeight || document.body.scrollHeight;
    if(st + ch+1>=sh) {
        loadData();      
           //这里进行修改成请求数据
    }
}

function turnString(num){
    var re=/^[0-9]+$/;
    var re2=/^[0-9]+(\.[0-9]{1})$/;
    if(re.test(num)){
        num+=".00";
    }
    return num;
}
function intoChinese(cnt){
    if(cnt<=10000)
        return cnt.toString();
    else
    {
        cnt = cnt/10000;
        cnt=cnt.toFixed(1);
        return turnString(cnt)+"万";
    }
}

function culTime(hot_time){
    let now_time = Date.now();
    let delta = (now_time/1000-hot_time)/60;
    if (delta<60){
        delta = delta.toFixed(0);
        return delta.toString()+"分钟前";
    }
    else if (delta<60*24){
        delta/=60;
        delta = delta.toFixed(0);
        return delta.toString()+"小时前";
    }
    else {
        delta/=60*24;
        delta = delta.toFixed(0);
        return delta.toString()+"天前";
    }
}
function handleTitle(str){
    if(str.length>=40){
        var ans=str.slice(0,40)+"....";
        return ans;
    }
    return str;
}

function culTag(data){
    if (!("chinese_tag" in data)){
        return "other";
    }
    else if(data.chinese_tag=="视频"){
        return "vedio";
    }
    else if(data.chinese_tag=="娱乐"){
        return "entertainment";
    }
    else if(data.chinese_tag=="社会"){
        return "social";
    }
    else if(data.chinese_tag=="财经"){
        return "finance";
    }
    else if(data.chinese_tag=="国际"){
        return "world";
    }
    else if(data.chinese_tag=="时政"){
        return "politic";
    }
    else if(data.chinese_tag=="军事"){
        return "military";
    }
    else if(data.chinese_tag=="汽车"){
        return "car";
    }
    else if(data.chinese_tag=="教育"){
        return "education";
    }
    else {
        return "other";
    }
}
function culTagChinese(data){
    if (!("chinese_tag" in data)){
        return "其他";
    }
    else {
        return data.chinese_tag;
    }
}
function inputArticle(data){

    var news = document.createElement('div');
    news.className = "news";
    let feed_list = document.getElementsByClassName('feed-list')[0];
    feed_list.appendChild(news);

    var title_box = document.createElement('div');
    title_box.className = "title-box";
    news.appendChild(title_box);

    let title = document.createElement('a');
    title.innerHTML = handleTitle(data.title);
    title_box.appendChild(title);

    let foot_bar = document.createElement('div');
    foot_bar.className = "foot-bar";
    news.appendChild(foot_bar);

    let foot_bar_left = document.createElement('div');
    foot_bar_left.className = "foot-bar-left";
    foot_bar.appendChild(foot_bar_left);

    let tag = document.createElement('a');
    tag.className = "foot-bar-left tag-style-";
    tag.className += culTag(data);
    tag.innerHTML = culTagChinese(data);
    foot_bar_left.appendChild(tag);

    if("media_avatar_url" in data && data.media_avatar_url!="")
    {
        let avatar = document.createElement('a');
        avatar.className = "foot-bar-action avatar";
        let avatar_img = document.createElement('img');
        avatar_img.src = "http://"+data.media_avatar_url;
        avatar.appendChild(avatar_img);
        foot_bar_left.appendChild(avatar);
    }

    let source = document.createElement('a');
    source.className = "foot-bar-action sourse";
    source.innerHTML = "&nbsp;"+data.source+"&nbsp;·";
    foot_bar_left.appendChild(source);

    let comment = document.createElement('a');
    comment.className = "foot-bar-action sourse";
    if ("comments_count" in data){
        comment.innerHTML = "&nbsp;\n"+intoChinese(data.comments_count)+"评论"+"&nbsp;·";
    }
    else {
        comment.innerHTML = "&nbsp;\n"+"-"+"&nbsp;·";
    }
    //comment.innerHTML = "&nbsp;\n"+intoChinese(1345689)+"评论"+"&nbsp;·";
    foot_bar_left.appendChild(comment);

    let time = document.createElement('a');
    time.className = "foot-bar-action sourse";
    foot_bar_left.appendChild(time);
    time.innerHTML = culTime(data.behot_time);
}

function inputImg(data){
    var news = document.createElement('div');
    news.className = "img-news";
    let feed_list = document.getElementsByClassName('feed-list')[0];
    feed_list.appendChild(news);

    let img_news_lbox1 = document.createElement('div');
    img_news_lbox1.className = "img-news-lbox1";
    news.appendChild(img_news_lbox1);
    
    let img_news_lbox = document.createElement('div');
    img_news_lbox.className = "img-news-lbox";
    img_news_lbox1.appendChild(img_news_lbox);

    let news_img = document.createElement('img');
    news_img.src = "http://"+data.image_url;
    img_news_lbox.append(news_img);

    let img_news_rbox = document.createElement('dic');
    img_news_rbox.className = "img-news-rbox";
    news.appendChild(img_news_rbox);

    var title_box = document.createElement('div');
    title_box.className = "title-box";
    img_news_rbox.appendChild(title_box);

    let title = document.createElement('a');
    title.innerHTML = handleTitle(data.title);
    title_box.appendChild(title);

    let foot_bar = document.createElement('div');
    foot_bar.className = "foot-bar";
    img_news_rbox.appendChild(foot_bar);

    let foot_bar_left = document.createElement('div');
    foot_bar_left.className = "foot-bar-left";
    foot_bar.appendChild(foot_bar_left);

    let tag = document.createElement('a');
    tag.className = "foot-bar-left tag-style-";
    tag.className += culTag(data);
    tag.innerHTML = culTagChinese(data);
    foot_bar_left.appendChild(tag);

    if("media_avatar_url" in data && data.media_avatar_url!="")
    {
        let avatar = document.createElement('a');
        avatar.className = "foot-bar-action avatar";
        let avatar_img = document.createElement('img');
        avatar_img.src = "http://"+data.media_avatar_url;
        avatar.appendChild(avatar_img);
        foot_bar_left.appendChild(avatar);
    }

    let source = document.createElement('a');
    source.className = "foot-bar-action sourse";
    source.innerHTML = "&nbsp;"+data.source+"&nbsp;·";
    foot_bar_left.appendChild(source);
    let comment = document.createElement('a');
    comment.className = "foot-bar-action sourse";
    if ("comments_count" in data){
        comment.innerHTML = "&nbsp;\n"+intoChinese(data.comments_count)+"评论"+"&nbsp;·";
    }
    else {
        comment.innerHTML = "&nbsp;\n"+"-"+"&nbsp;·";
    }
    //comment.innerHTML = "&nbsp;\n"+intoChinese(1345689)+"评论"+"&nbsp;·";
    foot_bar_left.appendChild(comment);
    let time = document.createElement('a');
    time.className = "foot-bar-action sourse";
    foot_bar_left.appendChild(time);
    time.innerHTML = culTime(data.behot_time);
}
function inputMessage(data){
    if ("image_url" in data &&data.image_url!=""){
        inputImg(data);
    }
    else{
        inputArticle(data);
    }
}
function loadData(){
    var wsServer = 'ws://localhost:8000'; //服务器地址
    var websocket = new WebSocket(wsServer); //创建WebSocket对象

    //链接成功时的行为
    websocket.onopen = function (evt) {
        console.log("create connection")
        websocket.send("give me data");
    };
    //链接关闭时的行为
    websocket.onclose = function (evt) {
        console.log("close connection")
    };
    //收到消息的行为，此处是控制台打印
    websocket.onmessage = function (evt) {
        data = JSON.parse(evt.data).data;
        console.log("receive: ",data)
        
        for(let i=0;i<10;++i)
        {
            inputMessage(data[i]);
        }
    };

    websocket.onerror = function (evt) {
        console.log("error: ",evt.data)
    };
}