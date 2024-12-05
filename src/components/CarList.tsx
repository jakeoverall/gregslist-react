import { Car } from '../models/Car'
import CarCard from './CarCard'


type displays = "grid" | "masonry"

type props = {
  cars: Car[],
  display?: displays
}

export default function CarList({ cars, display = 'grid' }: props) {

  if (display == 'masonry') {
    return
  }

  return (<div className='row'>
    {
      cars.map(c => {
        return (
          <div className="col-md-4" key={c.id}>
            <CarCard car={c} />
          </div>
        )
      })
    }
  </div>

  )

}