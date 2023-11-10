import React from 'react'
import Overview from '../Overview/Overview'
import MoneyCollection from '../MoneyCollection/MoneyCollection'
import MoneyPending from '../MoneyPending/MoneyPending'
import MajorBusiness from '../MajorBusiness/MajorBusiness'
import LabSummaryDiscount from '../LabSummaryDiscount/LabSummaryDiscount'
import DoctorCommition from '../DoctorCommition/DoctorCommition'
import Discount from '../../Settings/Discount/Discount'
import ReportTAT from '../ReportTAT/ReportTAT'
import KitEfficiency from '../KitEfficiency/KitEfficiency'
const LabSummaryRight = () => {
    return (
        <>
        <section id='id1'>
        <Overview  />
        </section>
        <section id='id2'>
        <MoneyCollection />
        </section>
        <section id='id3'>
        <MoneyPending />
        </section>
        <section id='id4'>
        <DoctorCommition />
        </section>
        <section id='id6'>
        <Discount />
        </section>
        <section id='id5'>
        <MajorBusiness />
        </section>
        <section id='id6'>
        <KitEfficiency />
        </section>
        <section id='id7'>
        <ReportTAT />
        </section>
      
            
           
           
            
           
           
        </>
    )
}

export default LabSummaryRight