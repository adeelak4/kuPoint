import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Test from "./src/components/LogIn";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import SplashScreen from "./screens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import SearchTrackingBus from "./screens/SearchTrackingBus";
import SearchSchedule from "./screens/SearchSchedule";
import TrackLocation from "./screens/TrackLocation";
import BusSchedule from "./screens/BusSchedule";
import { RecoilRoot } from "recoil";

const Stack = createNativeStackNavigator();

import {
  RobotoCondensed_300Light,
  RobotoCondensed_300Light_Italic,
  RobotoCondensed_400Regular,
  RobotoCondensed_400Regular_Italic,
  RobotoCondensed_700Bold,
  RobotoCondensed_700Bold_Italic,
} from "@expo-google-fonts/roboto-condensed";

export default function App() {
  let [fontsLoad] = useFonts({
    RobotoCondensed_300Light,
    RobotoCondensed_300Light_Italic,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular_Italic,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold_Italic,
  });
  if (!fontsLoad) {
    return <AppLoading />;
  }

  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerTitle: "WELCOME", headerTitleAlign: "center" }}
          />
          {/* <Stack.Screen
            name="login"
            component={login}
            options={{ headerTitle: "LOG IN", headerTitleAlign: "center" }}
          /> */}
          <Stack.Screen name="home" component={Home} options={{ headerTitle: "HOME", headerTitleAlign: "center" }} />
          <Stack.Screen
            name="searchTrackingBus"
            component={SearchTrackingBus}
            options={{ headerTitle: "BUS LIST", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="searchSchedule"
            component={SearchSchedule}
            options={{ headerTitle: "BUS LIST", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="trackLocation"
            component={TrackLocation}
            options={{ headerTitle: "TRACK LOCATION", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="busSchedule"
            component={BusSchedule}
            options={{ headerTitle: "BUS SCHEDULE", headerTitleAlign: "center" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
    // <View >``
    //  <Test />
    // <SplashScreen />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
