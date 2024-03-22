import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import { motion } from 'framer-motion'

export function ContactPage() {
    const [state, handleSubmit] = useForm("moqgwond");
return (
    <>
    <motion.div className="w-full h-full p-8 grid bg-neutral-800 gap-x-2 gap-y-8 lg:grid-cols-2 md:grid-cols-1"
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: "100%" , transition: {duration: 0.25}}}        
    >
        <div>
            <h1 className="text-center text-4xl text-neutral-400 mb-2 lg:text-7xl lg:text-left sm:text-6xl sm:text-left">Contact <span className="font-bold text-5xl text-green-500 lg:text-8xl sm:text-7xl">Me</span></h1>
            <div className="border-t-2 border-green-500 my-4">
            </div>
            <p className="text-justified text-xl text-neutral-50 lg:text-xl lg:text-left sm:text-xl sm:text-left">You can send me an e-mail on here</p>
            <div className='w-full grid gap-x-4 gap-y-4 lg:grid-cols-1 md:grid-cols-1'>
        <form onSubmit={handleSubmit} className='mt-4'>
            <input
                id="email"
                type="email" 
                name="email"
                placeholder='example@eg.com'
                className='w-full my-2 p-2 bg-neutral-700 rounded-lg text-neutral-50 focus:outline-0 focus:border-b-2 focus:border-b-green-500 transition-width duration-100'
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                placeholder='Your message here...'
                className='w-full h-32 my-2 p-2 bg-neutral-700 rounded-lg text-neutral-50 resize-none focus:outline-0 focus:border-b-2 focus:border-b-green-500 transition-width duration-100'/>
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} className='w-full rounded-lg p-2 border-0 text-neutral-50 bg-green-700 hover:bg-green-600 transition-colors duration-300'
            
            >
                Send
            </button>
            <div className="font-bold text-center mt-4">
                {
                    state.submitting ?
                    (state.succeeded ? 
                    (<p className='text-green-400'>
                        The message was sent successfully
                    </p>) : 
                    (<p className='text-red-500'>
                    Something unexpected happened
                    </p>
                    )
                    )
                    :
                    <p></p>
                }
            </div>
        </form>            
    </div>
        </div>
        <div className='bg-neutral-600 ml-2'>
        </div>
    </motion.div>
    </>
)
}