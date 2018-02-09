import React, {Component} from 'react';
import styles from '../slider.less';
export default class Item extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {item, count} = this.props;
        const width = 100 / count + "%";
        return (
            <li className={styles.item} style={{width:width}}>
                <img src={item.src} alt={item.alt}/>
            </li>
        )
    }
}