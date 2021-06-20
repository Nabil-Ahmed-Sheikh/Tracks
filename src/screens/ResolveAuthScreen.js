import React, { useContext, useEffect } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

function ResolveAuthScreen(props) {

    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);

    return null;
}

export default ResolveAuthScreen;