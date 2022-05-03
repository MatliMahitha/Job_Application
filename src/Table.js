import axios from "axios";
import React from "react";
const Table=(props)=>{
    const {data,filterBy,handleData}=props
    
    const alertMe=(obj)=>{
        alert(`
            ${obj.name} Profile
            Contact Number : ${obj.phone}
            Email : ${obj.email}
            Skills : ${obj.skills}
            Experience : ${obj.experience}
        `)
    }
    const ShortlistOrReject=(id,status)=>{
        axios.put(`https://dct-application-form.herokuapp.com/users/application-form/update/${id}`,{status})
        .then(response=>{
            //console.log('status',response.data)
           const id=(response.data._id);
           const result=data.map(obj=>{
               if(obj._id===id){
                   return response.data
               }
               else{
                   return obj
               }
           })
           handleData(result)
        })
    }
  
    return(
        <div>
            
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th><th>Technical Skills</th><th>Experience</th><th>Applied Date</th><th>View Details</th><th>Update Application Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.filter(ele=>{
                            return ele.jobTitle===filterBy
                        }).map(obj=>{
                            return(
                                <tr key={obj._id}>
                                    <td>{obj.name}</td>
                                    <td>{obj.skills}</td>
                                    <td>{obj.experience}</td>
                                    <td>{obj.createdAt.slice(0,10)}</td>
                                    <td><button className="btn btn-info" onClick={()=>{alertMe(obj)}}>View Details</button></td>
                                    <td>
                                        {obj.status==='applied'&&<div><button className="btn btn-success" onClick={()=>{ShortlistOrReject(obj._id,'shortlisted')}}>Shortlist</button><button className="btn btn-danger"  onClick={()=>{ShortlistOrReject(obj._id,'rejected')}}>Reject</button></div>}
                                        {obj.status==='shortlisted'&&<button className="btn btn-success">Shortlisted</button>}
                                        {obj.status==='rejected'&&<button className="btn btn-danger">Rejected</button>}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Table