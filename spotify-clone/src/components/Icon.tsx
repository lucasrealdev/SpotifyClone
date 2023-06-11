import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import { useState } from "react";

export function Icon(props){
    const [colorIcon, setColorIcon] = useState(props.colorIcon);
    
    const handleMouseEnter = () => {
        if (props.colorHover != undefined) {
            setColorIcon(props.colorHover);
        }
    };
    const handleMouseLeave = () => {
        setColorIcon(props.colorIcon);
    };

    return(
    <View {...props} 
    onMouseEnter={() => handleMouseEnter()}
    onMouseLeave={() => handleMouseLeave()}>
        <Feather name={props.nameIcon} color={colorIcon} size={props.sizeIcon}/>
    </View>
    )
}