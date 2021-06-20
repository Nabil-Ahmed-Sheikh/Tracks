import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text, Button } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons'


function AccountScreen() {

    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{top: 'always'}} >
        <Text style={{ fontSize: 48 }} >
            AccountScreen
        </Text>
        <Button title="Sign Out" onPress={signout} />
        </SafeAreaView>
    );
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20} />
}

const styles = StyleSheet.create({});

export default AccountScreen;