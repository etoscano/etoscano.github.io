
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from 'emailjs-com';

function ContactForm({formTitle}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();
    
      const onSubmit = async (data) => {
        const { firstname, surname, email, subject, message } = data;
        try {
          const templateParams = {
            firstname,
            surname,
            email,
            subject,
            message
          };
          await emailjs.send(
            "service_g4dvut8",
            "template_3wt4u0c",
            templateParams,
            "user_tDcGr4CBcRLjFJud7yicI"
          );
          reset();
          toastifySuccess();
        } catch (e) {
          console.log(e);
        }
      };

      const toastifySuccess = () => {
        toast('Messaggio inviato!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,  
          draggable: false,
          className: 'contactForm__success',
          toastId: 'notifyToast'
        });
      };

return <>
    <form className="contactForm__form" aria-labelledby="formTitle"  onSubmit={handleSubmit(onSubmit)} >
    <h2 className='contactForm__formTitle' id='formTitle'>{formTitle}</h2>

    <div className='contactForm__group'>
        <label className='contactForm__label' htmlFor="firstname">Nome</label>
        <input className='contactForm__input' placeholder="Nome" type="text" name="firstname" id="firstname" 
        {...register('firstname', {
        required: { value: true, message: 'Please enter your name' }
        })}></input>
        {errors.firstname && (
        <span className='contactForm__errorMessage'>{errors.firstname.message}</span>
        )}              
    </div>

    <div className='contactForm__group'>
        <label className='contactForm__label' htmlFor="surname">Cognome</label>
        <input className='contactForm__input' placeholder="Cognome" type="text" name="surname" id="surname"
        {...register('surname', {
        required: { value: true, message: 'Please enter your surname' }
        })}></input>    
        {errors.surname && (
        <span className='contactForm__errorMessage'>{errors.surname.message}</span>
        )}                     
    </div>          
    
    <div className='contactForm__group'>
        <label className='contactForm__label' htmlFor="email">Email</label>
        <input className='contactForm__input' placeholder="Cognome" type="email" name="email" id="email"
        {...register('email', {
        required: { value: true, message: 'Please enter your email' }
        })}></input>    
        {errors.email && (
        <span className='contactForm__errorMessage'>{errors.email.message}</span>
        )}                   
    </div>

    <div className='contactForm__group'>
        <label className='contactForm__label' >Oggetto</label>
        <input className='contactForm__input' placeholder="Oggetto" type="text" name="subject" id="subject"
        {...register('subject', {
        required: { value: true, message: 'Please enter a subject' },
        maxLength: {
            value: 75,
            message: 'Subject cannot exceed 75 characters'
        }
        })} ></input>    
        {errors.subject && (
        <span className='contactForm__errorMessage'>{errors.subject.message}</span>
        )} 
    </div>

    <div className='contactForm__group'>
        <label className='contactForm__label' >Messaggio</label>
        <textarea className='contactForm__input' rows="8" placeholder="Messaggio" type="textarea" name="message" id="message"
        {...register('message', {
        required: { value: true, message: 'Please enter a message' },
        })} ></textarea>   
        {errors.message && (
        <span className='contactForm__errorMessage'>{errors.message.message}</span>
        )}           
    </div>

    <button className='contactForm__button' type='submit'>Invia</button>  

    </form>

    <ToastContainer />
    </>
}

export default ContactForm;