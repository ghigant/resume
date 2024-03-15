import React from "react";
import { StyleSheet, View, Text } from "@react-pdf/renderer";

const ProjectCardHeader = ({ title, from, to }) => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.title}>{title}</Text>
      <Text style={headerStyles.dates}>{from + " - " + to}</Text>
    </View>
  );
};
const headerStyles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 10,
    marginBottom: 5,
  },
  title: {
    fontWeight: "semibold",
  },
  dates: {
    // fontSize: 12
  },
});

const ProjectCard = ({
  title,
  from,
  to,
  projectName,
  company,
  clientDescription,
  achievements,
}) => {
  return (
    <View style={styles.container}>
      <ProjectCardHeader {...{ to, from, title }} />
      <Text style={styles.company}>
        {projectName} | {company}
      </Text>
      <Text style={styles.description}>{clientDescription}</Text>
      <View style={styles.achievements}>
        {achievements.map((entry, index) => (
          <Text key={index}> • {entry}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    fontSize: 10,
  },
  company: {
    fontSize: 10,
    fontWeight: 500,
    // textIndent: 10
  },
  description: {
    textAlign: "justify",
    paddingVertical: 5,
    opacity: 0.7,
    fontSize: 9,
    // textIndent: 10
  },
  achievements: {
    textAlign: "justify",
    paddingVertical: 5,
    fontSize: 9,
    // paddingLeft: 10,
  },
});

export default ProjectCard;
