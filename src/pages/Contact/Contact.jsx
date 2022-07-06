import React from 'react';

import Row from '../../modules/Row/Row.jsx';
import Column from '../../modules/Column/Column.jsx';

function Contact() {

  return (
    <>

     <main className='contact__main'>

     <img className="contact__bg" src="./contact.png" alt=""></img>


        <Row extraClass="contact__row">
            <Column size={3}  ></Column>
            
            <Column size={6} extraClass="contact__wrapper" >
              <div className='contact__innerWrapper'>

                <h1 className='contact__title'>Contact</h1>
                <p className='contact__paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper netus nam consequat 
                </p>

                <div className="contact__outerNav">
                  <ul className="contact__outerList">     
                      <li className={`contact__outerItem `}>
                        <a className={`contact__outerLink `}  href="https://github.com/etoscano/" aria-label='Github' >
                        <img className="contact__socialIcon" src="./icon-github.svg" alt=""></img>                   
                          </a>
                      </li>            
                      <li className={`contact__outerItem `}>
                        <a className={`contact__outerLink `} href="https://www.linkedin.com/in/eleonora-toscano/" aria-label='LinkedIn' >
                        <img className="contact__socialIcon" src="./icon-linkedin.svg" alt=""></img>                   
                        </a>
                      </li>
                      <li className={`contact__outerItem `}>
                        <a className={`contact__outerLink  `} href="mailto:toscano.eleonora97@gmail.com" aria-label='Email' >
                        <img className="contact__socialIcon" src="./icon-email.svg" alt=""></img> 
                        </a>
                      </li>               
                  </ul>        
                </div>

                <form className='contact__form'>
                  <label className='contact__label' htmlFor="name">Name</label>
                  <input className='contact__input' type="text" id="name" autoComplete='name'></input>

                  <label className='contact__label' htmlFor="email">Email</label>
                  <input className='contact__input' type="text" id="email"  autoComplete='email'></input>

                  <label className='contact__label' htmlFor="message">Message</label>
                  <textarea className='contact__textarea' type="textarea" id="message" rows="6"></textarea>

                  <button className='contact__button' type="submit">Send message
                  <img className="contact__icon" src="./send.svg" alt=""></img>
                  </button>
                </form>

              </div>

            </Column>

            <Column size={3}  ></Column>
          </Row>

     </main>

      </>
  );
};


export default Contact;