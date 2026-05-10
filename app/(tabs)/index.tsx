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
import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  desc: {
		type: String,
		required: true
  },
	dmn: {
		type: String
	},
  sys: {
		type: String
	},
	reason: {
		type: String
	},
	note: {
		type: String
	},
	ts: {
		type: String
	}
});

const S = mongoose.model('S', schema);

export default function HomeScreen() {
  return (
		<SafeAreaProvider>
			<SafeAreaView>
				<View style={style.cont}>
				<Text style={{
					fontSize: 35
				}}>sysx</Text>
				</View>
				<View style={style.cont}>
					<View style={style.cont}>
						<Text style={style.hdr}>s</Text>
					</View>
					<View style={style.cont}>
						<TextInput placeholder="Description" />
						<TextInput placeholder="Domain" />
						<TextInput placeholder="System" />
						<Button title="insert" onClick={() => alert("asdf")}>
							<Text>asdf</Text>
						</Button>
					</View>
					<View style={style.cont}>
						<Text style={style.hdr}>YouTube</Text>
						<TextInput placeholder="Query" />
						<Button title="search" onClick={() => alert("asdf")}>
							<Text>asdf</Text>
						</Button>
					</View>
					<View style={style.cont}>
						<Text style={style.hdr}>Google</Text>
						<TextInput placeholder="Query" />
						<Button title="search" onClick={() => alert("asdf")}>
							<Text>asdf</Text>
						</Button>
					</View>
					<View style={style.cont}>
						<Text style={style.hdr}>Amazon</Text>
						<TextInput placeholder="Query" />
						<Button title="search" onClick={() => alert("asdf")}>
							<Text>asdf</Text>
						</Button>
					</View>
					<View style={style.cont}>
						<Text style={style.hdr}>Stack Exchange</Text>
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

const style = StyleSheet.create({
	cont: {
		margin: 8
	},
	hdr: {
		fontSize: 22
	}
});
