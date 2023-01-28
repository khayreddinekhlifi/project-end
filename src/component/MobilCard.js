import React, { useState } from "react";
export default function MobilCard({ mobil }) {
  const [counter, setcounter] = useState(0);
  
  return (
  <div className="mobil-liste">
    <div className="liste">
      <img src={mobil.image} alt=""/>
      <h1>{mobil.type}</h1>
      <h1>{mobil.prix}</h1>
      <div class="handle-counter" id="handleCounter">
  <button class="counter-minus" onClick={()=>{
    if(counter>0){
      setcounter(counter-1)

    }
  }}>-</button>
  <input type="text" value={counter} />
  <button class="counter-plus" onClick={()=>setcounter(counter+1)}>+</button>
</div>

     <button  className="promo-btn" >PROMO</button>
    </div> 
    </div>
  );
}
