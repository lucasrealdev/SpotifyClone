import { TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export function PlayButton(props){

    return(
        <TouchableOpacity 
        className="
        rounded-full
        flex
        items-center
        justify-center
        bg-green-500
        w-12
        h-12
        pl-1
        "{...props}
        >
            <FontAwesome name="play" size={21} color="black" />
        </TouchableOpacity>
    )
}