import { useEffect, useState, useRef } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { mapskey } from './Utils/MapsKey';


import {
    requestForegroundPermissionsAsync,//solicita a permissao de localizacao
    getCurrentPositionAsync, //captura a localizacao atual
  
    watchPositionAsync, //captura em tempos a loc
    LocationAccuracy // precisao de captura
  } from 'expo-location'

export const MapaAtual = () => {
    const mapReference = useRef(null)
    const [position, setPosition] = useState(null)

    async function capturarLocalizacao() {
        const { granted } = await requestForegroundPermissionsAsync()

        if (granted) {
            const currentPosition = await getCurrentPositionAsync()

            setPosition(currentPosition)

            console.log(position)
        }

    }
}
