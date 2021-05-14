
import { useRouter} from 'next/router'
import "../styles/Main.module.css"
import "../styles/News.module.css"



function itemWithImg(item, idx) {
    const router = useRouter();
    return (
        <div className="s_news_special s_news_item s_news_special_item_tpl_2 s_opacity_blank8 clearfix" key={idx} >
            <div className="s_pic_content">
                <div className="s_pic_content_own">
                    <ul className="s_news_content_imgs clearfix">
                        <li className="item_img_wrap c_span4 c_span_last">
                            <a className="c_img c_img_radius_large" href={`/posts/${idx}`} onClick={(e) => {e.preventDefault();const href = e.currentTarget.href;router.push(href); console.log(href)}} target="_blank">
                                <img className="s_news_img" src={item['img']} />
                            </a>
                            <div className="s_img_mask c_img_radius_large"></div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="s_block_container c_span8 c_span_last">
                <div className="s_text_content">
                    <a className="s_news_item_title c_link c_font_big c_gap_bottom_small" href={`/posts/${idx}`} onClick={(e) => {e.preventDefault();const href = e.currentTarget.href;router.push(href); console.log(href)}} title={item['title']} target="_blank">
                        {item['title']}
                    </a>
                </div>
                <div className="from c_font_normal">
                    <a className="c_gap_right" href={item['author_href']} target="_blank">
                        <span className="src_net c_color_gray">
                            {item['site']}
                        </span>
                    </a>
                    <span className="src_time c_color_gray2 c_gap_right">
                        {item['time']}
                    </span>
                    {/* <div className="dustbin" data-click="LOG_BTN_DUSTBIN">
                    <i className="c_icon"></i>
                </div> */}
                </div>
            </div>
        </div>
    )
}

function itemWithoutImg(item, idx) {
    const router = useRouter();
    return (
        <div className="s_news_special s_news_item s_news_special_item_tpl_2 s_opacity_blank8 clearfix" key={idx}>
            <div className="s_text_content">
                <a className="s_news_item_title c_link c_font_big c_gap_bottom_small" href={`/posts/${idx}`} onClick={(e) => {e.preventDefault();const href = e.currentTarget.href;router.push(href); console.log(href)}} title={item['title']} target="_blank">
                    {item['title']}
                </a>
            </div>
            <div className="from c_font_normal">
                <a className="c_gap_right" href={item['author_href']} target="_blank">
                    <span className="src_net c_color_gray">
                        {item['site']}
                    </span>
                </a>
                <span className="src_time c_color_gray2 c_gap_right">
                    {item['time']}
                </span>
            </div>
        </div>
    )
}

export default function News(props) {
    let itemsLists = props.data
    return (
        <div className="water_container">
            {
                itemsLists.map((itemsList, index) => {
                    return (
                        <div className="s_news_list_wrapper c_container c_feed_box" key={index} >
                            {
                                itemsList.map((item, index) => {
                                    let res = "img" in item ? itemWithImg(item, index) : itemWithoutImg(item, index)
                                    return res
                                })
                            }
                        </div>
                    )
                })
            }
        </div >
    )
}
