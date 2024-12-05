import { useEffect, useState } from "react";
import Pop from '../utils/Pop';
import { carsService } from '../services/CarsService';
import { observer } from 'mobx-react';
import { AppState } from '../AppState';
import CarList from '../components/CarList';
import Loader from '../components/Loader';

function HomePage() {

  async function getCars() {
    try {
      await carsService.getCars();
    }
    catch (error) {
      Pop.error(error as Error);
    }
  }

  useEffect(() => {
    getCars()
  }, [])


  if (!AppState.cars.length) {
    return <Loader />
  }

  return (
    <div className="home-page container">
      <div className="row">
        <CarList cars={AppState.cars} />
      </div>
    </div>
  )
}

export default observer(HomePage)