import { Link } from 'react-router-dom';
import { Car } from '../models/Car';
import '@styles/CarCard.scss'

export default function CarCard({ car }: { car: Car }) {

  return (
    <div className="CarCard card">
      <img src={car.imgUrl} alt={car.make} />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="card-title">
            <Link to={"/cars/" + car.id}>
              {car.make} {car.model}
            </Link>
          </div>
          <div className="price">
            ${car.price}
          </div>
        </div>
      </div>
    </div>
  )

}