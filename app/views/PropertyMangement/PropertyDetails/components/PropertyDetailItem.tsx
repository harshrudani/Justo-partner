import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { GRAY_COLOR } from "../../../../components/utilities/constant";
import { normalizeSpacing } from "../../../../components/scaleFontSize";

const PropertyDetailItem = (props: any) => {
  return (
    <View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Status :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.items.status}</Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Project Name :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.items.Projectname}</Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>No. of visitor :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.items.visitor}</Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>No. of site visit :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.items.siteVisit}</Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Close visit :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.items.closeVisit}</Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Location :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.items.Location}</Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Property Type :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.items.propertyType}</Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Start Date :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.items.startDate}</Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>End Date :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.items.EndDate}</Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Lead Assign to :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.items.lead}</Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Configuration :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text
            style={[
              styles.nameTxt,
              {
                borderBottomColor: GRAY_COLOR,
                borderBottomWidth: 1,
                width: '100%',
                marginVertical: normalizeSpacing(5)
              },
            ]}
          >
            {props.items.configuration}
          </Text>
          <Text
            style={[
              styles.nameTxt,
              {
                borderBottomColor: GRAY_COLOR,
                borderBottomWidth: 1,
                width: '100%',
                marginVertical: normalizeSpacing(5)
              },
            ]}
          >{props.items.configuration}</Text>
          <Text style={styles.nameTxt}>{props.items.configuration}</Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Amenity :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text
            style={[
              styles.nameTxt,
              {
                borderBottomColor: GRAY_COLOR,
                borderBottomWidth: 1,
                width: '100%',
                marginVertical: normalizeSpacing(5)
              },
            ]}
          >
            {props.items.amenity}
          </Text>
          <Text
            style={[
              styles.nameTxt,
              {
                borderBottomColor: GRAY_COLOR,
                borderBottomWidth: 1,
                width: '100%',
                marginVertical: normalizeSpacing(5)
              },
            ]}
          >{props.items.amenity}</Text>
          <Text style={styles.nameTxt}>{props.items.amenity}</Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Content :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>Images</Text>
          <View>
            <Image></Image>
          </View>
        </View>
      </View>
      <View style={[styles.Txtview,{borderBottomWidth: 0}]}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Pickup Allowed :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.items.pickup}</Text>
        </View>
      </View>
    </View>
  );
};

export default PropertyDetailItem;
