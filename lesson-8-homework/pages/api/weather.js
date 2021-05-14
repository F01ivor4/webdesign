
var weatherData = {
  title: {
    date: "04月27日",
    lunar: "农历 三月十六",
    city: "上海",
    weatherPic: "https://dss2.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/weather/icons2/a2.png",
    airQuality: "优",
    href7days: "http://www.weather.com.cn/weather/101020200.shtml#7d",
    href: "//www.baidu.com/s?tn=baidutop10&rsv_idx=2&wd=%E4%B8%8A%E6%B5%B7%E5%A4%A9%E6%B0%94%E9%A2%84%E6%8A%A5",
  },
  list: [
    ["今天(周三)", "23℃", "阴", "东北风3-4级", "https://dss2.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/weather/icons2/a2.png"],
    ["明天(周四)", "19 ~ 28", "多云转晴", "西南风5-6级", "https://dss2.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/weather/icons2/a1.png"],
    ["后天(周五)", "18 ~ 31", "晴转小雨", "西南风6-7级", "https://dss3.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/weather/icons2/a0.png"],
    ["周六", "15 ~ 27", "晴", "东北风5-6级", "https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/weather/icons2/a0.png"],
    ["周日", "15 ~ 24", "多云转阴", "东风4-5级", "https://dss3.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/weather/icons2/a1.png"]
  ]
}

export default (req, res) => {
  res.status(200).json(weatherData)
}

