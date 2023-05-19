import dp from '../public/assets/dp.png'
import Image from 'next/image'
import data from '../public/data.json'
import Dishes from '@components/dishes'
import Coupon from '@components/coupon'

export default function Home() {
  return (
    <main>
      <div className='app-bg'>
        <div className='app-profile'>
          <Image src={dp} className='app-dp' alt='nothing'></Image>
          <span>Bharadwaj Centre</span>
          <br/>
          Food Influencer
        </div>
      </div>
      <div className='app-data'>
        <div className='pill'></div>
        <h2>Food Centre</h2>
        <div className='menu'>
          {data.map((ctg)=>{
            return <Dishes ctg={ctg} key={ctg.id}/>
          })}
        </div>
        <h2>Meals Coupon</h2>
        <div className='space'>
          <div className='hori-scroll'>
            <div className="coupon-banner">
              27th JAN - 18th FEB <br/>
              UPTO<br/>25% OFF
            </div>
            {["Chinese", "Indian", "Korean"].map((cty)=>{
              return <Coupon cty={cty}/>
            })}
          </div>
        </div>
        <button className='order'>Order Now</button>
      </div>
    </main>
  )
}
