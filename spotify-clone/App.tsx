import { NativeWindStyleSheet } from 'nativewind';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <Home/>
  );
}

//make nativewind work for web
NativeWindStyleSheet.setOutput({   web: "native",   default: "native", });