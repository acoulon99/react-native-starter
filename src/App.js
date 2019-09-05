import React from 'react';
import {
    Text,
    View,
} from 'react-native';

const styleContainer = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
}

const styleText = {
    fontSize: 30,
    fontWeight: 'bold',
}

class App extends React.Component {
    render() {
        return (
            <View style={styleContainer}>
                <Text style={styleText}>
                    {'The App!'}
                </Text>
            </View>
        )
    }
}

export default App;
