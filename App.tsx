import React from 'react';
import MainNavigator from "./src/navigators/Main"
import { Provider as PaperProvider } from 'react-native-paper';

const App = ()=>{
    return(
        <PaperProvider>
            <MainNavigator/>
        </PaperProvider>
    )
}

export default App;