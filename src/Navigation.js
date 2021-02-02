import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons} from '@expo/vector-icons';

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';
import PayButton from './components/PayButton';

const Tab = createBottomTabNavigator();

const Icons = {
    Home: {
        name: 'home',
        lib: AntDesign
    },
    Wallet: {
        name: 'creditcard',
        lib: AntDesign
    },

    Notifications: {
        name: 'ios-notifications-outline',
        lib: Ionicons
    },
    Settings: {
        name: 'setting',
        lib: AntDesign,
    },
}


export default function Navigation(){
    return (
        <Tab.Navigator
        initialRouteName="Wallet" 
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, size, focused}) => {

                    if(route.name === 'Pay') {
                        return (
                            <PayButton 
                                onPress={() => navigation.navigate('Pay')}
                                focused={focused}
                            />
                        )
                    }
                    const { lib: Icon, name} = Icons[route.name];
                    return <Icon name={name} size={size} color={color}/>
                },
                
             })}
             tabBarOptions={{
                 style: {
                    backgroundColor: '#131418',
                    borderTopColor: 'rgba(255,255,255,0.2)',
                    paddingBottom: 10,
                    paddingTop: 5

                 },
                 activeTintColor: '#fff',
                 inactiveTintColor: '#92929c'
             }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Inicio'
                }}
                
            />
            <Tab.Screen 
                name="Wallet" 
                component={WalletScreen}
                options={{
                    tabBarLabel: 'Carteira'
                }}
            />
            <Tab.Screen 
                name="Pay" 
                component={PayScreen}
                options={{
                    tabBarLabel: ''
                }}
            />
            <Tab.Screen 
                name="Notifications" 
                component={PayScreen}
                options={{
                    tabBarLabel: 'Notificações'
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={PayScreen}
                options={{
                    tabBarLabel: 'Ajustes'
                }}
            />
        </Tab.Navigator>
    );
}

