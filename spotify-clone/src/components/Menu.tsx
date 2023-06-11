import { View, TouchableOpacity, Text } from "react-native";
import {MenuItem} from "./MenuItem";
import { Icon } from "./Icon";

export function Menu(props){
    return(
        <View className="hidden w-[280px] md:flex mr-2">
            <View className="w-full pl-6 flex-col bg-neutral-900 m-2 rounded-lg pt-3">  
                <MenuItem label="Início" icon={<Icon nameIcon="home" sizeIcon={26} colorHover="white" colorIcon="#a3a3a3"/>}/>
                <MenuItem label="Buscar" icon={<Icon nameIcon="search" sizeIcon={26} colorHover="white" colorIcon="#a3a3a3"/>}/>
            </View>
            <View className="w-full flex-1 pl-6 flex-col bg-neutral-900 mx-2 mb-2 rounded-lg pt-3">
                <View className="w-full pr-4 flex justify-between flex-row">
                    <MenuItem label="Sua Biblioteca" icon={<Icon nameIcon="book" sizeIcon={26} colorHover="white" colorIcon="#a3a3a3"/>}/>
                    <TouchableOpacity>
                        <Icon nameIcon="plus" sizeIcon={24} colorHover="white" colorIcon="#a3a3a3"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}