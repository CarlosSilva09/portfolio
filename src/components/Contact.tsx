import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');
/* Ative o envio do emailJS */
if (name !== '' && email !== '' && message !== '') {
  var templateParams = {
    name: name,
    email: email,
    message: message
  };

  console.log(templateParams);

  emailjs.send('service_dudu', 'template_dudu', templateParams, 'TpM-tCkzaOgwvCvXN').then(
    (response) => {
      console.log('SUCESSO!', response.status, response.text);
    },
    (error) => {
      console.log('FALHA...', error);
    },
  );
  
  setName('');
  setEmail('');
  setMessage('');
}

  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Entre em contato</h1>
            <p>Tem um projeto esperando para ser realizado? Vamos colaborar e fazer acontecer!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
              required
              id="outlined-required"
              label="Seu Nome"
              placeholder="Qual é o seu nome?"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              error={nameError}
              helperText={nameError ? "Por favor, insira seu nome" : ""}
              />
              <TextField
              required
              id="outlined-required"
              label="Email / Telefone"
              placeholder="Como posso te contatar?"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              error={emailError}
              helperText={emailError ? "Por favor, insira seu email ou telefone" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Mensagem"
              placeholder="Envie-me qualquer dúvida ou pergunta"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Por favor, insira a mensagem" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Enviar
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;