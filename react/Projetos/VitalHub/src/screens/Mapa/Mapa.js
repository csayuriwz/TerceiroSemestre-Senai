import { ContainerP, ContainerSub, MapContainer, PerfilCityInputsContainer } from "../../components/Container/Style"
import { ProfilePicSub } from "../../components/Image/Style"
import { PerfilInput } from "../../components/Input/PerfilInput/Index"
import { InputBox } from "../../components/InputBox/Index"
import { TextGray, TitleSub } from "../../components/Title/Style"

import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState, useRef } from 'react';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import {
    requestForegroundPermissionsAsync, //Solicito a permissão de localização
    getCurrentPositionAsync, // Capturar a localização atual
    watchPositionAsync, //Captura em tempos a localização
    LocationAccuracy, //Precisão de captura
} from 'expo-location'
import MapViewDirections from 'react-native-maps-directions'
import { mapskey } from '../../../Utils/MapKey'

export const Mapa = ({ navigation }) => {

    const mapReference = useRef(null)

    const [initialPosition, setInitialPosition] = useState(null)

    const [finalPosition, setFinalPosition] = useState({
        latitude: -23.5452740364029,
        longitude: -46.47418628877455,
    })

    async function CapturarLocalizacao() {
        const { granted } = await requestForegroundPermissionsAsync()

        if (granted) {
            const currentPosition = await getCurrentPositionAsync()

            setInitialPosition(currentPosition)

            console.log(initialPosition)
        }
    }

    async function RecarregarVisualizacaoMapa() {
        if (mapReference.current && initialPosition) {
            await mapReference.current.fitToCoordinates(
                [
                    {
                        latitude: initialPosition.coords.latitude,
                        longitude: initialPosition.coords.longitude
                    },

                    {
                        latitude: finalPosition.latitude,
                        longitude: finalPosition.longitude
                    }
                ],
                {
                    edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
                    animated: true
                }
            )
        }
    }

    useEffect(() => {
        CapturarLocalizacao()

        //Capturar localiização em tempo real
        watchPositionAsync({
            accuracy: LocationAccuracy.High,
            timeInterval: 1000,
            distanceInterval: 1,
        }, async (response) => {
            await setInitialPosition(response)
            mapReference.current?.animatedCamera({
                pitch: 60,
                center: response.coords
            })
        })
    }, [1000])

    useEffect(() => {
        RecarregarVisualizacaoMapa()
    }, [initialPosition])

    return (

        <ContainerP>
            {/* <ProfilePicSub
                source={require('../../../src/assets/img/Mapa.png')}
                resizeMode='cover'
            /> */}

            <MapContainer>
                {
                    initialPosition != null
                        ? (
                            <MapView
                                ref={mapReference}
                                initialRegion={{
                                    latitude: initialPosition.coords.latitude,
                                    longitude: initialPosition.coords.longitude,
                                    latitudeDelta: 0.005,
                                    longitudeDelta: 0.005,
                                }}
                                provider={PROVIDER_GOOGLE}
                                style={styles.map}
                                customMapStyle={grayMapStyle}
                            >
                                {/* Criando um marcador no mapa */}
                                <Marker
                                    coordinate={{
                                        latitude: initialPosition.coords.latitude,
                                        longitude: initialPosition.coords.longitude,
                                    }}
                                    title='Qualquer Lugar'
                                    description='Qualquer lugar no mapa'
                                />

                                <MapViewDirections
                                    origin={initialPosition.coords}
                                    destination={{
                                        latitude: -23.5452740364029,
                                        longitude: -46.47418628877455,
                                        latitudeDelta: 0.005,
                                        longitudeDelta: 0.005,
                                    }}
                                    apikey={mapskey}
                                    strokeWidth={10}
                                    strokeColor='magenta'
                                />
                                {/* Criando um marcador no mapa */}
                                <Marker
                                    coordinate={{
                                        latitude: finalPosition.latitude,
                                        longitude: finalPosition.longitude,
                                    }}
                                    title='Qualquer Lugar'
                                    description='Qualquer lugar no mapa'
                                />

                            </MapView>
                        ) : (
                            <>
                                <Text>Localização não encontrada!</Text>

                                <ActivityIndicator />
                            </>
                        )
                }
            </MapContainer>


            <TitleSub>Clínica Natureh</TitleSub>
            <TextGray>São Paulo, SP</TextGray>

            <PerfilInput
                inputLabel="Endereço"
                inputPlaceholder="Rua Exemplo, 000"
                containerWidth="90%"
            />
            <PerfilCityInputsContainer>
                <PerfilInput
                    inputLabel="Número"
                    inputPlaceholder="000"
                    containerWidth="40%"
                    inputType={"numeric"}

                />
                <PerfilInput
                    inputLabel="Bairro"
                    inputPlaceholder="Bairro-Estado"
                    containerWidth="40%"
                />

            </PerfilCityInputsContainer>

        </ContainerP>

    )
}

