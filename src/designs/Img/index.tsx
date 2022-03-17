import React from 'react';

interface IImg {
    name: string;
    alt?: string;
    width?: string;
    height?: string;
    className?: string
}

const Img: React.FC<IImg> = (props) => {
    const { name, ...rest } = props; 
    return (
        <img 
            src={require(`../../assets/images/${name}`)} 
            alt=""
            {...rest}
        />   
    );
};

export default Img;