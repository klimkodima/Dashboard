import React from 'react';

import { formatMoney } from '../../../utils/formatMoney';
import { Currency } from '../../../types';

const PopperInfo = ({ guest }: any) => {
  if (!guest) return null;
  return (
    <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '10px' }}>
      <p>Name: {guest.name}</p>
      <p>Eats Pizza: {String(guest.eatsPizza)}</p>
      <p>Vegan: {String(guest.isVegan)}</p>
      {guest.feedback ?
        <>
          <p>Phone: {String(guest.feedback.phone)}</p>
          <p>Comment: {String(guest.feedback.comment)}</p>
        </>
        :
        <p>User don't have feedback yet</p>
      }
      {guest.paidOrder ?
        <p>User paid: {`${formatMoney(guest.paidOrder)} ${Currency.BYN}`}</p>
        :
        <p>User have not paid yet</p>
      }
    </div>
  );
};

export default PopperInfo;