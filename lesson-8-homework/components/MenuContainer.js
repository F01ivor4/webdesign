
import style1 from "../styles/Main.module.css"
import style2 from "../styles/MenuContainer.module.css"


var styles = Object.assign({}, style1, style2);

var itemsLists = [
  [{'href': 'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_10156207137937752255%22%7D&amp;n_type=0&amp;p_from=1', 'title': '拜登：欢迎与中国竞争，而不是寻求冲突', 'author_href': 'https://author.baidu.com/home?app_id=1549941228125394&amp;from=homepage_nickname', 'site': '北晚新视觉网', 'time': '04-29 10:21', 'img': 'recomend/aec379310a55b319366c8c633b6ae92ecefc175e.jpeg'}, {'href': 'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_9577737337318995590%22%7D&amp;n_type=0&amp;p_from=1', 'title': '支援印度却被无视？中国制氧机巨头崛起，阻击欧美拿下全球第一', 'author_href': 'https://author.baidu.com/home?app_id=1562668965781895&amp;from=homepage_nickname', 'site': '妙语侃科技', 'time': '04-29 11:04', 'img': 'recomend/562c11dfa9ec8a132c05ae7753cefa87a1ecc064.jpeg'}, {'href': 'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_9424546934835055597%22%7D&amp;n_type=0&amp;p_from=1', 'title': '印度航空公司曝出“丑闻”，改装数十架战机，全部摔毁飞行员陪葬', 'author_href': 'https://author.baidu.com/home?app_id=1562212876705486&amp;from=homepage_nickname', 'site': '铁血观世界', 'time': '04-29 11:02', 'img': 'recomend/a5c27d1ed21b0ef47d70fb9670013ad283cb3eaf.jpeg'}],
  [{'href': 'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_9659643076639124398%22%7D&amp;n_type=0&amp;p_from=1', 'title': '人口七普数据五月中上旬发布？国家统计局：暂无具体时间', 'author_href': 'https://author.baidu.com/home?app_id=1572595784300706&amp;from=homepage_nickname', 'site': '第一财经', 'time': '04-29 14:11', 'img': 'recomend/1f178a82b9014a9093146741898f521ab21bee20.jpeg'}, {'href': 'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_9606624733241504632%22%7D&amp;n_type=0&amp;p_from=1', 'title': '中国小米向印度捐赠1000个氧气瓶！莫迪总理坦白：供氧遭遇大危机', 'author_href': 'https://author.baidu.com/home?app_id=1665185197315242&amp;from=homepage_nickname', 'site': '博览国际时事', 'time': '04-29 11:00', 'img': 'recomend/b7fd5266d0160924e82452b0bfc25ef2e7cd3461.jpeg'}, {'href': 'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_9785152212967961366%22%7D&amp;n_type=0&amp;p_from=1', 'title': '又一最新中国大学排名公布！郑州大学全国 排名上升30位！', 'author_href': 'https://author.baidu.com/home?app_id=1662101931423162&amp;from=homepage_nickname', 'site': '郑州大学招生办公室', 'time': '04-28 18:44', 'img': 'recomend/63d9f2d3572c11dfd3b0c2bc9fc208d8f603c23e.jpeg'}, {'href': 'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_9179328225176237549%22%7D&amp;n_type=0&amp;p_from=1', 'title': '变天！金球奖战力榜：梅西逆袭到第2，C罗第10，英超巨星第4', 'author_href': 'https://author.baidu.com/home?app_id=1584920756320178&amp;from=homepage_nickname', 'site': '足球慢镜头', 'time': '04-28 08:54', 'img': 'recomend/faf2b2119313b07eda29495acc89fb2b96dd8cb6.jpeg'}, {'href': 'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_9609311428572734276%22%7D&amp;n_type=0&amp;p_from=1', 'title': '西蒙尼自大， 或毁掉一赛季努力！马竞被绝杀，巴萨夺冠概率飙升！', 'author_href': 'https://author.baidu.com/home?app_id=1620176519895395&amp;from=homepage_nickname', 'site': '陌上花开谈体育', 'time': '04-26 09:10', 'img': 'recomend/63d0f703918fa0ec4582767a72583ee63c6ddb53.jpeg'}],
  [{'href': 'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_9707594939125494324%22%7D&amp;n_type=0&amp;p_from=1', 'title': '约翰逊被调查！', 'author_href': 'https://author.baidu.com/home?app_id=1549761396709004&amp;from=homepage_nickname', 'site': '中国青年网', 'time': '04-29 06:43', 'img': 'recomend/8694a4c27d1ed21b6d47772234ffb6cc53da3f80.jpeg'}, {'href': 'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_10315658236932572883%22%7D&amp;n_type=0&amp;p_from=1', 'title': '李菲儿参加活动，被问是否与Angelababy和解，淡定回应...', 'author_href': 'https://author.baidu.com/home?app_id=1672173032502227&amp;from=homepage_nickname', 'site': '麦穗娱乐', 'time': '04-28 17:33', 'img': 'recomend/b03533fa828ba61ec2ab9de23ce1fd02324e5997.jpeg'}, {'href': 'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_10402099431653180587%22%7D&amp;n_type=0&amp;p_from=1', 'title': '正邦科技：一季度公司淘汰35万母猪影响利润近14亿，其中包含...', 'author_href': 'https://author.baidu.com/home?app_id=1565092142508658&amp;from=homepage_nickname', 'site': '每日经济新闻', 'time': '04-29 12:44'}, {'href': 'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_8978391281052158147%22%7D&amp;n_type=0&amp;p_from=1', 'title': '印度疫情失控单日新增超31万！驻印度使馆提示在印中国公民“非...', 'author_href': 'https://author.baidu.com/home?app_id=1588450928285735&amp;from=homepage_nickname', 'site': '中国小康网', 'time': '04-29 11:43', 'img': 'recomend/0df3d7ca7bcb0a46b716354963b59d2c6a60afec.jpeg'}]
]

