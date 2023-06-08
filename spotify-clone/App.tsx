import { NativeWindStyleSheet } from 'nativewind';
import { Home } from './src/screens/Home';
import { StatusBar } from 'react-native';

export default function App() {
  StatusBar.setHidden(true);
  return (
    <Home/>
  );
}

//make nativewind work for web
NativeWindStyleSheet.setOutput({   web: "native",   default: "native", });