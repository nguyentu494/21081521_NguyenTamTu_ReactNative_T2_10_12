import { View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View>
      <Link href="/Screen1">Screen 1</Link>
      <Link href="/Screen2">Screen 2</Link>
    </View>
  );
}