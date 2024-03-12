import React, { useState } from 'react';
import './styles.css';
import styles from './styles.module.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/slices/counterSlice';
import { RootState } from '../../redux/store/store';
const StyledComponent = () => {
    const count = useSelector((state: RootState) => state.counter.counter)
    const dispatch = useDispatch();

    const handleDecrement = () => {
        dispatch(decrement());
    }
    const handleIncrement = () => {
        dispatch(increment());
    }
    return (
        <div style={{
            backgroundColor: 'black',
            padding: '20px',
            borderRadius: '5px',
        }}>
            {/*  INline styling */}
            <h2 style={{ color: "white", fontSize: '18px', fontWeight: 'bold', }}>Styled Component with Inline Styles</h2>
            <p style={{
                color: 'gray',
                fontSize: '18px',
                fontWeight: 'bold',
            }}>This component uses inline styles for styling.</p>

            {/*  CSS File */}
            <div className="container">
                <h2 className="text">Styled Component with CSS File</h2>
                <p className="text">This component uses CSS file for styling.</p>
            </div>
             {/* CSS Modules */}
            <div className={styles.container}>
                <h2 className={styles.text}>Styled Component with CSS Modules</h2>
                <p className={styles.text}>This component uses CSS Module for styling.</p>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>

          {/* Redux Toolkit  */}

          <span className='text'>Counter Functionality Using Redux Toolkit </span>
        <div className='counterDiv'>
        <button className='counterButton' onClick={handleDecrement}> - </button>
        <h6 className='h6'> {count}</h6>
        <button className='counterButton' onClick={handleIncrement}> + </button>
        </div>
        </div>
    );
};

export default StyledComponent;
