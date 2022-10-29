import {View, Text, StatusBar, FlatList} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PropertyListItem from './PropertyListItem';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../../components/Header';
import images from '../../../../assets/images';
import strings from '../../../../components/utilities/Localization';
import ConfirmModal from '../../../../components/Modals/ConfirmModal';
import { PRIMARY_THEME_COLOR_DARK } from '../../../../components/utilities/constant';

const PropertyView = (props: any) => {
  const [isVisible, setIsVisible] = useState(false)
  const insets = useSafeAreaInsets();
const navigation: any = useNavigation()
  const DATA: any = [
    {
      Projectname: 'ABC',
      Location: 'Indore',
      visitor: 123,
      siteVisit: 234,
      closeVisit: 600,
      status: 'confirmatin Pending',
      createddate: '11/10/2022'
    },
    {
      Projectname: 'ABC',
      Location: 'Indore',
      visitor: 123,
      siteVisit: 234,
      closeVisit: 600,
      status: 'Subscribe',
      createddate: '11/10/2022'
    },
    {
      Projectname: 'ABC',
      Location: 'Indore',
      visitor: 123,
      siteVisit: 234,
      closeVisit: 600,
      status: 'Unsubscribe',
      createddate: '11/10/2022'
    },
    {
      Projectname: 'ABC',
      Location: 'Indore',
      visitor: 123,
      siteVisit: 234,
      closeVisit: 600,
      status: 'confirmatin Pending',
      createddate: '11/10/2022'
    },
  ];

  const onPressView = () => {
    navigation.navigate('PropertyDetails')
  }

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
        leftImageSrc={images.menu}
        rightFirstImageScr={images.filter}
        rightSecondImageScr={images.notification}
        headerText={strings.propertyHeader}
        handleOnLeftIconPress={props.handleDrawerPress}
        headerStyle={styles.headerStyle}
        RightFirstIconStyle={styles.RightFirstIconStyle}
      />
      <View style={styles.propertyListView}>
        <FlatList 
          data={DATA}
          renderItem={({item}) => <PropertyListItem items={item} setIsVisible={setIsVisible} onPressView={onPressView} />}
        />
      </View>
      <ConfirmModal Visible={isVisible} setIsVisible={setIsVisible} />
      {/* <FilterModal /> */}
    </View>
  );
};

export default PropertyView;
