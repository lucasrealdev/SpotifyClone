import { View, Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

function MenuItemStyled(props){
    return(
        <TouchableOpacity className="flex flex-row gap-3 items-center mb-4" {...props}>
            {props.icon}
            <Text className="text-neutral-400 font-bold">{props.label}</Text>
        </TouchableOpacity>
        
    );
}

const MenuItem = styled(MenuItemStyled);
export {MenuItem}