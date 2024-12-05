import { useEffect, useState } from "react";
import Pop from '../utils/Pop';
import { carsService } from '../services/CarsService';
import { observer } from 'mobx-react';
import { AppState } from '../AppState';
import CarList from '../components/CarList';
import Loader from '../components/Loader';
import CarForm from '../components/CarForm';
import { Car } from '../models/Car';

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

  function createCar(){
    AppState.car = Car.create()
  }

  return (
    <div className="home-page container">

      {/* <CarForm /> */}

      <button className='btn btn-lg btn-warning my-2' data-bs-toggle="modal" data-bs-target="#carModal" onClick={createCar}>Create Car 🚗</button>

      <div className="row">
        <CarList cars={AppState.cars} />
      </div>





    </div>
  )
}

export default observer(HomePage)