import { View, Text, Button, Image, TouchableOpacity } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import React from 'react'
import styles from './style'
import images from '../../../../assets/images'
import InputField from '../../../../components/InputField'
import strings from '../../../../components/utilities/Localization'
import { PRIMARY_THEME_COLOR } from '../../../../components/utilities/constant'

const OtpVerificationView = (props: any) => {
    const {otp, setOtp, handleOtpChange} = props
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoView}>
          <Image style={styles.loginBanner} source={images.loginBanner} resizeMode="contain"/>
      </View>

      <View style={styles.DescbottomView}>
        <Text style={styles.headingText}>{strings.otpVerification}</Text>
        <Text style={styles.bottomText}>{strings.codeSent}</Text>
        <View style={styles.spanTouch}>
          <Text style={styles.bottomText}>{strings.your}</Text>
          <TouchableOpacity >
            <Text style={styles.spanText}> {strings.email} </Text>
          </TouchableOpacity>
        </View>
      </View>
      <OTPInputView
        style={styles.otpView}
        pinCount={4}
        code={otp} 
        onCodeChanged={code => handleOtpChange(code)}
        // autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled = {(code => {
            console.log(`Code is ${code}, you are good to go!`)
        })}
        />
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btntouch}>
            <Text style={styles.btnText}>CONFIRM</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
            <Text style={styles.bottomText}>{strings.notRecived}</Text>
            <TouchableOpacity style={styles.spanTouch}>
            <Text style={styles.spanText}> {strings.resend} </Text>
            </TouchableOpacity>
      </View>

    </View>
  )
}

export default OtpVerificationView