import './new.scss'
import Sidebar from'../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { useState } from 'react';
const New = ({inputs,title}) => {
  const [file,setFile] = useState("");
  return (
    <div className='new'>
      
 <Sidebar/>
 <div className="newContainer">
  <Navbar/>
<div className="top">
  <h1>{title}</h1>
</div>
<div className="bottom">
  <div className="left">
    <img src={file?URL.createObjectURL(file):"https://t4.ftcdn.net/jpg/00/89/55/15/240_F_89551596_LdHAZRwz3i4EM4J0NHNHy2hEUYDfXc0j.jpg"} alt="img" />

  </div>
  <div className="right">
    <form action="">
      <div className="formInput">
      <label htmlFor="file">Img : </label>
        <input type="file" onChange={e=>setFile(e.target.files[0])} id="file"/>
      </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              
     <button>Save</button>
    </form>
  </div>
</div>
 </div>
    </div>
  )
}

export default New
