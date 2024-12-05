import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import Pop from '../utils/Pop';
import { carsService } from '../services/CarsService';
import { useEffect } from 'react';
import CarCard from '../components/CarCard';
import { AppState } from '../AppState';
import Loader from '../components/Loader';

function CarPage() {

  const { carId } = useParams()

  async function getCar() {
    try {
      await carsService.getCarById(carId as string)
    }
    catch (error) {
      Pop.error("Bad Car Id 🚔");
    }
  }

  useEffect(() => {
    getCar()
  }, [carId])

  if (!AppState.car) {
    return <Loader />
  }


  return (
    <div className="CarPage">
      <CarCard car={AppState.car} />
    </div>
  )

}
export default observer(CarPage)