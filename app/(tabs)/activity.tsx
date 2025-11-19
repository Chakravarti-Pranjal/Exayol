import React from 'react';
import { Text, View } from 'react-native';

const Tests = () => {
    return (
        <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text className="text-4xl font-bold text-red-500">Activity screen.</Text>
                    </View>
    );
}


export default Tests;
