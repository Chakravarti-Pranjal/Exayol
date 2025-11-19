import React from 'react';
import { Text, View } from 'react-native';

const Course = () => {
    return (
        <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text className="text-4xl font-bold text-red-500">Explore screen.</Text>
                    </View>
    );
}


export default Course;
