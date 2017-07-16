import React from 'react';
import './counter.css';

export default props => {
    const {
        count,
        action,
        textColor,
        textSize,
        symbolColor,
        symbolSize,
        containerWidth,
        containerHeight
    } = props;

    return (
        <div
            className="count-container"
            style={{ width: containerWidth, height: containerHeight }}
        >
            <div
                className="symbol"
                style={{ width: symbolSize, height: symbolSize }}
                onClick={() => action( count - 1 )}
            >
                <span
                    id="x"
                    style={{ backgroundColor: symbolColor }}
                ></span>
            </div>
            <h2
                style={{
                    fontSize: textSize,
                    color: textColor
                }}
            >{ count }</h2>
            <div
                className="symbol"
                style={{ width: symbolSize, height: symbolSize }}
                onClick={() => action( count + 1 )}
            >
                <span
                    id="x"
                    style={{ backgroundColor: symbolColor }}
                ></span>
                <span
                    id="y"
                    style={{ backgroundColor: symbolColor }}
                ></span>
            </div>
        </div>
    )
}