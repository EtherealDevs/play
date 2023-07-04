import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadImage = () => {
    const [image, setImage] = useState({ preview: '', data: '' })
    const [status, setStatus] = useState('')
    const [msg, setMsg] = useState('')
    const navigate = useNavigate()
    
    
    const handleSubmit = async (e) => {
      e.preventDefault()
      let formData = new FormData()
      formData.append('file', image.data)
      const response = await axios.post('http://localhost:8000/images/upload', formData, {
        headers:{
          'Content-Type': 'multiplart/form-data'
        }
      })
        .then((response) =>{
        console.log(response)
        setStatus(response.statusText)
        counterToRedirect()
      }, (error) => {
        console.log(error)
      })
    }
  
    const handleFileChange = (e) => {
      const img = {
        preview: URL.createObjectURL(e.target.files[0]),
        data: e.target.files[0],
      }
      setImage(img)
    }
    const counterToRedirect = () =>{
      let count = 3
      setMsg(`Redirecting in [${count}] seconds...`)
      var interval = setInterval(() => {
        console.log(count)
          count = count - 1
          setMsg(`Redirecting in ${count} seconds...`)
        if (count <= 0){
          clearInterval(interval)
          navigate("/image")
        }
      }, 1000);
      }
    
      return (
          <div className='App'>
              <h1>Upload to server</h1>
                {image.preview && <img src={image.preview} width='100' height='100' />}
                <hr></hr>
                <form onSubmit={handleSubmit}>
                  <input type='file' name='file' onChange={handleFileChange}></input>
                  <button type='submit'>Submit</button>
                </form>
                {status &&<h4>{status}</h4>}
                {msg && <h4>{msg}</h4>}
              </div>
          
      )
}

export default UploadImage