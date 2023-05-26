import React from 'react';
import FoodCard from '../../../Components/FoodCard/FoodCard';

const OrderTab = ({ items }) => {
    return (

        <div className='grid md:grid-cols-3 gap-10'>
            {
                items.map(item => <FoodCard
                    key={item._id}
                    ite
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;