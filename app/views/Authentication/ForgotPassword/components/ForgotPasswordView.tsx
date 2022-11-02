import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Styles'
import images from '../../../../assets/images'
import InputField from '../../../../components/InputField'
import Button from '../../../../components/Button'
import strings from '../../../../components/utilities/Localization'
import Header from '../../../../components/Header'

const ForgotPasswordView = (props: any) => {
  return (
    <View style={styles.mainContainer}>
        <Header
        headerText={strings.forgotPasswordHeader}
        headerStyle={styles.headerStyle}
        headerTextStyle={styles.headerTextStyle}
        leftImageSrc={images.backArrow}
        // handleOnLeftIconPress={onPressBack}
      />
       <View style={styles.logoView}>
        <Image
          style={styles.loginBanner}
          source={images.loginBanner}
          resizeMode="contain"
        />
      </View>
      <View style={styles.inputView}>
      <View style={styles.inputWrap}>
          <InputField
            placeholderText={"Email Address"}
            rightImgSrc={images.emailIcon}
            isSecureText={false}
          />
        </View>
      </View>
      <View style={styles.btnView}>
        <Button
            buttonText={strings.sendotp}
            handleBtnPress={props.handleOtp}
         />
      </View>
      <View style={styles.bottomView}>
      <Text style={styles.bottomText}>{strings.byCreating}</Text>
        <TouchableOpacity style={styles.spanTouch}>
          <Text style={styles.spanText}> {strings.termsAndCondition} </Text>
        </TouchableOpacity>
        <Text style={styles.bottomText}> {strings.and} </Text>
        <TouchableOpacity style={styles.spanTouch}>
          <Text style={styles.spanText}> {strings.privacyPolicy} </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ForgotPasswordView