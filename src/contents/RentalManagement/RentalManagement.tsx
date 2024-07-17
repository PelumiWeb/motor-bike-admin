import React from 'react'
import ManagementTable from '../../components/ManagementTable';
import ManagementDetails from './ManagementDetails';

type Props = {}

export default function RentalManagement({}: Props) {
  return <div className="px-8 py-4 h-[90vh]">
    <h1 className='font-polysans font-semibold text-[24px] leading-[30px] text-primaryBlack mb-10'>Rental Management</h1>

    
    {/* <ManagementTable /> */}
    <ManagementDetails />

    </div>;
}