import React from "react";
import { StyleSheet, View } from "@react-pdf/renderer";

const Hr = ({ style }) => {
  return <View style={{...styles.container, ...style}} />;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottom: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '#9b9b9b'
  },
});

export default Hr;
