import { useFormik } from 'formik'
import React from 'react'
const EditModal = ({setModal,modal}) => {
    
  
    const formik = useFormik({
      initialValues:{
        Name: "",
        Email:"",
        Number:"",
  
      },
      onSubmit: (values) => 
      {
        
      
  
  
        // console.log(values)
      }
    })

    const modalHandlerExit = () => {
        if(modal == true)
        {

            setModal(false)
        }
    }
    return (
      <div className='flex w-screen h-screen absolute left-0 top-0 bg-slate-900 bg-opacity-70 z-[100] items-center justify-center transition-all duration-1000' onClick={modalHandlerExit}>
          <div className='flex w-[50%] h-[40%] bg-white rounded-lg p10'>
            <form onSubmit={formik.handleSubmit} className='w-full p-5'                 onClick={(e) => e.stopPropagation()}
>
                <div className='flex flex-col w-[90%]'>

                <input className='w-full p-3 m-5 bg-yellow-50 outline outline-rose-500 focus:outline-green-300 rounded-lg'
                id='Name'
                name='Name'
                type={'text'}
                placeholder="Name"
                onChange={formik.handleChange}
                value = {formik.values.Name} 
                ></input>
                <input className='w-full p-3 m-5 bg-yellow-50 outline outline-rose-500 focus:outline-green-300 rounded-lg'
                        id='Email'
                        name='Email'
                        type={'text'}
                        placeholder="Email"
                        onChange={formik.handleChange}
                        value = {formik.values.Email}
                ></input>
                <input className='w-full p-3 m-5 bg-yellow-50 outline outline-rose-500 focus:outline-green-300 rounded-lg'
                        id='Number'
                        name='Number'
                        type={'text'}
                        placeholder="Number"
                        onChange={formik.handleChange}
                        value = {formik.values.Number}
                ></input>

                </div>
                <button className='w-40 p-3 m-5 bg-rose-500 text-white rounded-lg' type='submit' onClick={modalHandlerExit}>Submit</button>
            </form>
  
          </div>
      </div>
    )
  }
  
  export default EditModal
  
  //so import ethers
  //get the provide