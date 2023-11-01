/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, Pressable, Text, View} from 'react-native';

function App(): JSX.Element {
  const [pressed, setPressed] = useState(false);
  return (
    <SafeAreaView>
      <View
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        <Pressable
          style={{padding: 30}}
          onPress={() => {
            setPressed(!pressed);
          }}>
          <Text>{pressed ? 'Is pressed' : 'Is not pressed'}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default App;
