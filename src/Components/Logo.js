import React from 'react';
import { Link } from 'react-router-dom';

import ds_circle_logo from '../img/ds_circle_logo.png';

const Logo = (props) => {
    const imageSize = { width: props.imageSize ? props.imageSize : '15vw' };

    return (
        <Link to="/">
            <img
                style={imageSize}
                className="logo"
                alt="daily smarty logo"
                src={ds_circle_logo}
            />
        </Link>
    );
};

export default Logo;
