import React from 'react';

const TotalPrice = ({ totalPrice }) => {
    return (
        <div>
            <p>Total Price: ${totalPrice().toFixed(2)}</p>
        </div>
    );
};

export default TotalPrice;