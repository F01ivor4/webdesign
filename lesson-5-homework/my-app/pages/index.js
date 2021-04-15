//import styles from "../styles/index.css";
import React, { useEffect, useState } from "react";
//import '../styles/index.css';
//计算新闻的时间
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
// 有图片的新闻
function inputImg(data){
    return (
        <div className="img-news">
            <div className="img-news-lbox1">
                <a className="img-news-lbox">
                    <img src={data.img_url}/>
                </a>
            </div>
            <div className="img-news-rbox">
                <div className="title-box">
                    <a className="link"> {data.title}</a>
                </div>
                <div className="foot-bar">
                    <div className="foot-bar-left">
                        <a className="foot-bar-left tag-style-politic">{data.chinese_tag}</a>
                        <a className="foot-bar-action avatar">
                            <img src={data.media_avatar_url}/>
                        </a>
                        <a className="foot-bar-action sourse">
                            {data.source}
                            &nbsp;·
                        </a>
                        <a className="foot-bar-action sourse">
                            {data.comments_count}评论
                            &nbsp;·
                        </a>
                        <span className="foot-bar-action time">
                            {culTime(data.hot_time)}
                        </span>
                    </div>
                </div>
            </div>
        </div>)
}
//没有图片的新闻
function inputArticle(data){
    return (
        <div className="news">
            <div className="title-box">
                <a className="link"> {data.title}</a>
            </div>
            <div className="foot-bar">
                <div className="foot-bar-left">
                    <a className="foot-bar-left tag-style-politic">时政</a>
                    <a className="foot-bar-action avatar">
                        <img src={data.media_avatar_url}/>
                    </a>
                    <a className="foot-bar-action sourse">
                        {data.source}
                        &nbsp;·
                    </a>
                    <a className="foot-bar-action sourse">
                        {data.comments_count}评论
                        &nbsp;·
                    </a>
                    <span className="foot-bar-action time">
                    {culTime(data.hot_time)}
                    </span>
                </div>
            </div>
        </div>
    )
}

function changeIntoNews(data){
    if ("img_url" in data &&data.image_url!=""){
        return inputImg(data);
    }
    else{
        return inputArticle(data);
    }
}



