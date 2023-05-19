import Image from 'next/image'

function Dish({dsh}) {
  return (
    <div className='dish-box'>
        <div className='dish-1'>
            <Image className='dish-dp' src={dsh.image} width={80} height={80} alt='nothing'></Image>
        </div>
        <div className='dish-2'>
            <div className='dish-title'>{dsh.title}</div>
            <span className='dot'></span> 10 min
        </div>
        <div className='dish-3'>
            <div className='kcal'>75 kcal</div>
            <span className='plus'>+</span>
        </div>
    </div>
  )
}

export default Dish