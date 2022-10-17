import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from "../views/Home";
// import { SignIn } from "../views/Signin";
import { Datails } from "../views/Datails";
import { Register } from "../views/Register";


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='home' component={Home} />
            <Screen name='new' component={Register} />
            <Screen name='details' component={Datails} />
        </Navigator>
    )
}