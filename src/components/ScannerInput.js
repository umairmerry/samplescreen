import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Iconsscaner from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ScannerInput({text}) {
    return (
        <View>
            <Text style={{color:"#6253a0",fontSize:15}}>{text}</Text>
            <View style={{ height: 57, borderWidth:.5, borderColor: "grey", borderRadius: 5,justifyContent:"center",marginTop:"2%", }}>
               <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%"}}>
                <Text style={{fontWeight:"300",fontSize:16}}>Codice a barre</Text>
                <TouchableOpacity>
                <Iconsscaner style={{ alignSelf: "center" }} name="barcode-scan" size={25} color="#6253a0" />
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}