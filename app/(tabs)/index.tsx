import {
	Platform,
	View,
	Text,
	TextInput
} from 'react-native';
import {
	SafeAreaProvider
} from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
		<SafeAreaProvider>
			<View>
				<Text>sysx</Text>
			</View>
			<View>
				<TextInput placeholder="Description" />
			</View>
		</SafeAreaProvider>
  );
}
