import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { normalize, normalizeHeight, normalizeWidth } from "../scaleFontSize";
import {
  FONT_FAMILY_SEMIBOLD,
  PRIMARY_THEME_COLOR,
  WHITE_COLOR,
} from "../utilities/constant";

const Button = (props: any) => {
  const {
    height = 50,
    width = 250,
    bgcolor = PRIMARY_THEME_COLOR,
    border = 50,
    bordercolor = null,
    borderWidth = 0,
    btnTxtcolor = WHITE_COLOR,
    btnTxtsize = 20,
    textTransform = 'capitalize'
  } = props;
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={[
          styles.btnTouch,
          {
            height: normalizeHeight(height),
            width: normalizeWidth(width),
            backgroundColor: bgcolor,
            borderRadius: border,
            borderColor: bordercolor,
            borderWidth: borderWidth,
          },
        ]}
        onPress={props.handleBtnPress}
      >
        <Text
          style={{
            fontSize: normalize(btnTxtsize),
            color: btnTxtcolor,
            fontFamily: FONT_FAMILY_SEMIBOLD,
            textTransform: textTransform
          }}
        >
          {props.buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
