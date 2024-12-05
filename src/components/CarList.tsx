import { Car } from '../models/Car'
import CarCard from './CarCard'

type props = {
  cars: Car[]
}

export default function CarList({ cars }: props) {



  return (
    <div className="CarList">
      {cars.map(c => {
        return (
          <div className="col-md-3" key={c.id}>
            <CarCard car={c} />
          </div>
        )
      })}

    </div>
  )

}