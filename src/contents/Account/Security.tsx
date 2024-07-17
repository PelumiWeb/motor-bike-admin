import React from 'react'
import CustomInput from '../../components/CustomInput'

type Props = {}

function Security({}: Props) {
  return (
    <div className='pt-4'>
      <CustomInput label="Old Password" placeholder="Old Password" input />
      <CustomInput label="New Password" placeholder="New Password" input />
      <CustomInput label="Confirm Password" placeholder="Confirm Password" input />
    </div>
  );
}

export default Security