import React, {  useState } from 'react'
import { IMaskInput } from "react-imask";
import emailjs from '@emailjs/browser'


function Contato(){

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  

  function sendEmail(e){
    e.preventDefault()
    if (name ===""||email===""||phone===""||message===""){
      alert("preencha todos os campos")
      return
    }

    const templateParms={
      from_name: name,
      email: email,
      phone: phone,
      message: message
    }
    
    emailjs.send('service_xou0u4w','template_b19dyps', templateParms, 'RcwgIC6TbfcbzFi3S')
    .then((response) =>{
      console.log("EMAIL ENVIADO", response.status, response.text)
      setName('')
      setPhone('')
      setEmail('')
      setMessage('')
    },(err)=>{
      console.log("ERRO: ", err)
    })
  }

  return (
    <div className="app-container">
       <h1 className="title">Contato</h1>
       <form className="form" onSubmit= {sendEmail}>
        <label>Nome</label>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
         


        />

        <label>telefone</label>
        <IMaskInput
        className='input'
       mask="(00)00000-0000"
      placeholder="Digite o seu telefone"
      onChange={(e) => setPhone(e.target.value)}
      value={phone} />
        <label htmlFor="email">E-mail</label>
        <input 
          className="input"
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
          <label>Mensagem</label>
        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
  
  )   
}
export default Contato;