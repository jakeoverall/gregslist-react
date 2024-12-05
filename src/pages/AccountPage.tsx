import { observer } from "mobx-react";
import { AppState } from "../AppState.js";
import CarForm from '../components/CarForm.js';

function AccountPage() {

  const userInfo = AppState.account || AppState.identity

  if (!userInfo) {
    return <h1>loading...</h1>
  }


  return (
    <div className="account-page">
      <div className="card">
        <div className="card-body p-5 text-center">
          <img src={userInfo.picture}
            alt={userInfo.name}
            className="rounded-circle" height="200" />
          <p className="display-6 my-2">{userInfo.name}</p>
          <kbd>
            {userInfo.email}
          </kbd>
        </div>
      </div>

    <div className="container">
      <h2 className='my-2 mb-0'>Add a new Car Listing</h2>
      <CarForm />
    </div>


    </div>
  )
}

export default observer(AccountPage)