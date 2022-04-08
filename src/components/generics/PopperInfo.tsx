import React from 'react';

const PopperInfo = ({ guest }: any) => 
{
    if(!guest) return null;
    return (
      <div style={{position:'fixed', top:`50%`, left:`50%`, backgroundColor:'rgba(164,226,208, .7)', padding:'20px', borderRadius:'10px'}}>
        <p>Name: {guest.name}</p>
        <p>Eats Pizza: {String(guest.eatsPizza)}</p>
        <p>Vegan: {String(guest.isVegan)}</p>
        <p>Order: {String(guest.order)}</p>
        {
        guest.feedback && (
        <>
        <p>Phone: {String(guest.feedback.phone)}</p>
        <p>Comment: {String(guest.feedback.comment)}</p>
        </>  
        )}
      </div>
    )
}

export default PopperInfo