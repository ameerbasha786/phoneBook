import React,{useState,useEffect} from 'react';

function InformationTable(props) {
    console.log(props.user)
    const [tabledata,setTabledata]=useState(null);
    useEffect(()=>{
      //setTabledata({tabledata:props.userdata})
    },[tabledata]);
    return (
      <table  className='informationTable'>
        <thead> 
          <tr>
            <th className='tableCell'>firstname</th>
            <th className='tableCell'>lastname</th>
            <th className='tableCell'>phone</th>
          </tr>
        </thead> 
        <tbody>
        {props.user[0]?props.user.map((val,ind)=>(
          <tr key={ind}>
          <td>{val.firstname}</td>
          <td>{val.lastname}</td>
          <td>{val.phone}</td>
          </tr>
        )):null}
        </tbody>
      </table>
    );
  }

  export default InformationTable