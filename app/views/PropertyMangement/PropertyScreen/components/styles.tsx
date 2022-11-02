import {StyleSheet} from 'react-native';
import {normalize, normalizeHeight, normalizeSpacing, normalizeWidth} from '../../../../components/scaleFontSize';
import {
  BLACK_COLOR,
  FONT_FAMILY_EXTRABOLD,
  FONT_FAMILY_SEMIBOLD,
  GRAY_COLOR,
  PRIMARY_THEME_COLOR,
  WHITE_COLOR,
  PRIMARY_THEME_COLOR_DARK,
} from '../../../../components/utilities/constant';

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: PRIMARY_THEME_COLOR,
  },
  RightFirstIconStyle: {
    tintColor: WHITE_COLOR,
  },
  mainContainer: {
    flex: 1,
  },
  propertyListView: {
    flex: 1,
    margin: normalizeSpacing(10),
  },
  IteamView: {
    backgroundColor: WHITE_COLOR,
    marginHorizontal: normalizeSpacing(10),
    borderRadius: 10,
    marginVertical: normalizeSpacing(10),
  },
  Txtview : {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: GRAY_COLOR,
    borderBottomWidth: 1,
    padding: normalizeSpacing(4),
    marginTop: normalizeSpacing(2),
  },
  projectContainer : {
    flex: 2,
    alignItems: 'flex-end',
  },
  projectTxt : {
    fontSize: normalize(15),
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
  nameContainer : {
    flex: 4,
    alignItems: 'flex-start',
  },
  nameTxt : {
    fontSize: normalize(15),
    fontFamily: FONT_FAMILY_EXTRABOLD,
    color: BLACK_COLOR,
    marginHorizontal: normalizeSpacing(10)
  },
  buttonContainer : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: normalizeSpacing(10),
  },
  button : {
    top: 10,
    backgroundColor: WHITE_COLOR,
    width: normalizeWidth(100),
    height: normalizeHeight(25),
    marginLeft: normalizeSpacing(10),
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 10
  },
  Viewbutton : {
    top: 10,
    backgroundColor: PRIMARY_THEME_COLOR,
    borderBottomEndRadius: 10,
    borderTopLeftRadius: 10,
    padding: normalizeSpacing(5)
  },
  arrow : {
    tintColor: WHITE_COLOR,
    width: normalizeWidth(30),
    height: normalizeHeight(30)
  },
  buttonTxt : {
    color: WHITE_COLOR,
    textAlign: 'center'
  },
});

export default styles;
