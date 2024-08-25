import React from 'react'

const Form = () => {

    const [formData , setFormData] = React.useState({
        firstName: "", 
        lastName: "", 
        eMail: "",
        message: "",
        isChecked: true
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name] : type=== 'checkbox' ? checked : value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        checkValidation();
    }


    function checkValidation() {

        const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        
        if(formData.firstName==''){
            alert("Invalid Firstname")
        }else if(formData.lastName==''){
            alert("Invalid Lastname")
        }else if(formData.eMail =='' || emailCheck.test(formData.eMail)===false){
            alert("Invalid E-mail")
        }else if(formData.isChecked===false){
            alert("check the box")
        }
        else{
            alert("You successfully submited")
        }
        return false
    }

    console.log(formData)

  return (
    <div className='bg-white h-[550px] mt-14 w-full max-w-xl mx-auto my-auto rounded-xl'>
      <div className='p-8'>
        <h1 className='text-gray-700 text-2xl font-bold mb-6'>Contact Us</h1>

        <div className='grid grid-cols-2 gap-4'>

            <label className=' text-gray-700 text-sm'>First Name *
            <input 
                className='w-full p-2 rounded-md border border-gray-300'
                type="text" 
                onChange={handleChange}
                name='firstName'
                value={formData.firstName}
            />
            </label>

            <label className=' text-gray-700 text-sm'>Last Name *
                <input 
                    className='w-full p-2 rounded-md border border-gray-300'
                    type="text" 
                    onChange={handleChange}
                    name='lastName'
                    value={formData.lastName}
                />
            </label>
            <label className='col-span-2 text-gray-700 text-sm'>Email Address*
                <input className='w-full p-2 rounded-md border border-gray-300'
                    type="email"
                    onChange={handleChange}
                    name='eMail'
                    value={formData.eMail}
                />
            </label>
            <label className='col-span-2 text-gray-700 text-sm'>Message
                <textarea className='w-full p-2 rounded-md border border-gray-300'
                    onChange={handleChange}
                    name='message'
                    value={formData.message}
                />
            </label>
            <label className='col-span-2 text-gray-700 text-sm'>
                <input
                    type="checkbox"
                    onChange={handleChange}
                    name='isChecked'
                    value={formData.isChecked}
                />
            </label>
            
        </div>
        
        <button onClick={handleSubmit} className='h-10 w-full mt-10 bg-emerald-600 text-white rounded-md' >Submit</button>
        
      </div>  
    </div>
  )
}

export default Form
