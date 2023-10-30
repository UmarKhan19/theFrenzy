import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ProfileArea = () => {
  const [selectedGender, setSelectedGender] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [defaultAddress, setDefaultAddress] = useState('');
  const [birthDate, setBirthDate] = useState(null);

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleDefaultAddressChange = (event) => {
    setDefaultAddress(event.target.value);
  };

  const handleBirthDateChange = (date) => {
    setBirthDate(date);
  };

  return (
    <div className='flex-1 px-5 mb-2'>
      <h3>Profile</h3>
      <div className='border-2 mt-5 px-10 py-10'>
        <p>Email Id</p>
        <input
          type="text"
          placeholder='Enter your Email'
          className={`border-2 rounded-lg mt-3 p-2 text-black w-60 ${isEditing ? 'bg-white' : 'bg-gray-100'}`}
          disabled={!isEditing}
        />
      </div>
      <div className='border-2 px-10 py-10'>
        <h4 className='mb-5'>General Information</h4>
        <div className='border-y-2 py-6'>
          <div>
            <div>
              <h4>First Name<sup>*</sup></h4>
              <input
                type="text"
                placeholder='Enter your First Name'
                className={`border-2 rounded-lg mt-3 p-2 text-black w-full ${isEditing ? 'bg-white' : 'bg-gray-100'}`}
                disabled={!isEditing}
              />
            </div>
            <div>
              <h4 className='mt-3'>Last Name</h4>
              <input
                type="text"
                placeholder='Enter your Last Name'
                className={`border-2 rounded-lg mt-3 p-2 text-black w-full ${isEditing ? 'bg-white' : 'bg-gray-100'}`}
                disabled={!isEditing}
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <h4 className='mt-6'>Date of Birth</h4>
            {isEditing ? (
              <DatePicker
                selected={birthDate}
                onChange={handleBirthDateChange}
                className="border-2 rounded-lg mt-3 p-2 text-black w-full"
              />
            ) : (
              <input
                type="text"
                value={birthDate ? birthDate.toDateString() : ''}
                readOnly
                className={`border-2 rounded-lg mt-3 p-2 text-black w-full ${isEditing ? 'bg-white' : 'bg-gray-100'}`}
                disabled={!isEditing}
              />
            )}
          </div>

          {/* Default Address */}
          <div>
            <h4 className='mt-6'>Default Address</h4>
            <textarea
              rows="4"
              placeholder='Enter your address'
              value={defaultAddress}
              onChange={handleDefaultAddressChange}
              className={`border-2 rounded-lg mt-3 p-2 text-black w-full ${isEditing ? 'bg-white' : 'bg-gray-100'}`}
              disabled={!isEditing}
            />
          </div>

          {/* Mobile Number */}
          <div>
            <h4 className='mt-2'>Mobile Number</h4>
            <input
              type="text"
              placeholder='Enter your mobile number'
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              className={`border-2 rounded-lg mt-3 p-2 text-black w-full ${isEditing ? 'bg-white' : 'bg-gray-100'}`}
              disabled={!isEditing}
            />
          </div>

          {isEditing ? (
            <button className='border-2 px-5 py-2 mt-6 cursor-pointer' onClick={handleSaveClick}>
              Save
            </button>
          ) : (
            <button className='border-2 px-5 py-2 mt-3 cursor-pointer' onClick={handleEditClick}>
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileArea;