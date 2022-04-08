import React from 'react';

export const PopUpFeedback = ({ data }: any) => 
{
  if (!Object.keys(data).includes('feedback')) {
    return (
      <div style={{ position: 'fixed', top: `50%`, left: `50%`, backgroundColor: 'rgba(164,226,208, .7)', padding: '20px', borderRadius: '10px' }}>
        <p>User doesn't leave feedback</p>
    </div>
    )
  }
  return (
      <div style={{position:'fixed', top:`50%`,     left:`50%`, backgroundColor:'rgba(164,226,208, .7)', padding:'20px', borderRadius:'10px'}}>
        <p>Name: {data.name}</p>
        {Object.keys(data.feedback).length
          ? Object.entries(data.feedback).map(item => <p key={data.name}>{item[0]} :{item[1]} </p>)
          :<p>User doesn't leave feedback</p>}
    </div>
    )
}