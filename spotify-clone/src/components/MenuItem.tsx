import { Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";
import { useState } from "react";
import React from "react";

function MenuItemStyled(props){
    const combinedClass = `text-neutral-400 font-bold ${props.classText}`;
    const [textHover, settextHover] = useState("");

    const handleMouseEnter = () => {
        if (props.textEnter == undefined) {
            settextHover("text-white");
            return;
        }
        settextHover(props.textEnter);
    };

    const handleMouseLeave = () => {
        if (props.textLeave == undefined) {
            settextHover("text-neutral-400");
            return;
        }
        settextHover(props.textLeave);
    };

    return(
        <TouchableOpacity className="flex flex-row gap-3 items-center mb-4" {...props}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}> 
            {props.icon}
            <Text className={`${combinedClass} ${textHover}`}>{props.label}</Text>
        </TouchableOpacity>
    );
}

const MenuItem = styled(MenuItemStyled);
export {MenuItem}