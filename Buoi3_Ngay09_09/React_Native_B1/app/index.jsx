import { View } from 'react-native';
import { Link } from 'expo-router';



export default function App() {
  return (
    <View>
      <Link href="/Screen1">Screen 1</Link>
      <Link href="/Screen2">Screen 2</Link>
      <Link href="/Screen3">Screen 3</Link>
      <Link href="/Screen4">Screen 4</Link>
      <Link href="/Screen5">Screen 5</Link>
      <Link href="/Screen6">Screen 6</Link>
      <Link href="/Screen7">Screen 7</Link>
      <Link href="/Screen8">Screen 8</Link>
    </View>
  );
}