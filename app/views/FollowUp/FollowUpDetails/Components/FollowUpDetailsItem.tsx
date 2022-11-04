import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './Styles'
import strings from '../../../../components/utilities/Localization'

const FollowUpDetailsItem = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.topDetailsView}>
                <View style={styles.topTxtView}>
                    <Text style={styles.topTxt}>Visitor Score </Text>
                    <Text style={styles.topTxt}>250</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Property Name :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>Property Name</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Last Interacted :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>Last Interacted</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Source :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>Source</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Status :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>status</Text>
                </View>
            </View>
            {/* Property Required */}
            <>
                <View style={styles.headdingView}>
                    <Text style={styles.headdingTxt}>{strings.propertyrequired}</Text>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Configuration :</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>Configuration</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Area (in sq.ft) :</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>Area</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Budget :</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>Budget</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Nature Of Funding :</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>Nature Of Funding</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Purpose :</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>Purpose</Text>
                    </View>
                </View>
            </>
            {/* Customer Details */}
            <>
                <View style={styles.headdingView}>
                    <Text style={styles.headdingTxt}>{strings.Customerdetails}</Text>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Visitor Name :</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>Visitor Name</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Location :</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>Location</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Age :</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>Age</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Gender :</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>Gender</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Locality :</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>Locality</Text>
                    </View>
                </View>
            </>
            {/* Company Details */}
            <>
                <View style={styles.headdingView}>
                    <Text style={styles.headdingTxt}>{strings.companydetails}</Text>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Nature of Occupation :</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>Nature of Occupation</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Company Name :</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>Company Name</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Age :</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>Age</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Designation :</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>Designation</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Office Address :</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>Office Address</Text>
                    </View>
                </View>
            </>
        </ScrollView>
    )
}

export default FollowUpDetailsItem