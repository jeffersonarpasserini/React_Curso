import React from 'react';
import styles from './CarList.module.css';

const CarList = ({ model, year, color, index }) => {
    const itemClass = index % 2 === 0 ? styles.even : styles.odd;

    return (
        <div className={`${styles.carItem} ${itemClass}`}>
            <p>Modelo: {model}</p>
            <p>Ano: {year}</p>
            <p>Cor: {color}</p>
        </div>
    );
};

export default CarList;
