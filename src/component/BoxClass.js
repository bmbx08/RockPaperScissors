import React, { Component } from 'react'

export default class BoxClass extends Component {
    
    render() {
        return (
            <div className="box">
                <h1>{this.props.title}</h1>
                <img className="item-img" src={this.props.item && this.props.item.img} />
                {/*'props.item&&'는 에러 방지용으로 넣는다.*/}
                <h2 className={`${this.props.result}`}>{this.props.result}</h2>
            </div>
        )
    }
}
