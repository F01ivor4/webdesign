import React from "react";
import "../styles/Footer.module.css"

function Footer_ele(prop) {
    return (
        <p className="lh">
            <a className="text_color" href={prop.link} target="_blank">{prop.name}</a>
        </p>
    )
}
export default function Footer() {
    return (
        <footer>
            <Footer_ele name="设为首页" link="//www.baidu.com/cache/setindex/index.html" />
            <Footer_ele name="关于百度" link="//home.baidu.com" />
            <Footer_ele name="About Baidu" link="//ir.baidu.com" />
            <Footer_ele name="百度营销" link="//isite.baidu.com/site/e.baidu.com/d38e8023-2131-4904-adf7-a8d1108f51ef?refer=888" />
            <Footer_ele name="使用百度前必读" link="//home.baidu.com" />
            <Footer_ele name="意见反馈" link="//ir.baidu.com" />
            <Footer_ele name="帮助中心" link="//isite.baidu.com/site/e.baidu.com/d38e8023-2131-4904-adf7-a8d1108f51ef?refer=888" />
            <Footer_ele name="京公网安备11000002000001号" link="//home.baidu.com" />
            <Footer_ele name="京ICP证030173号" link="//ir.baidu.com" />
            <p className="lh">
                <span className="text_color">©2021&nbsp;Baidu&nbsp;</span>
            </p>
            <p className="lh">
                <span className="text_color">(京)-经营性-2017-0020</span>
            </p>

        </footer>
    )
}