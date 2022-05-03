import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "./Table";
const AdminPage=(props)=>{
    const [data,setData]=useState([])
   
    const [filterBy,setFilterBy]=useState('')
    useEffect(()=>{
        axios.get('https://dct-application-form.herokuapp.com/users/application-forms')
        .then((response)=>{
            setData(response.data)
            console.log(response.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    const handleData=(changedData)=>{
        setData(changedData)
    }
    return(
        <div>
            <h1>AdminPage</h1>
            <div>
                <button className="btn btn-outline-primary" onClick={()=>{setFilterBy('Front-End Developer')}}>Front End Developer</button>
                <button className="btn btn-outline-primary"onClick={()=>{setFilterBy('Node.js Developer')}}>Node JS Developer</button>
                <button className="btn btn-outline-primary"onClick={()=>{setFilterBy('MEAN Stack Developer')}}>MEAN Stack Developer</button>
                <button className="btn btn-outline-primary"onClick={()=>{setFilterBy('FULL Stack Developer')}}>FULL Stack Developer</button>
            </div>
            {filterBy&&<Table data={data} filterBy={filterBy} handleData={handleData}/>}
        </div>
    )
}
export default AdminPage