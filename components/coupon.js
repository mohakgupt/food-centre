function Coupon({cty}) {
  return (
    <div className="cpn-box">
        <div>{cty}</div>
        <div className="cpn-price">₹299/-</div>
        <div className="cpn-dst">22% + 30% off - Expires in 1h</div>
    </div>
  )
}

export default Coupon