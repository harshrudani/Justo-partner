import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Styles'
import images from '../../../../assets/images'
import { BLACK_COLOR, YELLOW_COLOR } from '../../../../components/utilities/constant'
import strings from '../../../../components/utilities/Localization'

const FollowUpItem = (props: any) => {
  return (
    <View style={styles.IteamView}>
    <View style={styles.Txtview}>
      <View style={styles.projectContainer}>
        <Text style={styles.projectTxt}>Visitor Score :</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>{props.items.Projectname}</Text>
      </View>
    </View>
    <View style={styles.Txtview}>
      <View style={styles.projectContainer}>
        <Text style={styles.projectTxt}>Follow-up Date :</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>{props.items.Location}</Text>
      </View>
    </View>
    <View style={styles.Txtview}>
      <View style={styles.projectContainer}>
        <Text style={styles.projectTxt}>Customer Name :</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>{props.items.visitor}</Text>
      </View>
    </View>
    <View style={styles.Txtview}>
      <View style={styles.projectContainer}>
        <Text style={styles.projectTxt}>Configuration :</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>{props.items.siteVisit}</Text>
      </View>
    </View>
    <View style={styles.Txtview}>
      <View style={styles.projectContainer}>
        <Text style={styles.projectTxt}>Budget :</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>{props.items.closeVisit}</Text>
      </View>
    </View>
    <View style={styles.Txtview}>
      <View style={styles.projectContainer}>
        <Text style={styles.projectTxt}>Follow-Up Type :</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>{props.items.closeVisit}</Text>
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.onPressEdit()}
      >
        <Text style={styles.buttonTxt}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button} >
        <Text style={styles.buttonTxt}>{strings.allfollowup}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Viewbutton} onPress={() => props.onPressView(props.items)}>
        <Image
          source={images.forwardArrow}
          style={styles.arrow}
        />
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default FollowUpItem