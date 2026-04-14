import {
	Image
} from 'expo-image';
import {
	Platform,
	View,
	StyleSheet,
	TextInput
} from 'react-native';

import {
	HelloWave
} from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import {
	ThemedText
} from '@/components/themed-text';
import {
	ThemedView
} from '@/components/themed-view';
import {
	Link
} from 'expo-router';

export default function HomeScreen() {
  return (
		<ThemedView>
			<View>
				<ThemedText>sysx</ThemedText>
			</View>
			<View>
				<TextInput placeholder="Description" />
			</View>
		</ThemedView>
  );
}
