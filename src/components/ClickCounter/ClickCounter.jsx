import React from 'react';

export const ClickCounter = ({ count, onButtonClick }) => (
    <>
        <span>{`Number of clicks: ${count}`}</span>
        <button onClick={onButtonClick}>Click Me!</button>
    </>
)