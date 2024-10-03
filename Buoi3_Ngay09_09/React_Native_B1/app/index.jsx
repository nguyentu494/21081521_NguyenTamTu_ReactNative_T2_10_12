import { View } from 'react-native';
import { Link } from 'expo-router';



export default function App() {
  return (
    <View>
      <Link href="/Screen1">Link 1</Link>
      <Link href="/Screen2">Link 2</Link>
      <Link href="/Screen3">Link 3</Link>
      <Link href="/Screen4">Link 4</Link>
      <Link href="/Screen5">Link 5</Link>
      <Link href="/Screen6">Link 6</Link>
      <Link href="/Screen7">Link 7</Link>
      <Link href="/Screen8">Link 8</Link>
    </View>
  );
}