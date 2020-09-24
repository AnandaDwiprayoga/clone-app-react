import React, {useState, createContext} from 'react';

const FacebookContext = createContext();

const FaceboookProvider = (props) => {
    const userState = useState(null);

    return (
        <FacebookContext.Provider value={[ userState ]}>
            {props.children}
        </FacebookContext.Provider>
    )
}

export {
    FacebookContext,
    FaceboookProvider
}
