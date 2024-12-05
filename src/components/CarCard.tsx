import { Link } from 'react-router-dom';
import { Car } from '../models/Car';
import '@styles/CarCard.scss'
import { AppState } from '../AppState';
import { observer } from 'mobx-react';

type CarProps = {
  car: Car,
  showCreator?: Boolean
}

export default function CarCard({ car, showCreator }: CarProps) {

  const Creator = () => (showCreator ? <div>
    <img src={car.creator?.picture} height={100} alt={car.creator?.name} />
    <p>{car.creator?.name}</p>
  </div> : <></>)


  const CreatorControls = observer(() => {
    if (AppState.account?.id != car.creatorId) {
      return <></>
    }

    return <div className='d-flex gap-3'>
      <button className='btn' title='Delete Car'><i className="mdi mdi-delete"></i></button>
      <button className='btn btn-outline-secondary' title='edit car'><i className="mdi mdi-pencil"></i></button>
    </div>

  })



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
        <Creator />
        <CreatorControls />
      </div>
    </div>
  )

}