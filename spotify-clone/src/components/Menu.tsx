import { View, Text, Image } from "react-native";
import {MenuItem} from "./MenuItem";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'; 
import colors from "tailwindcss/colors";

export function Menu(){
    return(
        <View className="hidden w-60 bg-black h-full pl-6 md:flex flex-col">
            <Image
                className="w-[131px] h-[40px] my-7"
                resizeMode="contain"
                source={require('../assets/spotifyLogo.png')}
            />
            <MenuItem label="Início" icon={<Feather name="home" size={26} color={colors.neutral[400]}/>}/>
            <MenuItem label="Buscar" icon={<Feather name="search" size={26} color={colors.neutral[400]}/>}/>
            <MenuItem label="Sua Biblioteca" icon={<Feather name="book" size={26} color={colors.neutral[400]}/>}/>

            <MenuItem className="mt-4" label="Criar Playlist" icon={<Image source={require('../assets/add.png')} className="w-[26px] h-[28px]" resizeMode="contain"/>}/>
            <MenuItem label="Músicas Curtidas" icon={<Image source={require('../assets/heart.png')} className="w-[26px] h-[28px]" resizeMode="contain"/>}/>
        </View>
    );
}