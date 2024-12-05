import { useEffect, useState } from "react";
import Pop from '../utils/Pop';
import { carsService } from '../services/CarsService';
import { observer } from 'mobx-react';
import { AppState } from '../AppState';
import CarList from '../components/CarList';

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



  return (
    <div className="home-page">
      <CarList cars={AppState.cars} />
    </div>
  )
}

export default observer(HomePage)