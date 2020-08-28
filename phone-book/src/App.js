import React,{useState,useEffect} from 'react';
import './App.css';
import PhoneBookForm from './components/phonebookform';
import InformationTable from './components/informationform'

function App() {
  const [userlist,setUserlist]=useState([])
  const data=(userdata)=>{
    console.log(userdata,"app.js")
   if(userdata.length>0)setUserlist([...userdata])
  }
  useEffect(()=>{

  },[userlist])
  return (
    <section>
      <PhoneBookForm getdata={data}/>
      <InformationTable user={userlist}/>
    </section>
  );
}

export default App;
