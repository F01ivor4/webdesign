import "../styles/Main.module.css"
import "../styles/RankWrapper.module.css"
import React from "react"
import Navigator from "../components/Navigator"
import News from "../components/News"


function HeadWrapper() {
    return (
        <div className="header_wrapper">
            <link rel="stylesheet" href="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/soutu/css/soutu_new2_ae491b7.css" type="text/css" data-for="result"></link>
            <div className="s_p_top">
                <img id="s_lg_img" className="s_lg_img_gold_show" src="//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" width="270" height="129" onError={() => {
                    this.src = 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1-66368c33f8.png';
                    this.onerror = null;
                }} useMap="#mp" />
            </div>
            <form name="f" id="form" action="https://baidu.com/s" className="fm">
                <span id="s_kw_wrap" className="bg s_ipt_wr quickdelete_wrap">
                    <span className="soutu_btn"></span>
                    <input type="text" name="wd" className="kw" maxLength="100" autoComplete="off" />
                </span>
                <span className="btn_wr s_btn_wr bg" id="s_btn_wr">
                    <input type="submit" value="百度一下" id="su" className="btn self_btn bg s_btn" />
                </span>
            </form>
        </div>
    )
}

function MyFocus() {
    return <div className="s_content">
        <div className="s_xmancard_mine_new s_xmancard s_mine_split">
            <div className="s_mine_wrapper clearfix">
                <div className="s_code_blocks s_block_nav">
                    <div className="s_block_container">
                        <div className="s_mblock_title s_opacity_border4_bottom">
                            <div className="title_content">
                                <span className="c_color_text">
                                    我的导航
                                </span>
                            </div>
                        </div>
                        <div className="s_mblock_content">
                            <div className="c_gap_left_large nav_item add_nav">
                                <a className="border_for_item" href="###">
                                    <div className="nav_icon_add c_large_text"><i className="c_icon c_large_text">+</i></div>
                                    <div className="c_gap_left_middle nav_text">
                                        <span className="nav_text_content">添加导航</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

function HotNews(prop) {
    var numberStyle = [{ color: "#fe2d46" }, { color: "#f60" }, { color: "#faa90e" }]
    return <li className="clearfix">
        <a className="title_content c_link c_font_medium c_line_ellipsis" href={prop.item.href} target="_blank">
            <span className="title_content_index c_index_single" style={prop.idx <= 3 ? numberStyle[prop.idx - 1] : null} >{prop.idx}</span>
            <span className="title_content_title">{prop.item.title}</span>
        </a>
        <div className="news_count c_font_normal c_color_gray2" title={`搜索指数${prop.item.exponent}`}>{prop.item.exponent}</div>
    </li>
}
function RankWrapper(props) {
    let hotNews = props.data
    return (
        <div className="s_news_rank_wrapper s_news_special_rank_wrapper c_container_r"
        // styles={{
        //     position: "fixed",
        //     right: "207.2px",
        //     top: "110px"
        // }}
        >
            <div className="hot_news_wrapper" >
                <div className="s_rank_title" >
                    <a href="http://top.baidu.com/?fr=mhd_card" target="_blank">
                        <div className="c_font_medium c_color_t title_text">百度热榜</div></a>
                    <a className="c_font_normal c_color_gray2 hot_refresh">
                        <i className="icofont icofont_refresh"
                            style={{ marginRight: '4px', fontSize: '16px' }} />
                        <span className="hot_refresh_text">换一换</span>
                    </a>
                </div>
                <ul className="s_news_rank_content">
                    {
                        hotNews.map((item, index) => {
                            return <HotNews idx={index + 1} item={item} key={index} />
                        })
                    }
                </ul>
            </div>
        </div >
    )
}

function Recommend(props) {
    return <div className="s_content">
        <div className="s_news_wrapper clearfix">
            <RankWrapper data={props.data.rankWrapper} />
            <News data={props.data.news} />
        </div>
    </div>
}

function MiddleWrapper(props) {
    // console.log(props.data)
    const [showResults, setShowResults] = React.useState(0)
    const onClick0 = () => setShowResults(0)
    const onClick1 = () => setShowResults(1)
    const onClick2 = () => setShowResults(2)
    return (
        <div className="s_wrap">
            <div id="s_main" className="main c_wrapper c_wrapper_l clearfix">
                <div className="s_mancacrd_main">
                    <div className="s_menu_container">
                        <div className="s_menu_gurd c_font_medium">
                            <div className="s_ctner_menus s_opacity_blank8" >
                                <div id="s_menus_wrapper" className="menus_wrapper">
                                    <span id="s_menu_mine" onClick={onClick0} className="s_menu_item s_menu_mine" style={showResults == 0 ? { color: '#222' } : {}}>
                                        我的关注
                                        <span className="s_menu_item_underline" style={showResults == 0 ? { display: 'inline-block' } : { display: 'none' }} />
                                    </span>
                                    <span onClick={onClick1} className="s_menu_item" style={showResults == 1 ? { color: '#222' } : {}}>
                                        推荐
                                        <span className="s_menu_item_underline" style={showResults == 1 ? { display: 'inline-block' } : { display: 'none' }} />
                                    </span>
                                    <span onClick={onClick2} className="s_menu_item" style={showResults == 2 ? { color: '#222' } : {}}>
                                        导航<span className="s_menu_item_underline" style={showResults == 2 ? { display: 'inline-block' } : { display: 'none' }} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="s_ctner_contents">
                        {showResults == 0 && <MyFocus data={props.data.myFocus} />}
                        {showResults == 1 && <Recommend data={props.data.recommend} />}
                        {showResults == 2 && <Navigator data={props.data.navigator} />}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default function Main(props) {
    // console.log(props)
    return (
        <div className="container">
            <HeadWrapper />
            <MiddleWrapper data={props.data.middleWrapper} />
        </div>
    )
}
