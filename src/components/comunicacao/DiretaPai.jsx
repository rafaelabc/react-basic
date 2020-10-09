import React from 'react';
import DiretaFilho from './DiretaFilho';
export default (props) => {
    return (
        <div>
            <DiretaFilho nome="Lucas" idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Thiago" idade={17} nerd={false}></DiretaFilho>
        </div>
    );
};
