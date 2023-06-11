import { View, Image, Dimensions } from "react-native";
import { MenuItem } from "./MenuItem";
import React, { useState, useEffect  } from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

export function TopBar(){
    const [show, setShow] = useState(false)
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(Dimensions.get('window').width);
        };
    
        Dimensions.addEventListener('change', handleResize);
      }, []);

    const getIconLeft = () => {
    if (windowWidth > 767) {
        return <Image source={require('../assets/leftArrow.png')} className="w-[33px] h-[33px]" resizeMode="contain"/>
    } else {
        return <View className="bg-white w-[33px] h-[33px] flex justify-center items-center rounded-full">
            <Entypo name="home" size={21} color="black" />
        </View>
    }
    };

    const getIconRight = () => {
    if (windowWidth > 767) {
        return <Image source={require('../assets/rightArrow.png')} className="w-[33px] h-[33px]" resizeMode="contain"/>
    } else {
        return <View className="bg-white w-[33px] h-[33px] flex justify-center items-center rounded-full">
            <Feather name="search" size={19} color="black"/>
        </View>
    }
    };

    return(
        <View className="w-full h-16 flex flex-row items-center justify-between">
            <View className="flex flex-row">
                <MenuItem icon={getIconLeft()} className="mb-0"/>
                <MenuItem icon={getIconRight()} className="mb-0"/>
            </View>
            <View className="flex flex-row gap-x-1"> 
                <MenuItem label="Inscrever-se" className="mb-0" classText="text-base font-semibold" textEnter="scale-105 text-white" textLeave="scale-100 text-neutral-400"/>
                <MenuItem label="Entrar" className="mb-0" classText="text-base text-black px-7 py-2 bg-white rounded-full font-semibold" textEnter="scale-105" textLeave="scale-100"/>
            </View>
        </View>
    );
}