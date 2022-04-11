// import React from 'react';

export const PopUpTable = ({ data }: any) => 
{
    return (
      <div style={{position:'fixed', top:`50%`, left:`50%`, backgroundColor:'rgba(164,226,208, .7)', padding:'20px', borderRadius:'10px'}}>
        <p>Name: {data.name}</p>
        <p>Eats Pizza: {String(data.eatsPizza)}</p>
        <p>Vegan: {String(data.isVegan)}</p>
        {data.order!==0?<p>Guest hasn't paid order yet</p>:<p>Guest has paid order</p>}
      </div>
    )
}