import React, {Component} from 'react';
import styles from '../slider.less'

require('../slider.less');

export default class Dots extends Component {
    constructor(props) {
        super(props)
    }

    handleDotClick(i, nowLocal, turn) {
        let option = i - this.props.nowLocal;
        this.props.turn(option)
    }


    render() {
        const {count, nowLocal, turn} = this.props;
        let dotNodes = [];

        for (let i = 0; i < count; i++) {
            dotNodes[i] = (
                <span
                    key={i}
                    className={i === nowLocal ? (styles["dot-selected"] + " " + styles["dot"] ) : styles["dot"]}
                    onClick={this.handleDotClick.bind(this, i)}
                />
            )
        }
        return (
            <div className={styles["dots-wrap"]}>
                {dotNodes}
            </div>
        )
    }

}