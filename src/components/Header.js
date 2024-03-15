import React from "react";
import { StyleSheet, Text, View, Image } from "@react-pdf/renderer";

const Header = ({ name, titles = [] }) => {
  const [firstName, lastName] = name.split(" ");
  return (
    <View style={layoutStyles.container}>
      <View style={layoutStyles.profilePictureContainer}>
        <Image style={styles.profilePicture} src="/images/avatar.png" />
      </View>
      <View style={layoutStyles.detailsContainer}>
        <Text style={styles.name}>{firstName}</Text>
        <Text style={styles.name}>{lastName}</Text>
        <View style={styles.titles}>
          {titles.map((entry, index) => {
            return (
              <Text key={index} style={styles.title}>
                {index > 0 && <Text>• </Text>}
                {entry}
              </Text>
            );
          })}
        </View>
      </View>
    </View>
  );
};

Header.defaultProps = {
  name: "Valentin Botoc",
  titles: ["Senior JavaScript Engineer", "Contractor", "Freelancer"],
};

const layoutStyles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    // marginVertical: 5,
  },
  profilePictureContainer: {
    flex: 3,
    flexGrow: 3,
  },
  detailsContainer: {
    paddingLeft: 10,
    marginTop: 10,
    flex: 7,
    flexGrow: 7,
  },
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
  },
  name: {
    fontSize: 20,
    fontWeight: "semibold",
    textTransform: "uppercase",
  },
  title: {
    marginTop: 10,
    fontSize: 12,
    paddingHorizontal: 2,
    opacity: 0.7,
  },
  titles: {
    flexDirection: "row",
  },
  profilePicture: {
    borderRadius: 9999,
    width: 100,
    marginHorizontal: "auto",
  },
});

export default Header;
