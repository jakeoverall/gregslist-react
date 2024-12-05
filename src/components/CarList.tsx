import { Car } from '../models/Car'

type props = {
  cars: Car[]
}

export default function CarList({ cars }: props) {



  return (
    <div className="CarList">
      {cars.map(c => <div>{c.make}</div>)}

    </div>
  )

}