import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {LC , NC , UC , SC} from './data/passChar'

function App() {

  let[uppercase,setUppercase]=useState(false);
  let[lowercase,setLowercase]=useState(false);
  let[number,setNumber]=useState(false);
  let[symbols,setSymbols]=useState(false);
  let[passwordlen,setPasswordLen]=useState(10);
  let[fpass,setPass]=useState('');

  let createPassword=()=>{
    let charset='';
    let finalPass='';
    if(uppercase || number || lowercase || symbols){
      if(uppercase) charset+=UC
      if(lowercase) charset+=LC
      if(number) charset+=NC
      if(symbols) charset+=SC
      for(let i=0;i<passwordlen;i++){
        finalPass+=charset.charAt(Math.floor(Math.random()*charset.length))
      }
      setPass(finalPass);
    }
    else{
      alert("Please select atleast one option");
    }
  }

  let copyPass=()=>{
    navigator.clipboard.writeText(fpass);
  }
  

  return (
    
    <>
    <div className="passwordBox">
      <h2>Password Generator</h2>
      <div className='passwordBoxin'>
        <input type="text" readOnly value={fpass} />
        <button onClick={copyPass} >Copy</button>
      </div>

      <div className="passwordLength">
        <label htmlFor="">Password Length</label>
        <input type="number" max={20} min={10} value={passwordlen} onChange={(event)=> setPasswordLen(event.target.value)} />
      </div>

      <div className="passwordLength">
        <label htmlFor="">Include Upper Case</label>
        <input type="checkbox" checked={uppercase} onChange={()=> setUppercase(!uppercase)} />
      </div>

      <div className="passwordLength">
        <label htmlFor="">Include Lower Case</label>
        <input type="checkbox" checked={lowercase} onChange={()=> setLowercase(!lowercase)} />
      </div>

      <div className="passwordLength">
        <label htmlFor="">Include Number Case</label>
        <input type="checkbox" checked={number} onChange={()=> setNumber(!number)} />
      </div>

      <div className="passwordLength">
        <label htmlFor="">Include Symbol</label>
        <input type="checkbox" checked={symbols} onChange={()=> setSymbols(!symbols)} />
      </div>

      <button className='btn' onClick={createPassword}>Generate Password</button>



    </div>
    
    </>


  );
}

export default App;
