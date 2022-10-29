import {Dimensions, StyleSheet} from 'react-native';
import {
  normalize,
  normalizeHeight,
  normalizeSpacing,
  normalizeWidth,
} from '../../../../components/scaleFontSize';
import {
  FONT_FAMILY_SEMIBOLD,
  PRIMARY_THEME_COLOR,
} from '../../../../components/utilities/constant';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  logoView: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  loginBannerView: {
    height: '100%',
    width: '100%',
    // borderBottomLeftRadius: width,
    // borderBottomRightRadius: width,
    // // borderRadius: width,
    // width: width * 2,
    // height: width * 2,
    // marginLeft: -(width / 2),
    // position: 'absolute',
    // bottom: 0,
    // overflow: 'hidden',
  },
  bannerLogoView: {
    position: 'absolute',
    right: '50%',
    top: '40%',
    bottom: '50%',
  },
  loginBanner: {
    // width: '100%',
    // height: '100%',
    borderBottomLeftRadius: width,
    borderBottomRightRadius: width,
    // borderRadius: width,
    width: width * 2,
    height: width * 2,
    marginLeft: -(width / 2),
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
  },
  logoImage: {
    height: normalizeHeight(150),
    width: normalizeWidth(200),
  },
  inputView: {
    flex: 3,
  },
  inputWrap: {
    marginVertical: normalizeSpacing(10),
    marginHorizontal: normalizeSpacing(20),
  },
  forgotTouch: {
    alignItems: 'flex-end',
    marginHorizontal: normalizeSpacing(20),
  },
  forgotText: {
    fontSize: normalize(15),
    fontWeight: '600',
    color: PRIMARY_THEME_COLOR,
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
  bottomView: {
    flex: 2,
    alignContent: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: normalizeSpacing(40),
    marginHorizontal: normalizeSpacing(30),
  },
  dontHaveView: {
    flexDirection: 'row',
    marginHorizontal: normalizeSpacing(20),
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: normalizeSpacing(20),
  },
  dontText: {
    fontSize: normalize(15),
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
  registerTouch: {
    paddingHorizontal: normalizeSpacing(3),
  },
  registerText: {
    fontSize: normalize(15),
    color: PRIMARY_THEME_COLOR,
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
  bottomText: {
    textAlign: 'center',
    fontSize: normalize(14),
    lineHeight: normalizeHeight(25),
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
  spanTouch: {
    // backgroundColor: 'red',
  },
  spanText: {
    textAlign: 'center',
    fontSize: normalize(14),
    lineHeight: normalizeHeight(25),
    color: PRIMARY_THEME_COLOR,
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
});

export default styles;