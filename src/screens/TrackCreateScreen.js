// import '../_mockLocation';
import React, { useCallback, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons'

function TrackCreateScreen({ isFocused }) {
    const { state: { recording }, addLocation } = useContext(LocationContext);

    const callback = useCallback((location) => {
        addLocation(location, recording);
    }, [recording])
    
    const [err] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView 
        forceInset={{top: 'always'}}
        style={{ marginTop: 50 }}
        >
            <Text h3 >
                TrackCreateScreen
            </Text>
            <Map />
            {err ? <Text>Please enable location service</Text>: null}
            <TrackForm />
        </SafeAreaView>
        
    );
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} />
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);