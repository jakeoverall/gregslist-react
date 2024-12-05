import { Car } from '../models/Car';
import '@styles/CarCard.scss'

export default function CarCard({ car }: { car: Car }) {

  return (

    <div className="CarCard card">
      <img src={car.imgUrl} alt={car.make} />
      <div className="card-body">
        {car.make} {car.model}
      </div>

    </div>
  )

}