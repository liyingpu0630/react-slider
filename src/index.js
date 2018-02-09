import React, {Component} from 'react';
import {render} from 'react-dom';
import Slider from './component/slider';
require('./index.less');
const Images = [
    {
        src: require('./assets/1.jpg'),
        alt: 'img-1'
    },
    {
        src: require('./assets/2.jpg'),
        alt: 'img-2'
    },
    {
        src: require('./assets/3.jpg'),
        alt: 'img-3'
    }
];

render(
    <Slider
        items={Images}
        speed={1.2}
        delay={2}
        pause={true}
        autoplay={true}
        dots={true}
        arrows={true}
    />,
    document.getElementById('app')
);

