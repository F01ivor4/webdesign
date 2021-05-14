
import "../styles/Navigator.module.css"


// className="([^" ]*) ([^" ]*) ([^" ]*) ([^" ]*) ([^" ]*)"
// className="$1 $2 $3 $4 $5"



function navWarp(warpTitle, webList, idx) {
    return (
        <div className="s_nav_wrapper" key={idx} >
            <div className="s_nav_area">
                <div className="clearfix" data-dir="hot">
                    <h1 className="c-color-text"> {warpTitle} </h1>
                    {
                        webList.map((item, index) => {
                            return (
                                <div
                                    className={`nav_item ${((index + 1) % 8 == 0 ? "nav_item8" : (index + 1) % 7 == 0 ? "nav_item7" : null)}`}
                                    key={index}
                                >
                                    <a href={item['href']} title={item['title']} className="nav_block c_color_gray" target="_blank" data-click="LOG_LINK" data-pos={index.toString()}>
                                        <span className="c_img c_img_radius_large nav_img">
                                            <img height="64" width="64" src={item['imgsrc']} />
                                        </span>
                                        <span className="nav_txt">{item['title']}</span>
                                        <span className="nav_img_mask"></span>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default function Navigate(props) {
    let webLists = props.data
    return (
        <div id="s_content_1" className="s_content" >
            <div id="s_xmancard_nav_new" data-logactid="page-card-tpl-nav_new" className="s_xmancard_nav_new s_xmancard">
                <div className="nav_block_wrapper normal_patern">
                    <div className="water_container">
                        {
                            webLists.map((item, index) => {
                                return navWarp(item.title, item.list, index);
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


