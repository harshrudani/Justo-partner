import { View, Text } from "react-native";
import React from "react";
import styles from "./Styles";
import {
  BLACK_COLOR,
  YELLOW_COLOR,
} from "../../../../components/utilities/constant";

const LeadManagementItem = (props: any) => {
  console.log("🚀 ~ props", props);
  return (
    <View style={styles.IteamView}>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Visitor Name :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.items.Projectname}</Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Configuration :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.items.Location}</Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Budget :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.items.visitor}</Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Last Interestd :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.items.siteVisit}</Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Source :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.items.closeVisit}</Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Visitor Score :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.items.closeVisit}</Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Status :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text
            style={[
              styles.nameTxt,
              {
                color:
                  props.items.status == "confirmatin Pending"
                    ? BLACK_COLOR
                    : props.items.status == "Subscribe"
                    ? YELLOW_COLOR
                    : "red",
              },
            ]}
          >
            {props.items.status}
          </Text>
        </View>
      </View>
      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={() => props.items.status === 'Subscribe' ? props.setIsVisible(true) : null}
         style={[styles.button, {
          borderColor: props.items.status == 'confirmatin Pending' ? BLACK_COLOR : 
          props.items.status == 'Subscribe' ? 'red' : YELLOW_COLOR
        }]} >
          <Text style={[styles.buttonTxt,{
          color: props.items.status == 'confirmatin Pending' ? BLACK_COLOR : 
          props.items.status == 'Subscribe' ? 'red' : YELLOW_COLOR
          }]}>{
            props.items.status == 'confirmatin Pending' ? strings.active : 
            props.items.status == 'Subscribe' ? strings.unsubscribe : strings.subscribe 
          
          }</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Viewbutton} onPress={() => props.onPressView(props.items)} >
        <Image 
            source={images.forwardArrow}
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default LeadManagementItem;
