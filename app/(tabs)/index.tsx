import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
} from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#F7E1C1", dark: "#5A3D31" }}
      headerImage={
        <Image
          source={require("../../assets/images/grain.jpg")}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Our Cookbook!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">🍲 Featured Recipe</ThemedText>
          <Image
            source={require("../../assets/images/featured-recipe.jpg")}
            style={styles.recipeImage}
          />
          <ThemedText type="default">
            Try our delicious Spaghetti Carbonara! Perfect for a romantic dinner
            or a friendly get-together.
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">👩‍🍳 Cooking Tips</ThemedText>
          <ThemedText type="default">
            - Always read the recipe thoroughly before starting. - Prepare all
            your ingredients in advance. - Taste as you go and adjust seasonings
            accordingly.
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">🚀 Get Started</ThemedText>
          <ThemedText type="default">
            Ready to cook? Select a recipe and let’s get started!
          </ThemedText>
        </ThemedView>
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 16,
  },
  contentContainer: {
    padding: 16,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  headerImage: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
  },
  recipeImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
});
