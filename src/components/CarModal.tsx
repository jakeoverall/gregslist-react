import { observer } from 'mobx-react';
import { AppState } from '../AppState';
import CarForm from './CarForm';
import { useEffect } from 'react';

function CarModal() {

  function clearCar() {
    console.log('did it fire?')
    AppState.car = null
  }

  useEffect(() => {
    const modal = document.getElementById('carModal') as HTMLElement
    modal.addEventListener('hidden.bs.modal', clearCar)

    // Handle the unmount
    return () => {
      modal.removeEventListener('hidden.bs.modal', clearCar)
    }
  }, [])



  return (
    <div className="modal fade" id="carModal" tabIndex={-1} aria-labelledby="carModalLabel" >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Car</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {AppState.car ? <CarForm /> : null}
          </div>
        </div>
      </div>
    </div>
  )

}

export default observer(CarModal)