import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import styles from './Styles'
import InputField from '../../../../components/InputField'
import images from '../../../../assets/images'
import Button from '../../../../components/Button'
import strings from '../../../../components/utilities/Localization'
import { PRIMARY_THEME_COLOR_DARK, WHITE_COLOR } from '../../../../components/utilities/constant'
import Header from '../../../../components/Header'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import DropdownInput from '../../../../components/DropDown'

const UpdateFollowup = ({ navigation }: any) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={styles.mainContainer}>
            <View
                style={{
                    backgroundColor: PRIMARY_THEME_COLOR_DARK,
                    height: insets.top,
                }}
            />
            <StatusBar barStyle={"light-content"} />
            <Header
                leftImageSrc={images.backArrow}
                rightSecondImageScr={images.notification}
                headerText={strings.editfollowup}
                handleOnLeftIconPress={() => navigation.goBack()}
                leftImageIconStyle={styles.RightFirstIconStyle}
                headerStyle={styles.headerStyle}
                RightFirstIconStyle={styles.RightFirstIconStyle}
            />
            <View style={styles.editInputView}>
                <View style={styles.inputWarp}>
                    <DropdownInput
                        headingText={strings.status}
                        placeholder={strings.status}
                    // value={props.value}
                    // setValue={props.setValue}
                    />
                </View>
                <View style={styles.inputWarp}>
                    <InputField
                        placeholderText={"Date & Time"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"Date & Time"}
                        rightImgSrc={images.event}
                    />
                </View>
                <View style={styles.inputWarp}>
                    <InputField
                        placeholderText={"Description"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"Description"}
                        multiline={true}
                        inputheight={200}
                    />
                </View>
            </View>
            <View style={styles.editBtnContainer}>
                <Button
                    buttonText={strings.updateFollowup}
                    width={350}
                    bgcolor={PRIMARY_THEME_COLOR_DARK}
                    btnTxtcolor={WHITE_COLOR}
                    btnTxtsize={18}
                    textTransform={"uppercase"}
                />
            </View>
        </View>
    )
}

export default UpdateFollowup