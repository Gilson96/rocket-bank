import { useState } from 'react'
import Button from '../UI/Button'
import Logo from '../UI/logo'
import { useNavigate } from "react-router-dom";
import { setToken, setEmail, setPassword, setCredentials } from '../features/authSlice';
import { useDispatch } from 'react-redux'

const Login = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    // built-in feature that helps
    // retrieving the form values
    const formData = new FormData(e.target)
    const userData = Object.fromEntries(formData.entries()); // {firstName: Gilson}
    
    // console.log(userData)
    // try {
    //   // const log = await login(userData).unwrap()
    //   dispatch(setCredentials({...log}))
    //   console.log(log)
    // } catch (e) {
    //   console.log(e)
    // }

  }

  console.log(isLogin)

  return (
    <section className='flex h-screen justify-center items-center bg-darkBlue'>

      <div className='flex h-full flex-col justify-center items-center gap-7 w-full '>

        <div className='flex flex-col justify-center items-center gap-3'>
          <Logo
            iconStyles={'h-12 w-12 sm:h-20 sm:w-20 md:w-20 md:h-20 md:w-20 md:h-24 md:w-24 '}
            pStyles={'text-white text-2xl sm:text-4xl md:text-4xl'}
            spanStyles={'text-sm sm:text-xl md:text-xl'}
          />
          <h3 className='text-white text-xs italic'>Let's sign you in</h3>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col w-full h-auto gap-3 justify-center items-center '>
          <input
            htmlFor='email'
            name='email'
            type='email'
            placeholder='Email'
            className='flex items w-[70%] py-[4%] px-[5%] rounded-md sm:py-[3%] sm:w-[50%] md:w-[50%] md:py-[3%] lg:py-[2%] lg:w-[30%] lg:px-[2%]'

          />
          <input
            htmlFor='password'
            name='password'
            type='password'
            placeholder='Password'
            className='flex items w-[70%] py-[4%] px-[5%] rounded-md sm:py-[3%] sm:w-[50%] md:w-[50%] md:py-[3%] lg:py-[2%] lg:w-[30%] lg:px-[2%]'

          />

          <Button
            width={'w-[70%] sm:w-[50%] md:w-[50%] lg:w-[30%] lg:py-[1rem]'}
            text={'Login'}
          // features={{
          //   onClick: () => {
          //     navigate("/dashboard");
          //   }
          // }}
          />
        </form>
      </div>
    </section>
  )
}

export default Login