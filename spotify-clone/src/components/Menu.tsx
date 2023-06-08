import { View} from "react-native";
import {MenuItem} from "./MenuItem";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { AntDesign } from '@expo/vector-icons'; 

export function Menu(){
    return(
        <View className="hidden w-[280px] md:flex mr-2">
            <View className="w-full pl-6 flex-col bg-neutral-900 m-2 rounded-lg pt-3">  
                <MenuItem label="Início" icon={<Feather name="home" size={26} color={colors.neutral[400]}/>}/>
                <MenuItem label="Buscar" icon={<Feather name="search" size={26} color={colors.neutral[400]}/>}/>
            </View>
            <View className="w-full flex-1 pl-6 flex-col bg-neutral-900 mx-2 mb-2 rounded-lg pt-3">
                <View className="w-full pr-4 flex justify-between flex-row">
                    <MenuItem label="Sua Biblioteca" icon={<Feather name="book" size={26} color={colors.neutral[400]}/>}/>
                    <AntDesign name="plus" size={20} color={colors.neutral[400]}/>
                </View>
            </View>
        </View>
    );
}