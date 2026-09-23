import { useState } from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const INK = '#151513';
const PAPER = '#f1eee8';
const RED = '#c8192f';
const SMOKE = '#706a62';

const CAPABILITIES = [
  ['01', 'Strategy', 'Define what matters to the buyer.'],
  ['02', 'Story', 'Give the project human meaning.'],
  ['03', 'Imagery', 'Make the place tangible through craft.'],
  ['04', 'Technology', 'Make project information explorable.'],
  ['05', 'Delivery', 'Carry one approved vision through every output.'],
] as const;

const WORK = [
  { label: 'Discover · Understand · Believe', title: 'From a feeling to a decision.' },
  { label: 'Lifestyle film', title: 'Life, in every frame.' },
  { label: 'Story', title: 'From project to belief.' },
];

const TABS = ['Home', 'Capabilities', 'Work', 'Contact'] as const;
type Tab = (typeof TABS)[number];

function Eyebrow({ children }: { children: string }) {
  return <Text style={styles.eyebrow}>{children}</Text>;
}

function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Eyebrow>The Real Estate Buyer Experience Company</Eyebrow>
      <Text style={styles.h1}>
        One vision.{'\n'}Every experience.{'\n'}
        <Text style={styles.h1Accent}>Aligned.</Text>
      </Text>
      <Text style={styles.lead}>
        Strategy, story, imagery, technology and delivery — held in one buyer experience.
      </Text>
      <View style={styles.factRow}>
        <View style={styles.fact}>
          <Text style={styles.factNum}>17</Text>
          <Text style={styles.factLabel}>Years</Text>
        </View>
        <View style={styles.fact}>
          <Text style={styles.factNum}>India</Text>
          <Text style={styles.factLabel}>Home market</Text>
        </View>
        <View style={styles.fact}>
          <Text style={styles.factNum}>Singapore · UAE</Text>
          <Text style={styles.factLabel}>Regional reach</Text>
        </View>
        <View style={styles.fact}>
          <Text style={styles.factNum}>Australia</Text>
          <Text style={styles.factLabel}>Global reach</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function CapabilitiesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.h2}>One architecture.{'\n'}Five public pillars.</Text>
      <Text style={styles.lead}>Every capability has a role in the buyer journey.</Text>
      {CAPABILITIES.map(([number, title, copy]) => (
        <View style={styles.row} key={number}>
          <Text style={styles.rowNumber}>{number}</Text>
          <View style={styles.rowBody}>
            <Text style={styles.rowTitle}>{title}</Text>
            <Text style={styles.rowCopy}>{copy}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

function WorkScreen() {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.h2}>The work{'\n'}in experience.</Text>
      <Text style={styles.lead}>Selected visual narratives</Text>
      {WORK.map((item) => (
        <View style={styles.card} key={item.title}>
          <Text style={styles.cardLabel}>{item.label}</Text>
          <Text style={styles.cardTitle}>{item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

function ContactScreen() {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.h2}>Let's align{'\n'}the experience.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Linking.openURL(
            'mailto:Soma@futeservices.com?subject=FUT%C3%89%202.0%20project%20enquiry',
          )
        }
      >
        <Text style={styles.buttonText}>Start a project</Text>
      </TouchableOpacity>
      <View style={styles.emails}>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:Soma@futeservices.com')}>
          <Text style={styles.emailLink}>Soma@futeservices.com</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:Payel@futeservices.com')}>
          <Text style={styles.emailLink}>Payel@futeservices.com</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const SCREENS: Record<Tab, () => React.JSX.Element> = {
  Home: HomeScreen,
  Capabilities: CapabilitiesScreen,
  Work: WorkScreen,
  Contact: ContactScreen,
};

export default function App() {
  const [tab, setTab] = useState<Tab>('Home');
  const Screen = SCREENS[tab];

  return (
    <SafeAreaView style={styles.app}>
      <StatusBar barStyle="light-content" backgroundColor={INK} />
      <Screen />
      <View style={styles.tabBar}>
        {TABS.map((t) => (
          <TouchableOpacity key={t} style={styles.tabButton} onPress={() => setTab(t)}>
            <Text style={[styles.tabLabel, tab === t && styles.tabLabelActive]}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: INK },
  screen: { padding: 24, paddingBottom: 40, gap: 16 },
  eyebrow: { color: RED, fontSize: 11, fontWeight: '700', letterSpacing: 1.5, textTransform: 'uppercase' },
  h1: { color: PAPER, fontSize: 44, fontWeight: '300', lineHeight: 46 },
  h1Accent: { color: RED },
  h2: { color: PAPER, fontSize: 34, fontWeight: '300', lineHeight: 36, marginBottom: 4 },
  lead: { color: SMOKE, fontSize: 15, lineHeight: 21 },
  factRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 20, marginTop: 12, borderTopWidth: 1, borderTopColor: '#332f2a', paddingTop: 16 },
  fact: { width: '42%' },
  factNum: { color: RED, fontSize: 20, marginBottom: 4 },
  factLabel: { color: PAPER, fontSize: 11, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase' },
  row: { flexDirection: 'row', gap: 14, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#332f2a' },
  rowNumber: { color: RED, fontSize: 11, fontWeight: '700' },
  rowBody: { flex: 1 },
  rowTitle: { color: PAPER, fontSize: 13, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 },
  rowCopy: { color: SMOKE, fontSize: 14, lineHeight: 19 },
  card: { backgroundColor: '#26251f', padding: 18, borderRadius: 4, marginTop: 4 },
  cardLabel: { color: '#ded9cf', fontSize: 10, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 },
  cardTitle: { color: PAPER, fontSize: 20, lineHeight: 24 },
  button: { backgroundColor: RED, paddingVertical: 16, paddingHorizontal: 20, borderRadius: 4, alignItems: 'center', marginTop: 8 },
  buttonText: { color: PAPER, fontSize: 12, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase' },
  emails: { gap: 8, marginTop: 16 },
  emailLink: { color: PAPER, fontSize: 15 },
  tabBar: { flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#332f2a', backgroundColor: INK },
  tabButton: { flex: 1, paddingVertical: 14, alignItems: 'center' },
  tabLabel: { color: SMOKE, fontSize: 10, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase' },
  tabLabelActive: { color: RED },
});
