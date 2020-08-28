import React,{useState,useEffect} from 'react';

const PhoneBookForm=(props)=> {
    const [firstname,setFirstname]=useState("");
    const [Lastname,setLastname]=useState("");
    const [phone,setPhone]=useState('');
    const [userdata,setUser]=useState([])
  
const handelchange=(e)=>{
    e.target.value?setFirstname(e.target.value):setFirstname("")
  }
  const handelchange1=(e)=>{

    e.target.value?setLastname(e.target.value):setLastname("")
  }
  const handelchange2=(e)=>{

    e.target.value?setPhone(e.target.value):setPhone("")
  }

  const handelsubmit=(e)=>{
    e.preventDefault();

    if(firstname.length>0 && Lastname.length>0 && phone.length>0){
      const data=[...userdata];
      data.push({firstname:firstname,lastname:Lastname,phone:phone})
      setUser(data)
    props.getdata(data)
    setFirstname('');
    setLastname('');
    setPhone('')
    }
  }
  return (
    <form onSubmit={e=>e.preventDefault()} className="container">
      <label>First name:</label>
      <br />
      <input 
        className='userFirstname'
        name='userFirstname' 
        type='text'
        value={firstname}
        onChange={handelchange}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        className='userLastname'
        name='userLastname' 
        type='text' 
        value={Lastname}
        onChange={handelchange1}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input 
        className='userPhone' 
        name='userPhone' 
        type='text'
        value={phone}
        onChange={handelchange2}
      />
      <br/>
      <input  
        className='submitButton'
        type='submit' 
        value='Add User'
        onClick={handelsubmit} 
      />
    </form>
  )
}

export default PhoneBookForm