import React from "react";
import "../styles/Header.module.css"
import weather_pic from "../src/weather.png"
import Weather from "../components/Weather"
// 头部限制今日头条
function HeaderBlock(props) {
    return <a href={props.link} target="_blank" className="mnav c_font_normal c_color_t">{props.name}</a>
}

function HeaderLeft() {
    return (
        <div className="top_left">
            <HeaderBlock name="新闻" link="http://news.baidu.com" />
            <HeaderBlock name="hao123" link="https://www.hao123.com" />
            <HeaderBlock name="地图" link="http://map.baidu.com" />
            <HeaderBlock name="直播" link="http://news.baidu.com" />
            <HeaderBlock name="视频" link="http://news.baidu.com" />
            <HeaderBlock name="贴吧" link="http://news.baidu.com" />
            <HeaderBlock name="学术" link="http://news.baidu.com" />
        </div>
    )
}

// function Weather(){
//     return <div className="weather">
//         <span className="show_city_name c_font_normal c_color_t">
//             上海
//         </span>
//         <span className="show_icon">
//             <img className="weather_icon" src={weather_pic}/>
//             <span className="show_icon_temp c_font_normal c_color_t">18℃</span>
//         </span>
//         <div className="show_pollution" >
//             <span className="show_airParm pollution_level_0">
//                     <span className="show_pollution_name">优</span>
//             </span>
//         </div>
//     </div>
// }

function User() {
    return <a className="s_top_username" href="http://i.baidu.com/" target="_blank">
        <span className="s_top_img_wrapper">
            <img src="https://himg.bdimg.com/sys/portraitn/item/98917666656e757834383304d1" />
        </span>
        <span className="user_name c_font_normal c_color_t">vfenux483</span>
    </a>
}

function Config() {
    return <span className="s_top_right_text c_font_normal c_color_t" id="s_usersetting_top">
        设置</span>
}
function HeaderRight(props) {
    return (
        <div className="top_right">
            <Weather data={props.data.weather} />
            <Config />
            <User />
        </div>
    )
}
export default function Header(props) {
    return (
        <header>
            <HeaderLeft />
            <HeaderRight data={props.data.headerRight} />
        </header>
    )
}
