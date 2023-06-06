import { View, Image, Text } from "react-native";
import { MenuItem } from "./MenuItem";
import React, { useState } from 'react';

export function TopBar(){
    const [show, setShow] = useState(false)
    return(
        <View className="flex-1 bg-zinc-900 h-16 flex flex-row items-center justify-between px-7 " >
            <View className="flex flex-row">
                <MenuItem icon={<Image source={require('../assets/leftArrow.png')} className="w-[33px] h-[33px]" resizeMode="contain"/>} className="mb-0"/>
                <MenuItem icon={<Image source={require('../assets/rightArrow.png')} className="w-[33px] h-[33px]" resizeMode="contain"/>} className="mb-0"/>
            </View>
            <View className="flex flex-row gap-x-2"> 
                <MenuItem label="Inscrever-se" className="mb-0" classText="text-lg font-semibold" textEnter="scale-105 text-white" textLeave="scale-100 text-neutral-400"/>
                <MenuItem label="Entrar" className="mb-0" classText="text-lg text-black px-7 py-2 bg-white rounded-full font-semibold" textEnter="scale-105" textLeave="scale-100"/>
            </View>
        </View>
    );
}