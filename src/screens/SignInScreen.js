import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

function SignInScreen({ navigation }) {

    const { state, signin, clearErrorMessage } = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm 
                headerText="Sign In to Your Account"
                errorMessage={state.errorMessage}
                submiButtonText="Sign In"
                onSubmit={signin}
            />
            <NavLink 
                routeName="SignUp"
                text="Don't have an account? Sign up instead"
            />
        </View>
    );
};

SignInScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});
export default SignInScreen;