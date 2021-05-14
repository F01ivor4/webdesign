// 鼠标移入自动弹出菜单，移出菜单自动消失，移出但移入菜单，菜单保持弹出状态，移出菜单，菜单消失
import React, { Component } from "react";

// type EventFunc = () => {};

// type Props = {
//   menuList: string[];
//   eventList: EventFunc[];
//   btnContent: string;
// };

// type State = {
//   showMenu: boolean;
// };

export default class RightPopBtn extends Component {
    // timeout: number | undefined;

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        };
    }


    btnMouseEnterEvent() {
        this.setState({
            showMenu: true,
        });
    }

    btnMouseLeaveEvent() {
        // 设置延迟
        this.timeout = window.setTimeout(() => {
            this.setState({
                showMenu: false,
            });
        }, 150);
    }

    menuMouseEnterEvent() {
        clearTimeout(this.timeout);
        this.timeout = undefined;
        this.setState({
            showMenu: true,
        });
    }

    menuMouseLeaveEvent() {
        this.setState({
            showMenu: false,
        });
    }

    render() {
        return (
            <div className={this.props.style}>
                <div
                    onMouseEnter={this.btnMouseEnterEvent.bind(this)}
                    onMouseLeave={this.btnMouseLeaveEvent.bind(this)}
                >
                    {this.props.btnContent}
                    {/* { this.state.showMenu? this.props.popupContent:null } */}
                </div>
                <div
                    onMouseEnter={this.menuMouseEnterEvent.bind(this)}
                    onMouseLeave={this.menuMouseLeaveEvent.bind(this)}
                >
                    {this.state.showMenu ? this.props.popupContent : null}
                </div>
            </div>
        )
    }
}
