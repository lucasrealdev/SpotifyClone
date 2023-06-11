import { Text } from "react-native";
import { useState } from "react";

export function CustomText(props){
    const [colorText, setcolorText] = useState(props.textColor);

    const handleMouseEnter = () => {
        if (props.colorHover != undefined) {
            setcolorText(props.colorHover);
        }
    };
    const handleMouseLeave = () => {
        setcolorText(props.textColor);
    };

    return(
        <Text {...props}
        className={`font-bold ${colorText}`}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        >
            {props.text}
        </Text>
    )
}