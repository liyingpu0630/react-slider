import React, {Component} from 'react';
import Item from './Items/index';
import Dots from './Dots/index';
import Arrows from './Arrows/index';
import styles from './slider.less';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nowLocal: 0
        }
    }

    componentDidMount() {
        // this.goPlay()
    }

    turn(n) {
        let newN = this.state.nowLocal + n;
        if (newN < 0) {
            newN = newN + this.props.items.length;
        }
        if (newN >= this.props.items.length) {
            newN = newN - this.props.items.length;
        }
        this.setState({nowLocal: newN})
    }

    goPlay() {
        setInterval(() => {
            this.turn(1)
        }, 2000)
    }

    render() {
        const {items} = this.props;
        const count = items.length;
        const itemList = items.map((item, index) => <Item key={index} item={item} count={count}/>);
        return (
            <div className={styles.wrapper}>
                <ul className={styles['inner-wrapper']}
                    style={{
                        width: this.props.items.length * 100 + "%",
                        left: -100 * this.state.nowLocal + "%",
                        transitionDuration: this.props.speed + "s",
                    }}
                >
                    {itemList}
                </ul>
                <Dots count={count} nowLocal={this.state.nowLocal} turn={this.turn.bind(this)}/>
                <Arrows turn={this.turn.bind(this)}/>
            </div>
        )
    }
}