function itemWithImg(item) {
  return (
    <div className={`${styles.s_news_special} ${styles.s_news_item} ${styles.s_news_special_item_tpl_2} ${styles.s_opacity_blank8} ${styles.clearfix}`}>
      <div className={`${styles.s_pic_content}`}>
        <div className={`${styles.s_pic_content_own}`}>
          <ul className={`${styles.s_news_content_imgs} ${styles.clearfix}`}>
            <li className={`${styles.item_img_wrap} ${styles.c_span4} ${styles.c_span_last}`}>
              <a className={`${styles.c_img} ${styles.c_img_radius_large}`} href={`/post/${1}`} onClick={(e) => {e.preventDefault();const href = e.currentTarget.href;router.push(href); console.log(href)}}target="_blank">
                <img className={styles.s_news_img} src={item['img']}/>
              </a>
              <div className={`${styles.s_img_mask} ${styles.c_img_radius_large}`}></div>
            </li>
          </ul>
        </div>
      </div>
        
      <div className={`${styles.s_block_container} ${styles.c_span8} ${styles.c_span_last}`}>
          <div className={`${styles.s_text_content}`}>
              <a className={`${styles.s_news_item_title} ${styles.c_link} ${styles.c_font_big} ${styles.c_gap_bottom_small}`} href={`/post/${1}`} onClick={(e) => {e.preventDefault();const href = e.currentTarget.href;router.push(href);}} title={item['title']} target="_blank">
                  {item['title']}
              </a>
          </div>
          <div className={`${styles.from} ${styles.c_font_normal}`}>
              <a className={`${styles.c_gap_right}`} href={item['author_href']} target="_blank">
                  <span className={`${styles.src_net} ${styles.c_color_gray}`}>
                      {item['site']}
                  </span>
              </a>
              <span className={`${styles.src_time} ${styles.c_color_gray2} ${styles.c_gap_right}`}>
                  {item['time']}
              </span>
              {/* <div className={`${styles.dustbin}`} data-click="LOG_BTN_DUSTBIN">
                  <i className={`${styles.c_icon}`}></i>
              </div> */}
          </div>
      </div>
    </div>
  )
}

function itemWithoutImg(item) {
  return (
    <div className={`${styles.s_news_special} ${styles.s_news_item} ${styles.s_news_special_item_tpl_2} ${styles.s_opacity_blank8} ${styles.clearfix}`}>
      <div className={`${styles.s_text_content}`}>
          <a className={`${styles.s_news_item_title} ${styles.c_link} ${styles.c_font_big} ${styles.c_gap_bottom_small}`} href={`/post/${1}`} onClick={(e) => {e.preventDefault();const href = e.currentTarget.href;router.push(href);}} title={item['title']} target="_blank">
              {item['title']}
          </a>
      </div>
      <div className={`${styles.from} ${styles.c_font_normal}`}>
          <a className={`${styles.c_gap_right}`} href={item['author_href']} target="_blank">
              <span className={`${styles.src_net} ${styles.c_color_gray}`}>
                  {item['site']}
              </span>
          </a>
          <span className={`${styles.src_time} ${styles.c_color_gray2} ${styles.c_gap_right}`}>
              {item['time']}
          </span>
      </div>
    </div>
  )
}

export default function MenuContainer(){
  return (
      <div class={styles.water_container}>
          {
              itemsLists.map((itemsList, index) => {
                  return (
                      <div className={ styles.s_news_list_wrapper + " " + styles.c_container + " " + styles.c_feed_box } >
                      {
                        itemsList.map((item, index) => {
                          let res = "img" in item? itemWithImg(item) : itemWithoutImg(item)
                          return res
                        })
                      }
                      </div>
                  )
              })
          }
      </div>
  )
}
