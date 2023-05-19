import Dish from "./dish"

function Dishes({ctg}) {
  return (
    <div className="dishes-box">
        <h2>{ctg.title}<span className='tag'>{ctg.tag}</span></h2>
        {ctg.dishes.map((dsh)=>{
            return <Dish dsh={dsh}/>
        })}
    </div>
  )
}

export default Dishes