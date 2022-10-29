import {StatusBar, Text, View} from 'react-native';
import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';
import Header from '../../../components/Header';
import strings from '../../../Localization';
import styles from './styles';
import {PRIMARY_THEME_COLOR, WHITE_COLOR} from '../../../components/utilities/constant';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import InputField from '../../../components/InputField';

const RegistrationView = (props: any) => {
  const insets = useSafeAreaInsets();
  const [gender, setGender] = useState('Male');
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          backgroundColor: WHITE_COLOR,
          height: insets.top,
        }}
      />
      <StatusBar barStyle={'dark-content'} />
      <Header
        headerText={strings.registrationHeader}
        handleOnLeftIconPress={props.handleDrawerPress}
        headerStyle={styles.headerStyle}
        headerTextStyle={styles.headerTextStyle}
      />
      <View style={styles.wrap}>
        <Text style={styles.headingText}>{strings.basicInfoText}</Text>
        <View style={styles.underlineStyle} />
        <View style={styles.inputWrap}>
          <InputField
            placeholderText={'Name'}
            handleInputBtnPress={() => {}}
            onChangeText={() => {}}
            headingText={'Owner Name'}
          />
        </View>
        <View style={styles.inputWrap}>
          <InputField
            placeholderText={'Adhar No.'}
            handleInputBtnPress={() => {}}
            onChangeText={() => {}}
            headingText={'Adhar No.'}
          />
        </View>
        <View style={styles.inputWrap}>
          <InputField
            placeholderText={'Pancard No.'}
            handleInputBtnPress={() => {}}
            onChangeText={() => {}}
            headingText={'Pancard No.'}
          />
        </View>
        {/* <View style={styles.genderView}> */}
        <View style={{width: 50, height: 50}}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color={PRIMARY_THEME_COLOR}
          />
        </View>
        <View>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
            color={PRIMARY_THEME_COLOR}
          />
        </View>
        {/* </View> */}
      </View>
    </View>
  );
};

export default RegistrationView;