export default function Home() {
  const [state, setState] = useState({
    list: [],
  });
  const [num,setNum] = useState(10);
  function scb(){
    let st = document.documentElement.scrollTop || document.body.scrollTop;
    let ch = document.documentElement.clientHeight || document.body.clientHeight;
    let sh = document.documentElement.scrollHeight || document.body.scrollHeight;
    if(st + ch+2>sh) {
        setNum(num+3); //增加三条新闻
        console.log('num1',num);
    }
  }

//   fso = new ActiveXObject(Scripting.FileSystemObject);
//   f = fso.OpenTextFile("D://code//homework5//my-app//pages//1.txt", 1);
//   S = f.ReadAll();
//   console.log('S',S);
  useEffect(() => {
    window.addEventListener('scroll',scb)
    fetch("/api/news").then(async (res) => {
      const resp = await res.json();
      console.log('num',num);
      setState({
        list: resp.data,
      });
    });
    return ()=>{
        window.removeEventListener('scroll',scb)
    }
  });

  //console.log("state",state.list)
  return (
    // 1?
    // <img src="../figure/qiushi.png"/>:
    <div>
    <div id="header" >
        <div className="top-bar">
            <div className="header-left-nav">
                <a className="download-app">下载APP</a>
                <a className="register">注册头条号</a>
                <div className="weather-bar">
                    <span className="location"> 北京 </span>
                    <span className="city-state">
                        沙尘暴
                    </span>
                </div>
                <span className="city_temperature"><em>2</em>&nbsp;℃ &nbsp;/&nbsp; <em>15</em>&nbsp;℃</span>
            </div>
            <div className="header-right-nav">
                <a className="copyright-complaint">侵权投诉</a>
                <a className="other-app">头条产品</a>
            </div>
        </div>
    </div>
    <div id="container">
        <div id="center" className="column">
            <div className="feed-list">
                {state.list.slice(0,num).map((i) => {
                    return (
                       changeIntoNews(i)
                );})}   
            </div>
        </div>                   
        <div id="left" className="column" >
            <a className="logo" href="/"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAAA2CAMAAACSsKctAAAANlBMVEVHcEzuQEDwRETyRUX3TEzvQkLuQEDuQUHuQUHvQEDuQUHuQEDvQkLuQEDuQUHwQUHxQkLtQEDKaksGAAAAEXRSTlMAxiweDlyo49Nri/F5+bhLOapXaIgAAATMSURBVGje7ZrpsqQqDIAb2VEE3/9lx263AAmu3XVv1cn8mFOtIh+JIQuvFyFSzdK8/jsSrbg7BG+HSdjPZi3iJPTchR7a7iYam7mGNvwKTM5vlOQd6n3Z37IhN6zSNhW1TsJqMt/TwQk6G3gxmt0DC5/LfpxS9U38wOJ9RJN38uG4KGBR0wRNxrcHtn4dlPjpv4pCYzqEEffBfAG2XDC9sxyCUbbfH3wVDdbkS2P4FzQGRR4As8NdsEYXy01Y4xMa28C6KljT3gUDXNtYOn5fY3UwNtwEA9+XA397+zONxR03fQ1MerjG0Is4QYK5riLzEMDdC4+CuQoY99sKoW9R20z5zsKwN0gAczDFUohdPzSKRpw4j9Yp0+Jg2GgCrHBf3sAVuIytC8u4RjIwYmGOh8AMvTutfLtgydR8ZjzCgeV32M7eFlyZj2T8GY3lfHwNmChTGmcP5tECNNFBf4m4AqEGhGt8rYEj2i+AwUhwFCocgOs+ok383MFfMecdoGYUHFwkW76Jz5kiHlmQ4TtPY48+iNAnfqgX1a+vtNMueXyjvqox5WTkJFgthq3t0i2ydhY+4MsbYhKMtEu6dxFseqw1Gd+s2raasylPRgCluoJJgnnU3SYaHbS8Y4rJBv3h42AFdN1gGzwWZtgcMHD3Xk5BfYOz67qlsWKDnq3G1DP74DTCZVwQVbA1X57WpWWqk40od4svgInKBrtUPJSpfGPGyYYC6zma/OjJm0RzBcwcBONltAzKIVYxfyBObJlbFAHAtKSyOla4x+c1FiuhAxvOiDcpWBKo4GDbp3sLDA2CJR07EGCaUZYJwUys5OGgBhdYCRYFIWQQHKzrjU/AXCUdQ8C0e0+Y295XwbSsFhiS4qLUC9hePsZ2QqqVT4I3NvtgvrfbXQLxkwsYUoWsgI37uX4GbOXj231+J332DPHsXKb+cknCkC2gkZ1iLQE2RtRPgiVJq6mAadVtUKL5CAea69v9qGxxs/KTMLFrVaozYLLi7UcwrVxWY3XYtjfu32q07cOF/Ob7YKpWLm0Emewj+7m43Ud5EGzdAvjJKnz/jTbCg2B2OBIpXgBzZl9a/xFdhBChwYWXYIEYe1GYzn6fHlPIE3rJDhBBTPxIPHYng5bDObEXQqrEK34PTP+B/c/A/kzxD+wUWLB1AXVJd8cUm3Jkv1W/SpmGlsiVOUw32GxPbMVbZtA9WwneGjo+Xun/34s8hEGLqQ+AgUaVff0cDHCpJ7stSZvKTVW//vNPoXVuNV3rVQ7WVR+juRjRfLqtMeuzkWOtG2SxdtrnuehrSc9utyBpwjwB5sp23eqdI33Og5Wm6IZan3eXKz/wcc8UYdl87ZOsrUtDZmzz6xIwoU9nB2CHKw5FLGBWVkQXzrTsu4Fvw1K+JGRWmjoPiTjto6eqysMeF08NFA0chRVu8jNRyzpogXpF6rF9LuSw2MVzHtnphMxRNLgj6IasdpCBNef8B+CKj53zyI5tWOqdATsP0VP7GPoYJd1QDQuuagw2f30xj9URaFF6MM8pMPSxfa7w4FmqxtTb4YgjCOVPReQRanvgKa5TGuvQ7j9+rq5QD6aNMqRa/LffKb9JvQoR6Al9XCQyrCZCIL5eX5Z4+QEscJfekj/2D7KhSDEKe9jHAAAAAElFTkSuQmCC"/> </a>
            <ul className="left-ulist">
                <li className="left-list-head">
                    <a className="left-list">推荐</a>
                </li>
                <li>
                    <a className="left-list">西瓜视频</a>
                </li>
                <li>
                    <a className="left-list">热点</a>
                </li>
                <li>
                    <a className="left-list">直播</a>
                </li>
                <li>
                    <a className="left-list">图片</a>
                </li>
                <li>
                    <a className="left-list">科技</a>
                </li>
                <li>
                    <a className="left-list">娱乐</a>
                </li>
                <li>
                    <a className="left-list">游戏</a>
                </li>
                <li>
                    <a className="left-list">体育</a>
                </li>
                <li>
                    <a className="left-list">懂车帝</a>
                </li>
                <li>
                    <a className="left-list">财经</a>
                </li>
                <li>
                    <a className="left-list">数码</a>
                </li>
                <li>
                    <a className="left-list">更多</a>
                </li>
            </ul>
        </div>
        <div id="right" className="column">
            <div className="search-wrapper">
                <input className="search-input" placeholder="搜索站内资讯、视频或用户"/>
                <div className="search-button">
                    <button className="right-search-button" type="button">搜索</button>
                </div>
            </div>
            <div className="login-wrapper">
                <div className="login-inner">
                    <p className="login-msg">登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条</p>
                </div>
                <a>
                    <button className="login-btn">登陆</button>
                </a>
            </div>
            <div className="pane-module">
                <div className="pane-module-head">
                    更多
                </div>
                <ul className="links-wrapper">
                    <li className="item"><a>关于头条</a></li>
                    <li className="item"><a>加入头条</a></li>
                    <li className="item"><a>媒体报道</a></li>
                    <li className="item"><a>媒体合作</a></li>
                    <li className="item"><a>产品合作</a></li>
                    <li className="item"><a>合作说明</a></li>
                    <li className="item"><a>广告投放</a></li>
                    <li className="item"><a>联系我们</a></li>
                    <li className="item"><a>用户协议</a></li>
                    <li className="item"><a>隐私政策</a></li>
                    <li className="item"><a>侵权投诉</a></li>
                    <li className="item"><a>廉洁举报</a></li>
                    <li className="item"><a>企业认证</a></li>
                    <li className="item"><a>肺炎求助</a></li>
                    <li className="item"><a>辟谣专区</a></li>
                </ul>
            </div>
            <div className="pane-module">
                <div className="pane-module-head">
                    友情链接
                </div>
                <ul className="links-wrapper">
                    <li className="item"><a>光明网</a></li>
                    <li className="item"><a>央广网</a></li>
                    <li className="item"><a>国际在线</a></li>
                    <li className="item"><a>中国西藏网</a></li>
                    <li className="item"><a>参考消息</a></li>
                    <li className="item"><a>环球网</a></li>
                    <li className="item"><a>中青在线</a></li>
                    <li className="item"><a>中青网</a></li>
                    <li className="item"><a>中工网</a></li>
                    <li className="item"><a>海外网</a></li>
                    <li className="item"><a>中国网</a></li>
                    <li className="item"><a>未来网</a></li>
                    <li className="item"><a>千龙网</a></li>
                    <li className="item"><a>新京报</a></li>
                    <li className="item"><a>北青网</a></li>
                    <li className="item"><a>法制晚报</a></li>
                    <li className="item"><a>北京晨报</a></li>
                    <li className="item"><a>北京商报</a></li>
                    <li className="item"><a>北京娱乐信报</a></li>
                </ul>
            </div>
        </div>
    </div>
  </div>
  );
}