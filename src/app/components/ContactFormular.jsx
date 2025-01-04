
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "@fontsource/keania-one";

function ContactForm() {
  const [state, handleSubmit] = useForm("mldrldzl");
  if (state.succeeded) {
      return <p className='font-keania md:text-2xl m-auto md:r-44 md:mt-48'>Looking forward to work with you!</p>;
  }
  return (
    <form className='w-80 md:w-96 grid gap-4 md:mt-0 lg:m-auto' onSubmit={handleSubmit}>
      <div className='grid'>
        <label htmlFor="text" className='text-start uppercase'>
          Company name
        </label>
        <input
          id="text"
          type="text" 
          name="text"
          className='bg-input border rounded-lg text-white text-xs p-2 '
          placeholder='If the website exist'
        />
        <ValidationError 
          prefix="Text" 
          field="text"
          errors={state.errors}
        />
      </div>

      <div className='grid'>
        <label htmlFor="text" className='text-start uppercase'>
          Full name
        </label>
        <input
          id="text"
          type="text" 
          name="text"
          className='bg-input border rounded-lg  text-white text-xs p-2'
          placeholder='John James'
        />
        <ValidationError 
          prefix="Text" 
          field="text"
          errors={state.errors}
        />
      </div>

      <div className='grid'>
        <label htmlFor="tel" className='text-start uppercase'>
          Contact number
        </label>
        <input
          id="tel"
          type="tel" 
          name="tel"
          className='bg-input border rounded-lg text-white text-xs p-2'
          placeholder='+XX XX XX XX XX'
        />
        <ValidationError 
          prefix="Tel" 
          field="tel"
          errors={state.errors}
        />
      </div>

      <div className='grid'>
        <label htmlFor="email" className='text-start uppercase' >
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className='bg-input border rounded-lg text-white text-xs p-2'
          placeholder='example@example.com'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>

      <div className='grid'>
        <label htmlFor="message" className='text-start uppercase' >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className='bg-input border rounded-lg text-white text-xs p-2'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>

      <div className='flex justify-end'>
        <button type="submit" className=' bg-white font-emoji uppercase border-b-gray border hover:bg-black hover:text-white text-black w-20 rounded-xl mb-4' disabled={state.submitting}>
          SEND
        </button>
      </div>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
