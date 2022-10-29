import { View, Text, StatusBar, FlatList } from 'react-native'
import React from 'react'
import Header from '../../../components/Header'
import { PRIMARY_THEME_COLOR_DARK } from '../../../components/utilities/constant'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import images from '../../../assets/images'
import strings from '../../../Localization'
import styles from './styles'
import PropertyDetailItem from './PropertyDetailItem'

const PropertyDetailView = (props: any) => {
  const insets = useSafeAreaInsets();
  const DATA: any = 
    {
      Projectname: 'ABC',
      Location: 'Indore',
      visitor: 123,
      siteVisit: 234,
      closeVisit: 600,
      status: 'confirmatin Pending',
      createddate: '11/10/2022'
    };
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          backgroundColor: PRIMARY_THEME_COLOR_DARK,
          height: insets.top,
        }}
      />
      <StatusBar barStyle={'light-content'} />
      <Header
        leftImageSrc={images.backArrow}
        rightSecondImageScr={images.notification}
        headerText={strings.propertyDetailHeader}
        headerStyle={styles.headerStyle}
        RightFirstIconStyle={styles.leftImageIconStyle}
        leftImageIconStyle={styles.leftImageIconStyle}
        handleOnLeftIconPress={props.handleBackPress}
      />
      <View style={styles.propertyListView}>
      <PropertyDetailItem items={DATA} />
      </View>
    </View>
  )
}

export default PropertyDetailView