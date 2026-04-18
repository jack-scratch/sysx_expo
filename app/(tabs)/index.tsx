import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet
} from 'react-native';
import {
	SafeAreaProvider,
	SafeAreaView
} from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
		<SafeAreaProvider>
			<SafeAreaView>
				<View style={styles.cont}>
					<Text>sysx</Text>
				</View>
				<View style={styles.cont}>
					<View style={styles.cont}>
						<Text style={styles.hdr}>s</Text>
					</View>
					<View style={styles.cont}>
						<TextInput placeholder="Description" />
						<TextInput placeholder="Domain" />
						<TextInput placeholder="System" />
						<Button title="insert" onClick={() => alert("asdf")}>
							<Text>asdf</Text>
						</Button>
					</View>
					<View style={styles.cont}>
						<Text style={styles.hdr}>YouTube</Text>
						<TextInput placeholder="Query" />
						<Button title="search" onClick={() => alert("asdf")}>
							<Text>asdf</Text>
						</Button>
					</View>
					<View style={styles.cont}>
						<Text style={styles.hdr}>Google</Text>
						<TextInput placeholder="Query" />
						<Button title="search" onClick={() => alert("asdf")}>
							<Text>asdf</Text>
						</Button>
					</View>
					<View style={styles.cont}>
						<Text style={styles.hdr}>Amazon</Text>
						<TextInput placeholder="Query" />
						<Button title="search" onClick={() => alert("asdf")}>
							<Text>asdf</Text>
						</Button>
					</View>
					<View style={styles.cont}>
						<Text style={styles.hdr}>Stack Exchange</Text>
						<TextInput placeholder="Query" />
						<Button title="search" onClick={() => alert("asdf")}>
							<Text>asdf</Text>
						</Button>
					</View>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
	cont: {
		margin: 8
	},
	hdr: {
		fontSize: 22
	}
});
