import { useState } from 'react';
import {
  Image,
  ImageBackground,
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
const SMOKE = '#a49e94';
const SERIF = 'serif';

const CAPABILITIES = [
  ['01', 'Strategy', 'Define what matters to the buyer.'],
  ['02', 'Story', 'Give the project human meaning.'],
  ['03', 'Imagery', 'Make the place tangible through craft.'],
  ['04', 'Technology', 'Make project information explorable.'],
  ['05', 'Delivery', 'Carry one approved vision through every output.'],
] as const;

const WORK = [
  {
    image: require('./assets/images/coast.webp'),
    label: 'Discover · Understand · Believe',
    title: 'From a feeling to a decision.',
  },
  {
    image: require('./assets/images/lifestyle.webp'),
    label: 'Lifestyle film',
    title: 'Life, in every frame.',
  },
  {
    image: require('./assets/images/interior.webp'),
    label: 'Story',
    title: 'From project to belief.',
  },
];

const TABS = ['Home', 'Capabilities', 'Work', 'Contact'] as const;
type Tab = (typeof TABS)[number];

function NavBrand({ light }: { light?: boolean }) {
  return (
    <View style={styles.nav}>
      <View style={!light && styles.navChip}>
        <Image source={require('./assets/images/logo.png')} style={styles.navLogo} resizeMode="contain" />
      </View>
    </View>
  );
}

function HomeScreen() {
  return (
    <ScrollView style={styles.screenScroll} contentContainerStyle={{ paddingBottom: 40 }}>
      <ImageBackground
        source={require('./assets/images/hero.webp')}
        style={styles.hero}
        imageStyle={styles.heroImage}
      >
        <View style={styles.heroScrim} />
        <NavBrand />
        <View style={styles.heroInner}>
          <Text style={styles.eyebrow}>The Real Estate Buyer Experience Company</Text>
          <Text style={styles.h1}>
            ONE VISION.{'\n'}EVERY EXPERIENCE.{'\n'}
            <Text style={styles.h1Accent}>ALIGNED.</Text>
          </Text>
          <Text style={styles.heroNote}>
            Strategy, story, imagery, technology and delivery — held in one buyer experience.
          </Text>
        </View>
      </ImageBackground>

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
    <ScrollView style={styles.screenDark} contentContainerStyle={styles.screen}>
      <NavBrand />
      <Text style={styles.tag}>About FUTÉ</Text>
      <Text style={styles.h2}>One architecture.{'\n'}Five public pillars.</Text>
      <Text style={styles.lead}>Every capability has a role in the buyer journey.</Text>
      {CAPABILITIES.map(([number, title, copy]) => (
        <View style={styles.row} key={number}>
          <Text style={styles.rowNumber}>{number}</Text>
          <View style={styles.rowBody}>
            <Text style={styles.rowTitle}>{title}</Text>
            <Text style={styles.rowCopy}>{copy}</Text>
          </View>
          <Text style={styles.rowArrow}>↗</Text>
        </View>
      ))}
    </ScrollView>
  );
}

function WorkScreen() {
  return (
    <ScrollView style={styles.screenPaper} contentContainerStyle={styles.screen}>
      <NavBrand light />
      <Text style={[styles.h2, styles.inkText]}>The work{'\n'}in experience.</Text>
      <Text style={[styles.lead, styles.smokeText]}>Selected visual narratives</Text>
      {WORK.map((item) => (
        <ImageBackground key={item.title} source={item.image} style={styles.card} imageStyle={styles.cardImage}>
          <View style={styles.cardScrim} />
          <Text style={styles.cardLabel}>{item.label}</Text>
          <Text style={styles.cardTitle}>{item.title}</Text>
        </ImageBackground>
      ))}
    </ScrollView>
  );
}

function ContactScreen() {
  return (
    <ScrollView style={styles.screenPaper} contentContainerStyle={styles.screen}>
      <NavBrand light />
      <Text style={[styles.footerH2, styles.inkText]}>
        Let's{'\n'}<Text style={{ color: RED }}>align.</Text>
      </Text>
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
  screenScroll: { flex: 1, backgroundColor: INK },
  screenDark: { flex: 1, backgroundColor: INK },
  screenPaper: { flex: 1, backgroundColor: PAPER },
  screen: { padding: 24, paddingBottom: 40, gap: 16 },

  nav: { paddingHorizontal: 24, paddingTop: 12, paddingBottom: 4 },
  navChip: { alignSelf: 'flex-start', backgroundColor: PAPER, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 3 },
  navLogo: { width: 90, height: 30 },

  hero: { minHeight: 560, justifyContent: 'flex-end' },
  heroImage: { resizeMode: 'cover' },
  heroScrim: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(13,13,11,0.55)' },
  heroInner: { padding: 24, paddingBottom: 32, gap: 14 },
  eyebrow: { color: RED, fontSize: 11, fontWeight: '700', letterSpacing: 1.5, textTransform: 'uppercase' },
  h1: { fontFamily: SERIF, color: PAPER, fontSize: 40, fontWeight: '400', lineHeight: 42, letterSpacing: -1 },
  h1Accent: { color: RED },
  heroNote: { color: '#ded9cf', fontSize: 14, lineHeight: 20, fontFamily: SERIF, maxWidth: 300 },

  factRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 20, padding: 24, borderTopWidth: 1, borderTopColor: '#332f2a' },
  fact: { width: '42%' },
  factNum: { fontFamily: SERIF, color: RED, fontSize: 22, marginBottom: 6 },
  factLabel: { color: PAPER, fontSize: 10, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase' },

  tag: { color: RED, fontSize: 10, fontWeight: '700', letterSpacing: 1.4, textTransform: 'uppercase' },
  h2: { fontFamily: SERIF, color: PAPER, fontSize: 32, fontWeight: '400', lineHeight: 33, letterSpacing: -1, marginBottom: 4 },
  inkText: { color: INK },
  smokeText: { color: '#706a62' },
  lead: { color: SMOKE, fontSize: 15, lineHeight: 21, fontFamily: SERIF },

  row: { flexDirection: 'row', gap: 14, paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: '#332f2a', alignItems: 'flex-start' },
  rowNumber: { color: RED, fontSize: 11, fontWeight: '700' },
  rowBody: { flex: 1 },
  rowTitle: { color: PAPER, fontSize: 12, fontWeight: '700', letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 6 },
  rowCopy: { fontFamily: SERIF, color: SMOKE, fontSize: 18, lineHeight: 22 },
  rowArrow: { color: RED, fontSize: 18 },

  card: { height: 220, borderRadius: 2, overflow: 'hidden', justifyContent: 'flex-end', padding: 18, marginBottom: 4 },
  cardImage: { resizeMode: 'cover' },
  cardScrim: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(10,10,9,0.38)' },
  cardLabel: { color: '#ded9cf', fontSize: 9, fontWeight: '700', letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 8 },
  cardTitle: { fontFamily: SERIF, color: PAPER, fontSize: 24, lineHeight: 26, letterSpacing: -0.5 },

  footerH2: { fontFamily: SERIF, fontSize: 56, fontWeight: '400', lineHeight: 50, letterSpacing: -2, marginTop: 8, marginBottom: 8 },
  button: { backgroundColor: INK, paddingVertical: 17, paddingHorizontal: 20, alignItems: 'center', marginTop: 8 },
  buttonText: { color: PAPER, fontSize: 11, fontWeight: '700', letterSpacing: 1.2, textTransform: 'uppercase' },
  emails: { gap: 6, marginTop: 20 },
  emailLink: { color: INK, fontSize: 16, fontFamily: SERIF },

  tabBar: { flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#332f2a', backgroundColor: INK },
  tabButton: { flex: 1, paddingVertical: 14, alignItems: 'center' },
  tabLabel: { color: '#706a62', fontSize: 10, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase' },
  tabLabelActive: { color: RED },
});
