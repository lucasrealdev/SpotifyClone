import { View } from "react-native";
import { Menu } from "../components/Menu";
import { TopBar } from "../components/TopBar";

export function Home(){
    return(
        <View className="flex flex-row w-[100%]">
            <Menu/>
            <View className="flex flex-col h-16 flex-1">
                <TopBar/>
            </View>
        </View>
    );
}