import React from 'react'


const Card =(props) =>{
    const{name, email,id}=props
    return (
  
<div className="bg-light-green dib br3 pa3 pa3 ma2 grow pw2 shadow-5">
    <img at="robot" src={`https://robohash.org/${id}?200*200`}/>
    <div>
    <h2>{name}</h2>
    <p>{email}</p>
    </div>
</div>

    );
}
export default Card;