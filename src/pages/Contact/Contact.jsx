import React from 'react';

import Row from '../../modules/Row/Row.jsx';
import Column from '../../modules/Column/Column.jsx';

import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from 'emailjs-com';

function Contact() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, message } = data;
    try {
      const templateParams = {
        name,
        email,
        message
      };
      await emailjs.send(
        "service_74wptlo",
        "template_svgegx7",
        templateParams,
        "5L4rD9qq2EmHbhuf9"
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  const toastifySuccess = () => {
    toast('Message sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,  
      draggable: false,
      className: 'contact__success',
      toastId: 'notifyToast'
    });
  };

  return (
    <>

     <main className='contact__main'>

     <div className="contact__bg" style={{ backgroundImage: "url(/contact.png)" }} alt="">


        <Row extraClass="contact__row">
            <Column size={3}  ></Column>
            
            <Column size={6} extraClass="contact__wrapper" >
              <div className='contact__innerWrapper'>
                <div className='contact__titleWrapper'>
                  <h1 className='contact__title'>Contact</h1>

                  <div className="contact__outerNav">
                    <ul className="contact__outerList">     
                        <li className={`contact__outerItem `}>
                          <a className={`contact__outerLink `}  href="https://github.com/etoscano/" aria-label='Github' >
                          <img className="contact__socialIcon" src="/icon-github.svg" alt=""></img>                   
                            </a>
                        </li>            
                        <li className={`contact__outerItem `}>
                          <a className={`contact__outerLink `} href="https://www.linkedin.com/in/eleonora-toscano/" aria-label='LinkedIn' >
                          <img className="contact__socialIcon" src="/icon-linkedin.svg" alt=""></img>                   
                          </a>
                        </li>
                        <li className={`contact__outerItem `}>
                          <a className={`contact__outerLink  `} href="mailto:toscano.eleonora97@gmail.com" aria-label='Email' >
                          <img className="contact__socialIcon" src="/icon-email.svg" alt=""></img> 
                          </a>
                        </li>               
                    </ul>        
                  </div>
               </div>

                <p className='contact__paragraph'>
                If you are interest in my work and you'd like to discuss future collaborations, feel free to <b>leave me a message</b>.
                </p>



                <form className='contact__form' onSubmit={handleSubmit(onSubmit)}>
                  <label className='contact__label' htmlFor="name">Name</label>
                  <input className='contact__input' type="text" id="name" autoComplete='name'     
                  {...register('name', {
                  required: { value: true, message: 'Please enter your name' }
                  })}></input>
                  {errors.name && (
                  <span className='contactForm__errorMessage'>{errors.name.message}</span>
                  )}  

                  <label className='contact__label' htmlFor="email">Email</label>
                  <input className='contact__input' type="text" id="email"  autoComplete='email'
                  {...register('email', {
                    required: { value: true, message: 'Please enter your email' }
                    })}></input>    
                    {errors.email && (
                    <span className='contactForm__errorMessage'>{errors.email.message}</span>
                    )}  

                  <label className='contact__label' htmlFor="message">Message</label>
                  <textarea className='contact__textarea' type="textarea" id="message" rows="6"        
                  {...register('message', {
                  required: { value: true, message: 'Please enter a message' },
                  })} ></textarea>   
                  {errors.message && (
                  <span className='contactForm__errorMessage'>{errors.message.message}</span>
                  )} 

                  <button className='contact__button' type="submit">Send message
                  <img className="contact__icon" src="/send.svg" alt=""></img>
                  </button>
                </form>

                <ToastContainer />

              </div>

            </Column>

            <Column size={3}  ></Column>
          </Row>
        </div>
     </main>

      </>
  );
};


export default Contact;