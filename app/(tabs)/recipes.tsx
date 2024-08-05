import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Platform, Image, ScrollView } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#FFE0B2", dark: "#8D6E63" }}
      headerImage={
        <Ionicons size={310} name="restaurant" style={styles.headerImage} />
      }
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">🍽️ Recipe Categories</ThemedText>
        </ThemedView>
        <Collapsible title="🥗 Appetizers">
          <ThemedText>
            Discover delicious appetizers to start your meal. Explore recipes
            for various appetizers.
          </ThemedText>
          <Image
            source={require("../../assets/images/appetizers.jpg")}
            style={styles.categoryImage}
          />
        </Collapsible>
        <Collapsible title="🍲 Main Courses">
          <ThemedText>
            From simple to gourmet, find main courses to suit any taste. Check
            out our main course recipes.
          </ThemedText>
          <Image
            source={require("../../assets/images/main-courses.jpg")}
            style={styles.categoryImage}
          />
        </Collapsible>
        <Collapsible title="🍰 Desserts">
          <ThemedText>
            Satisfy your sweet tooth with our dessert recipes. Indulge in a
            variety of dessert options.
          </ThemedText>
          <Image
            source={require("../../assets/images/desserts.jpg")}
            style={styles.categoryImage}
          />
        </Collapsible>
        <Collapsible title="🤝 Collaborative Cooking">
          <ThemedText>
            Learn how to cook together with synchronized tasks and timers.
            Enhance your cooking experience by collaborating in real-time.
          </ThemedText>
        </Collapsible>
        <Collapsible title="💡 Cooking Tips & Tricks">
          <ThemedText>
            Discover valuable cooking tips and tricks to improve your culinary
            skills.
          </ThemedText>
          <ExternalLink href="https://cooking-tips-and-tricks.com">
            <ThemedText type="link">Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  contentContainer: {
    padding: 16,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    padding: 16,
  },
  categoryImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginVertical: 8,
  },
});
