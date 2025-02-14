import { observer } from 'mobx-react';
import { AppState } from '../AppState.js';
import { Car } from '../models/Car.ts';
import { carsService } from '../services/CarsService.ts';
import { BindEditable } from '../utils/FormHandler.ts';
import { logger } from '../utils/Logger.ts';
import Pop from '../utils/Pop.ts';
function CarForm() {

  const editable = { ...AppState.car || Car.create() }
  const handleChange = BindEditable(editable)

  async function handleSubmit() {
    try {
      //@ts-ignore
      event.preventDefault()
      logger.log({ editable })
      editable.id
        ? await carsService.editCar(editable, editable.id)
        : await carsService.createCar(editable)
    }
    catch (error) {
      Pop.error(error as Error);
    }
  }

  return (

    <form onSubmit={handleSubmit} key={editable.id}>
      <div className="modal-body">
        <div className="mb-3">
          <label htmlFor="make" className="form-label">make</label>
          <input required type="text" defaultValue={editable.make} className="form-control" id="make" placeholder="make..." name="make" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="model" className="form-label">model</label>
          <input required type="text" defaultValue={editable.model} className="form-control" id="model" placeholder="model..." name="model" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="year" className="form-label">year</label>
          <input required type="number" defaultValue={editable.year} className="form-control" id="year" placeholder="year..." name="year" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">img</label>
          <input required type="text" defaultValue={editable.imgUrl} className="form-control" id="img" placeholder="img..." name="imgUrl" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">price</label>
          <input required type="number" defaultValue={editable.price} className="form-control" id="price" placeholder="price..." name="price" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">description</label>
          <textarea name="description" className="form-control" id="description" rows={3} defaultValue={editable.description} onChange={handleChange}></textarea>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
      </div>
    </form>
  )

}



export default observer(CarForm)