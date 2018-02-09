import React,{Component} from 'react';
import styles from '../slider.less';

export default class Arrows extends Component{
    constructor(props){
        super(props)
    }
    handleArrowClick(n){
        this.props.turn(n)
    }
    render(){
        return(
            <div className="arrows-warp">
                <span
                className="arrows arrows-left"
                onClick={this.handleArrowClick.bind(this,-1)}
                >&lt;</span>
                <span
                className="arrows arrows-right"
                onClick={this.handleArrowClick.bind(this,1)}
                >&gt;</span>
            </div>
        )
    }
}