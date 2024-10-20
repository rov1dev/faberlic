import React from 'react'

const Profile = () => {
  return (
    <div className='container '>
        <div className='border-bottom mt-3'>
        <p><i class="fa-solid fa-arrow-left me-3 fs-4"></i> <span className='fs-3'>Shaxsiy ma'lumotlar</span></p>
        <form action="">
            <input className='form-control my-3' type="text" placeholder='Ismingiz' />
            <label className='form-label' htmlFor="">Telefon raqam:</label>
            <input className='form-control' type="text" placeholder='+998 33 702 44 41' />
            <div className=' text-center my-3'>
                <button className='base-btn'>Tahrirlash</button>
            </div>
        </form>
        </div>

    </div>
  )
}

export default Profile