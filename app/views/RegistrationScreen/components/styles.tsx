import {StyleSheet} from 'react-native';
import {normalize, normalizeHeight, normalizeSpacing, normalizeWidth} from '../../../components/scaleFontSize';
import {
  BLACK_COLOR,
  FONT_FAMILY_SEMIBOLD,
  GRAY_COLOR,
  PRIMARY_THEME_COLOR,
  WHITE_COLOR,
} from '../../../components/utilities/constant';

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: WHITE_COLOR,
  },
  headerTextStyle: {
    color: BLACK_COLOR,
  },
  mainContainer: {
    flex: 1,
  },
  wrap: {
    flex: 1,
    margin: normalizeSpacing(20),
  },
  headingText: {
    fontSize: normalize(18),
    fontFamily: FONT_FAMILY_SEMIBOLD,
    color: PRIMARY_THEME_COLOR,
  },
  underlineStyle: {
    width: normalizeWidth(60),
    height: normalizeHeight(1),
    backgroundColor: GRAY_COLOR,
    marginTop: normalizeSpacing(5),
  },
  inputWrap: {
    marginTop: normalizeSpacing(30),
  },
});

export default styles;
