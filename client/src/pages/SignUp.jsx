import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
        <Link to="/" className='text-sm sm:text-xl font-bold dark:text-white' text-4xl>
        <span className='px-2-py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 rounded-lg text-white'>HongAnh's</span>
        Blog
      </Link>
      <p className='text-sm mt-5'>
      This is a demo project. You can sign in with your email and password or with Google.
      </p>
        </div>

         {/* right */}
         <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='your username' />
              <TextInput
              type='text'
              placeholder='Username'
              id='username' />
            </div>
            <div>
              <Label value='your email' />
              <TextInput
              type='text'
              placeholder='name@company.com'
              id='email' />
            </div>
            <div>
              <Label value='your password' />
              <TextInput
              type='text'
              placeholder='Password'
              id='password' />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
               Sign Up
              </Button>
          </form>
          <div className='flex gap-2 tẽxt-sm mt-5'>
            <span>Already have an account?</span>
            <Link to="/sign-in" className='text-blue-500'>
            Sign In</Link>
          </div>
        </div>
    
      </div>
    </div>
  )
}
