import dp from '../public/assets/dp.png'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='app-bg'>
        <div className='app-profile'>
          <Image src={dp} className='app-dp'></Image>
          <span>Bharadwaj Centre</span>
          <br/>
          Food Influencer
        </div>
      </div>
      <div className='app-data'>
        <div className='pill'></div>
      </div>
    </main>
  )
}
