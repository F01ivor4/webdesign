import { useRouter } from 'next/router'
import getServerSideProps from '../../pages/index'
import React, { useEffect, useState } from "react"
import "../../styles/Article/Article.module.css"

// async function get() {
//     let articles = await fetch(`http://localhost:3000/api/article`)
//     articles = await articles.json()
//     //console.log(articles)
//     return articles
// }
function getLocalTime() {
    var ts = arguments[0] || 0;
    var t, y, m, d, h, i, s;
    t = ts ? new Date(ts * 1000) : new Date();
    y = t.getFullYear();
    m = t.getMonth() + 1;
    d = t.getDate();
    h = t.getHours();
    i = t.getMinutes();
    s = t.getSeconds();
    // 可根据需要在这里定义时间格式
    return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + ' ' + (h < 10 ? '0' + h : h) + ':' + (i < 10 ? '0' + i : i) + ':' + (s < 10 ? '0' + s : s);
}
function ArticleIndex(props) {
    let data = props.data
    if (typeof (data) != 'object')
        return <div>页面正在加载...</div>
    console.log(data)
    //console.log(data1.id)
    return <div className="container1">
        <div class="header">
            <div id="title" class="titleFont">{ data.title}</div>
            <div class="info link" data-href={ data.avatar_url}>
                <img src={ data.author.avatar_img} data-href={ data.avatar_url}/>
                <span data-href={data.avatar_url}>{getLocalTime(data.publishedAt) }</span>
        </div>
        <article>
            {data.contentNode.children.map((item, index) => {
                return item.type == 'p' ? <p class="contentFont">{item.children}</p> : <img border="0" src={ item.attributes.src} data-width="690" data-height="390" data-index="0"/>
            }) }
        </article>
	</div>
    </div>
}
export default function (props) {
    const router = useRouter()
    const { id } = router.query
    let id1 = parseInt(id)
    const [state, setState] = useState({
        list: [],
    });
    
    useEffect(() => {
        fetch("../api/article").then(async (res) => {
          const resp = await res.json();
          setState({
            list: resp,
          });
        });
    }, []);
    //console.log(state.list[id1-1])
    return <ArticleIndex data={state.list[id1]}/>
}