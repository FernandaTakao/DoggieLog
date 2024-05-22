import "react-native-gesture-handler";
import React, { Suspense } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";
import Login from "./src/screens/login";
import SingupCaozinho from "./src/screens/singupCaozinho";
import Home from "./src/screens/home";
import Logs from "./src/screens/logs";
import Note from "./src/screens/note";
import Calendar from "./src/screens/calendar";
import Guide from "./src/screens/guide";
import EditProfile from "./src/screens/editProfile";
import Monitoring from "./src/screens/monitoring";
import { useFonts } from "expo-font";
import LocalDB from "./src/database/initDB";
import SingupTutor from "./src/screens/singupTutor";
import { SQLiteProvider } from "expo-sqlite";


function DefineApp() {
  const Stack = createNativeStackNavigator();
  const [loaded] = useFonts({
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    NunitoRegular: require("./assets/fonts/Nunito-Regular.ttf"),
    NunitoSemiBold: require("./assets/fonts/Nunito-SemiBold.ttf"),
    NunitoMedium: require("./assets/fonts/Nunito-Medium.ttf"),
    Brugty: require("./assets/fonts/Brugty DEMO.ttf"),
  });

  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="singupTutor">
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="singupTutor"
          component={SingupTutor}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="singupCaozinho"
          component={SingupCaozinho}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="editProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="logs"
          component={Logs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="monitoring"
          component={Monitoring}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="note"
          component={Note}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="calendar"
          component={Calendar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="guide"
          component={Guide}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <Suspense
      fallback={
        <View style={{ flex: 1 }}>
          <ActivityIndicator size={"large"} />
        </View>
      }
    >
      <SQLiteProvider
        databaseName="doggielogDB.db"
        assetSource={{ assetId: require("./src/database/doggielogDB.db") }}
      >
        <DefineApp />
      </SQLiteProvider>
    </Suspense>
  );
};

export default App;
