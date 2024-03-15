import React from "react";
import { StyleSheet, Text as PDFText } from "@react-pdf/renderer";

const Text = ({ children, isBold, contrast, style }) => {
  const { text: defaultTextStyles } = defaultStyles;

  if (isBold) {
    defaultTextStyles.fontWeight = "semibold";
  }
  if (contrast) {
    defaultTextStyles.color = "#fff";
  }

  return (
    <PDFText style={{ ...defaultTextStyles, ...style }}>{children}</PDFText>
  );
};

const defaultStyles = StyleSheet.create({
  text: {
    fontSize: 9,
    fontFamily: "FiraSans",
    color: "#000",
  },
});

export default Text;
