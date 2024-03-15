import { Fragment } from "react";
import {
  Document as PDFDocument,
  Page,
  View,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
import ContactSection from "./ContactSection";
import Header from "./Header";
import Hr from "./Hr";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

import { workExperience } from "../data";

const Aside = () => (
  <View style={styles.aside}>
    <Section title={"Contact"}>
      <ContactSection />
    </Section>
    <View style={styles.horizontalSeparator} />
    <Section title={"Skills"}>
      <Text style={contact.entry}>Javascript</Text>
      <Text style={contact.entry}>Redux</Text>
      <Text style={contact.entry}>React</Text>
      <Text style={contact.entry}>Angular</Text>
      <Text style={contact.entry}>NodeJS</Text>
      <Text style={contact.entry}>Webpack</Text>
      <Text style={contact.entry}>Typescript</Text>
    </Section>
    <View style={styles.horizontalSeparator} />
    <Section title={"Education"}>
      <Text>TODO</Text>
    </Section>
  </View>
);

export const Document = () => (
  <PDFDocument>
    <Page size="A4" style={styles.page} scale={100}>
      <Header />
      <Hr style={styles.horizontalSeparator} />
      <View style={styles.content}>
        <Aside />
        <View style={styles.section}>
          <Section title={"Profile"}>
            <Text>
              Senior fullstack JavaScript engineer with 10+ years of experience
              coding various web applications. Proficient with HTML, CSS and
              most popular web frameworks and libraries. Most notably, improved
              the average time on page by 40% and improved user experience
              scores for all projects. Winner of the Best Homepage Award by
              Shopify E-Commerce Design Awards in 2014.
            </Text>
          </Section>
          <Hr style={styles.horizontalSeparator} />
          <Section title={"Work Experience"}>
            {workExperience.map((job, index) => (
              <Fragment key={index}>
                {index > 0 && <View style={styles.marginTop} />}
                <ProjectCard {...job} />
              </Fragment>
            ))}
          </Section>
        </View>
      </View>
    </Page>
  </PDFDocument>
);

const contact = StyleSheet.create({
  container: {
    paddingVertical: 10,
    fontSize: 8,
  },
  entry: {
    paddingVertical: 5,
    paddingLeft: 5,
  },
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "col",
    backgroundColor: "#fff",
    fontFamily: "FiraSans",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  content: {
    flexDirection: "row",
  },
  aside: {
    flex: 3,
    flexGrow: 3,
    paddingRight: 5,
    marginRight: 5,
    borderRight: 1,
    borderColor: "#9b9b9b",
    borderRightStyle: "solid",
    fontSize: 9,
  },
  horizontalSeparator: {
    marginVertical: 10,
  },
  section: {
    flex: 7,
    padding: 10,
    flexGrow: 7,
    fontSize: 9,
  },
  marginTop: {
    marginTop: 15,
  },
});
