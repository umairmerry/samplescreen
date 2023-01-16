import { View, Text, FlatList, TouchableOpacity, Vibration, ScrollView } from 'react-native'
import React from 'react'
import ScannerInput from '../components/ScannerInput'

export default function SampleScreen() {
    const Data = [{ quantity: 'QTB', title: 'PRODOTTO', titleloc: 'LOC', price: '1000', detail: 'Titolo del prodotto ordinate dal cliente' },
    { quantity: 'QTB', title: 'PRODOTTO', titleloc: 'LOC', price: '1000', detail: 'Titolo del prodotto ordinate dal cliente' },
    { quantity: 'QTB', title: 'PRODOTTO', titleloc: 'LOC', price: '1000', detail: 'Titolo del prodotto ordinate dal cliente' },
    { quantity: 'QTB', title: 'PRODOTTO', titleloc: 'LOC', price: '1000', detail: 'Titolo del prodotto ordinate dal cliente' },
    { quantity: 'QTB', title: 'PRODOTTO', titleloc: 'LOC', price: '1000', detail: 'Titolo del prodotto ordinate dal cliente' },
    { quantity: 'QTB', title: 'PRODOTTO', titleloc: 'LOC', price: '1000', detail: 'Titolo del prodotto ordinate dal cliente' }]

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ marginHorizontal: "4%", marginTop: "5%" }}>
                <ScrollView>
                    <View>
                        <ScannerInput text="Scansiona prodotti" />
                    </View>
                    <View style={{ marginTop: "5%" }}>
                        <ScannerInput text="Quantita" />
                    </View>
                    <TouchableOpacity>
                        <View style={{ height: 70, backgroundColor: "#99fff0", borderRadius: 5, justifyContent: "center", marginTop: "5%" }}>
                            <Text style={{ textAlign: "center", color: "#0ed805" }}>SCANSIONAT!</Text>
                            <Text style={{ textAlign: "center", color: "#0ed805", fontWeight: "900", fontSize: 22 }}>1000</Text>
                        </View>
                    </TouchableOpacity>
                    <FlatList
                        data={Data}
                        keyExtractor={item => item}
                        renderItem={({ item, index }) => {
                            return (
                                <View key={index} style={{ marginTop: "2%", borderBottomWidth: 1, borderColor: "#353535", height: 90, justifyContent: "center" }}>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <View>
                                                <Text style={{ color: "black", fontSize: 18 }}>{item.quantity}</Text>
                                                <Text style={{ textAlign: "center", color: "#1aab2c", fontSize: 13, fontWeight: "bold", marginTop: 10 }}>{item.price}</Text>
                                            </View>
                                            <View style={{ marginLeft: "9%" }}>
                                                <Text style={{ color: "black", fontSize: 18 }}>{item.title}</Text>
                                                <Text style={{ fontSize: 13, color: "#353535", marginTop: 10 }}>{item.detail}</Text>
                                                <Text style={{ color: "#232323" }}>EAN. 0000000000000000</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={{ color: "black", fontSize: 18 }}>LOC</Text>
                                            <Text style={{ fontSize: 13, color: "#353535", marginTop: 10 }}>L24/B</Text>
                                        </View>
                                    </View>
                                </View>)
                        }} />
                    <View style={{ marginTop: "5%" }}>
                        <ScannerInput text="Selezione allocazione di partenza" />
                    </View>
                    <Text style={{ color: "#6253a0", fontSize: 16, fontWeight: "bold", marginTop: "5%" }}>Allocazione.: L24B</Text>
                    <View style={{ marginTop: "2%" }}>
                        <ScannerInput text="Selezione allocazione di partenza" />
                    </View>
                    <Text style={{ color: "#6253a0", fontSize: 16, fontWeight: "bold", marginTop: "5%" }}>Allocazione.: L24B</Text>
                    <TouchableOpacity>
                        <View style={{ height: 70, backgroundColor: "#00bd25", borderRadius: 5, justifyContent: "center", marginTop: "5%", marginBottom: "5%" }}>
                            <Text style={{ textAlign: "center", color: "white", fontWeight: "bold", fontSize: 24 }}>CONFERMA</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView >
            </View>
        </View >
    )
}