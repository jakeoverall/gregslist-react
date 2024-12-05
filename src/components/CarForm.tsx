import { observer } from 'mobx-react-lite';
import CarCard from './CarCard';
import { AppState } from '../AppState';
import { Car } from '../models/Car';
import { useState } from 'react';

function CarForm() {
  const [editable, setEditable] = useState<Car>(AppState.car || Car.create())

  async function handleSubmit() {
    event?.preventDefault()



    const form = event?.target as HTMLFormElement

    const car = {
      make: form.make.value,
      model: form.model.value
    }
    console.log(car)
    form.reset()
  }

  function handleChange({ target }: { target: { name: string, value: string } }) {
    console.log(target)
    const { name, value } = target

    setEditable({ ...editable, [name]: value })

    console.log(editable)
  }


  return (
    <form className="CarForm my-5" onSubmit={handleSubmit} key={editable.id}>

      {editable.make} - {editable.model}

      <input className='form-control' type="text" name='make' placeholder='Car Make' defaultValue={editable.make} onChange={handleChange} />

      <input className='form-control' type="text" name='model' placeholder='Car Make' defaultValue={editable.model} />

      <button className='btn btn-outline-secondary my-3' type='submit'>submit</button>


    </form>
  )

}
export default observer(CarForm)