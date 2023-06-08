import { View, Text, TouchableOpacity, Image } from "react-native";
import { Menu } from "../components/Menu";
import { TopBar } from "../components/TopBar";
import { PlayButton } from "../components/PlayButton";
import { useState } from "react";

export function Home(props){
    const [textHover, settextHover] = useState("opacity-0");

    const handleMouseEnter = () => {
        settextHover("opacity-1");
    };

    const handleMouseLeave = () => {
        settextHover("opacity-0");
    };

    return( 
        <View className="flex flex-row w-[100%] bg-black">
            <Menu/>
            <View className="flex flex-col flex-1 bg-red-900 m-2 pt-3 px-7 rounded-lg">{/*main content*/}
                <TopBar/>
                <Text className="text-white text-3xl font-semibold">Bem Vindo</Text>
                
                <TouchableOpacity 
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeave()}
                className="flex flex-row mt-6 items-center bg-neutral-100/10 transition rounded-lg sm:w-[340px] w-[300px]" {...props}>
                    <Image source={require('../assets/heart.png')} className="w-[64px] h-[64px] rounded-l-lg" resizeMode="contain"/>
                    <View className="flex flex-row items-center justify-between flex-1 pr-5">
                        <Text className="font-medium truncate py-5 text-white ml-4">Musicas Curtidas</Text>
                        <PlayButton className={textHover}/>
                    </View>
                </TouchableOpacity>
                <Text className="text-white text-xl font-semibold mt-10">Novas Musicas</Text>
            </View>
        </View>
    );
}