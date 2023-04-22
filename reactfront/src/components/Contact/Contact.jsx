import React from 'react'

function Contact() {
  return (
    <div>
      <h2>Contactanos</h2>
      <form action="">
        <label htmlFor="">Nombre de tu bendi</label>
        <input type="text" name="Name" id="" />
        <label htmlFor="">Numero de Telefono</label>
        <input type="number" name="cel" id="" />
        <label htmlFor="">Correo Electronico</label>
        <input type="email" name="Mail" id="" />
        <label htmlFor="">Edad de tu bendi</label>
        <input type="number" name="Age" id="" />
        <label htmlFor="">Foto de tu bendi</label>
        <input type="file" name="Image" id="" />
        <label htmlFor="">Tu consulta</label>
        <input type="text" name="Message" id="" />
        <input type="submit" value="" />
      </form>
    </div>
  )
}

export default Contact