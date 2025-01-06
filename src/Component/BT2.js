import React from 'react'

const URL = "https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/iphone_16_pro_max_desert_titan_3552a28ae0.png"

const BT2 = () => {
  return (
    <div>
      <div style={{background:"red", width:"350px", textAlign:"center"}}>
        <img style={{width:"100%"}} src= {URL} alt='san-pham'></img>
      </div>
      <div style={{padding:"10px 5px"}}>
      <h2>iPhone 16 Pro Max 256GB</h2>
        <p>Giảm ngay 1,400,000đ áp dụng đến 06/01 </p>
        <h3>33.590.000 ₫</h3>
      </div>
    </div>
  )
}
export default BT2