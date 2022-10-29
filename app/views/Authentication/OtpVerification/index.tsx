import React, { useState } from 'react'
import OtpVerificationView from './components/OtpVerificationView'

const OtpVerificationScreen = () => {
    const [otp, setOtp] = useState();
    const handleOtpChange = (value: any) => {
        console.log('value', value);
        setOtp(value);
    }
  return (
    <OtpVerificationView otp={otp} setOtp={setOtp} handleOtpChange={handleOtpChange}/>
  )
}

export default OtpVerificationScreen