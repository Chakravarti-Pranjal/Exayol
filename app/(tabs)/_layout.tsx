import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';


const TabLayout = () => {
    return (
        <Tabs
            // tabBar={(props) => <CustomTabBar {...props} />}   
            screenOptions={{ headerShown: false }}            
        >
            <Tabs.Screen 
                name='home'
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={26} color={color} />
                    )
                }}
            />

            {/*<Tabs.Screen 
                name='explore'
                options={{
                    title: "Explore",
                    tabBarIcon: ({ color }) => (
                        <Fontisto name="search" size={24} color={color} />
                    )
                }}
            />*/}

            {/* Middle floating tab must be included */}
            <Tabs.Screen
                name="add"
                options={{
                    title: "Add",
                    tabBarIcon: ({color}) => (
                        <AntDesign name="plus-circle" size={25} color={color} />
                    ),  
                }}
            />

            {/*<Tabs.Screen 
                name='activity'
                options={{
                    title: "Activity",
                    tabBarIcon: ({ color }) => (
                        <Fontisto name="bell" size={24} color={color} />
                    )
                }}
            />*/}

            <Tabs.Screen 
                name='profile'
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user" size={25} color={color} />
                    )
                }}
            />
        </Tabs>
    );
}

export default TabLayout;
