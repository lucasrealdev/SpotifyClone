import { View, Text, TouchableOpacity, Image } from "react-native";
import { Menu } from "../components/Menu";
import { TopBar } from "../components/TopBar";
import { PlayButton } from "../components/PlayButton";
import { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';

export function Home(props){
    const [textHover, settextHover] = useState("opacity-0");

    const handleMouseEnter = () => {
        settextHover("opacity-1");
    };

    const handleMouseLeave = () => {
        settextHover("opacity-0");
    };

    const handleMouseClick = () => {
        settextHover("opacity-1");
        setTimeout(() => {
            settextHover("opacity-0");
          }, 200);
    };

    return( 
        <View className="flex flex-row w-[100%] h-[100%] bg-black">
            <Menu/>
            <View className="flex flex-col flex-1 m-0 sm:m-2 sm:rounded-lg">{/*header*/}
                <LinearGradient colors={['#065f46', '#171717']} className="sm:rounded-t-lg px-7 pt-3 pb-5">
                    <TopBar/>
                    <Text className="text-white text-3xl font-semibold">Bem Vindo</Text>
                    
                    <TouchableOpacity 
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={() => handleMouseLeave()}
                    onPressIn={() => handleMouseClick()}
                    className="flex flex-row mt-6 items-center bg-neutral-100/10 transition rounded-lg sm:w-[340px] w-[300px]" {...props}>
                        <Image source={require('../assets/heart.png')} className="w-[64px] h-[64px] rounded-l-lg" resizeMode="contain"/>
                        <View className="flex flex-row items-center justify-between flex-1 pr-5">
                            <Text className="font-medium truncate py-5 text-white ml-4">Musicas Curtidas</Text>
                            <PlayButton className={textHover}/>
                        </View>
                    </TouchableOpacity>
                </LinearGradient>
                <View className="bg-neutral-900 flex-1 px-7 pt-3 rounded-b-lg">
                    <Text className="text-white text-xl font-semibold">Novas Musicas</Text>
                </View>
            </View>
        </View>
    );
}