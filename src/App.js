import React from 'react'
import { Link, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FormPage from './FormPage';
import AdminPage from './AdminPage';

const App = (props) => {

  return (
    <div>
      <Link to="/formPage"> <button className="btn btn-info">User Form </button></Link>
      <Link to="/adminPage"> <button className="btn btn-info" style={{display:'inline-block'}}> Admin Dashboard </button> </Link>

      <Route path="/formPage" component={FormPage} exact={true}/>
      <Route path="/adminPage" component={AdminPage} exact={true}/> 
    </div>

  )
}

export default App