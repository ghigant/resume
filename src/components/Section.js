import React from "react";
import { StyleSheet, View } from "@react-pdf/renderer";
import Text from "../atoms/Text";

const Section = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <Text isBold style={styles.title}>
        {title}
      </Text>
      <View style={styles.underline} />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    fontSize: 8,
    lineHeight: 1.5,
  },
  title: {
    fontSize: 12,
    fontWeight: "semibold",
    lineHeight: 1.3,
    textTransform: "uppercase",
  },
  content: {
    paddingTop: 5,
  },
  underline: {
    width: 21,
    height: 4,
    borderRadius: 20,
    marginBottom: 5,
    backgroundColor: "rgba(0, 0, 0, .7)",
  },
});

export default Section;
