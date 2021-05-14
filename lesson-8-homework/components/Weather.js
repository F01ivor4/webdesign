import React from "react";
import PopupButton from "./PopupButton"
import "../styles/Weather.module.css"




export default function Weather(props) {
    // console.log(props.data)
    let weatherTitle = props.data.title
    let weatherData = props.data.list

    var acontent =
        <div className="s_mod_weather">
            <div className="weather_mod">
                <a className="city_wather" href={weatherTitle.href} target="_blank">
                    <span className="show_city c_font_normal c_color_t">
                        {weatherTitle.city}
                    </span>
                    <span className="show_icon">
                        <img className="weather_icon" src={weatherTitle.weatherPic} />
                        <span className="show_icon_temp c_font_normal c_color_t"> {weatherData[0][1]} </span>
                    </span>
                </a>
                <div className="show_pollution" >
                    <span className="show_airParm pollution_level_0">
                        <span className="show_pollution_name">{weatherTitle.airQuality}</span>
                    </span>
                </div>
            </div>
        </div>

    var popupContent =
        <div className="s_mod_weather">
            <div id="s-mod-setweather" className="s_mod_setweather show">
                <div className="setweather_content">

                    <div className="lunar_mod">
                        <span className="lunar_calendar c_font_normal c_color_text" title={weatherTitle.date}>{weatherTitle.date}</span>
                        <span className="lunar_festival c_font_normal c_color_gray2" title={weatherTitle.lunar}>{weatherTitle.lunar}</span>
                        <a className="lunar_sevenday_link" target="_blank" hidefocus="" href={weatherTitle.href7days}>
                            <span className="lunar_sevenday c_font_normal">未来七天天气</span>
                        </a>
                        <span className="lunar_setting_btn"><span className="c_icon"></span>
                            <span className="lunar_settint_text c_font_normal c_color_gray2">切换</span></span>
                    </div>

                    <div className="everyday_mod clearfix">
                        {weatherData.map((item, index) => {
                            return (
                                <div className="everyday_item today is_today" day-name="today" key={index}>
                                    <a className="everyday_link" target="_blank" hidefocus="" href={weatherTitle.href}>
                                        <div className="everyday_title c_font_normal c_color_text" title={item[0]}>
                                            {item[0]}
                                        </div>
                                        <img className="everyday_icon" src={item[4]} />
                                        <div className="everyday_temp c_font_normal c_color_text" title={item[1]}>
                                            {item[1]}
                                        </div>
                                        <div className="everyday_condition c_font_normal c_color_text" title={item[2]}>
                                            {item[2]}
                                        </div>
                                        <div className="everyday_wind c_font_normal c_color_text c_line_clamp1" title={item[3]}>
                                            {item[3]}
                                        </div>
                                    </a>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        </div >

    return <PopupButton btnContent={acontent} popupContent={popupContent} style="s_weather_wrapper" />
}