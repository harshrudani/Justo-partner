import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import images from '../../../assets/images';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import strings from '../../../Localization';

const LoginView = (props: any) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(true);
  const handlePasswordBtnPress = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoView}>
        <View style={styles.loginBannerView}>
          <Image style={styles.loginBanner} source={images.loginBanner} />
        </View>
        <View style={styles.bannerLogoView}>
          <Image style={styles.logoImage} source={images.logoWhiteBG} />
        </View>
      </View>
      <View style={styles.inputView}>
        <View style={styles.inputWrap}>
          <InputField
            placeholderText={'Email Address'}
            rightImgSrc={props.validEmail ? images.check : images.emailIcon}
            isSecureText={false}
            onChangeText={props.handleEmailChange}
          />
        </View>
        <View style={styles.inputWrap}>
          <InputField
            placeholderText={'Password'}
            rightImgSrc={
              isVisiblePassword ? images.showPassword : images.hiddenPassword
            }
            handleInputBtnPress={handlePasswordBtnPress}
            isSecureText={isVisiblePassword}
            onChangeText={props.handlePasswordChange}
          />
        </View>
        <TouchableOpacity style={styles.forgotTouch}>
          <Text style={styles.forgotText}>{strings.forgotPassword}</Text>
        </TouchableOpacity>
        <Button
          buttonText={strings.signInText}
          handleBtnPress={props.handleLoginPress}
        />
        {/* <View style={styles.dontHaveView}>
          <Text style={styles.dontText}>{strings.dontHaveAnAcc}</Text>
          <TouchableOpacity style={styles.registerTouch}>
            <Text style={styles.registerText}>{strings.registerNow}</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.dontHaveView}>
          <Text style={styles.dontText}>{strings.newUserText}</Text>
          <TouchableOpacity
            style={styles.registerTouch}
            onPress={props.handleSingupPress}>
            <Text style={styles.registerText}>{strings.signUp}</Text>
          </TouchableOpacity>
        </View>
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
  );
};

export default LoginView;
