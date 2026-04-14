import {
	Platform,
	View,
	Text,
	TextInput,
	Button
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
				<Button title="insert" onClick={() => alert("asdf")}>
					<Text>asdf</Text>
				</Button>
			</View>
		</SafeAreaProvider>
  );
}
