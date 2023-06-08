import { TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import Animated, { Keyframe } from 'react-native-reanimated';

export function PlayButton(props){

    const keyframe = new Keyframe({
        0: {
          opacity: 0,
        },
        100: {
            opacity: 1,
        },
      })

    return(
        <Animated.View 
        exiting={keyframe.duration(5000)}
        className="
        transition
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
        </Animated.View>
    )
}