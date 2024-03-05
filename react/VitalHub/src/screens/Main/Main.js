import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Perfil } from '../Perfil/Perfil';
import { ConsultasMedico } from '../ConsultasMedico/ConsultasMedico';

//CHAMANDO OS ELEMENTOS DO ICONE DO STYLE
import { ContentIcon, TextIcon } from './Style';

import {FontAwesome, FontAwesome5} from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator();
export const Main = () => {
    return (
        <BottomTab.Navigator
            initialRouteName='ConsultasMedico'


            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: "#ffff", height: 80, paddingTop: 10 },
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,
                headerShown: false,


                tabBarIcon: ({ focused }) => {
                    if (route.name === "ConsultasMedico") {
                        return (
                            <ContentIcon   
                                TabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome name='calendar' size={18} color="#4E4B59"/>
                                {focused && <TextIcon>Agenda</TextIcon>}
                            </ContentIcon>
                        )
                    } else {

                    }
                }
            })}
        >

            <BottomTab.Screen
                name="ConsultasMedico"
                component={ConsultasMedico}
            />

            <BottomTab.Screen
                name="Perfil"
                component={Perfil}
            />



        </BottomTab.Navigator>
    )
}