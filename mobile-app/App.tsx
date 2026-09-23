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
const SAND = '#d6cfc5';
const SMOKE = '#a49e94';
const SERIF = 'serif';

const FACTS = [
  ['17', 'Years since 2009'],
  ['India', 'Original practice'],
  ['Singapore · UAE', 'Global presence'],
  ['Australia', 'Global presence'],
] as const;

const TRIAD = [
  ['01 / Story', 'Human meaning.', INK, PAPER],
  ['02 / Imagery', 'Tangible craft.', RED, INK],
  ['03 / Technology', 'Useful exploration.', PAPER, INK],
] as const;

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
    label: 'Buyer experience · supplied image library',
    title: 'From a feeling to a decision.',
    small: 'Discover · Understand · Believe',
  },
  {
    image: require('./assets/images/lifestyle.webp'),
    label: 'Lifestyle film · supplied image library',
    title: 'Life, in every frame.',
  },
  {
    image: require('./assets/images/interior.webp'),
    label: 'Story · supplied image library',
    title: 'From project to belief.',
  },
];

const FILMS = [
  {
    image: require('./assets/images/ai-arrival.webp'),
    meta: '01 — Arrival',
    title: 'Anticipation → Arrival',
    copy: 'An active morning ritual reveals a character’s desire for a different pace. Architecture enters through action.',
  },
  {
    image: require('./assets/images/hero.webp'),
    meta: '02 — Explore',
    title: 'Discover → Believe',
    copy: 'Move through location, spaces and options in one coherent story — designed to make project information useful.',
  },
  {
    image: require('./assets/images/ai-evening.webp'),
    meta: '03 — Belonging',
    title: 'Belonging → Memory',
    copy: 'Shared life and a quieter personal moment make the place feel lived in. End on the life she chooses.',
  },
];

const JOURNEY = [
  ['01', 'Discover / Understand'],
  ['02', 'Believe / Explore'],
  ['03', 'Compare / Decide'],
] as const;

const WHEEL = ['Discover', 'Understand', 'Believe', 'Explore', 'Compare', 'Decide'];

const BEATS = [
  ['0–8 sec', 'Anticipation', 'An active morning ritual reveals a character’s desire for a different pace.'],
  ['8–18 sec', 'Arrival', 'Move through the project’s arrival route; architecture enters through action.'],
  ['18–47 sec', 'Belonging', 'Shared life and a quieter personal moment make the place feel lived in.'],
  ['47–60 sec', 'Memory', 'Return to the opening gesture in an evening setting; end on the life she chooses.'],
] as const;

const SYSTEMS = [
  ['01', 'Launch clarity', 'Align the proposition, Story DNA, messaging and launch-content direction.'],
  ['02', 'Buyer story', 'Connect narrative, CGI, film and lifestyle content.'],
  ['03', 'Interactive decision', 'Organise approved project information into a guided experience.'],
  ['04', 'Portfolio experience', 'Discovery, filtering, approved assets and a standard project-information template.'],
] as const;

const DELIVERY = [
  ['01', 'Inputs', 'Brief, plans, model, brand assets and accountable approval.'],
  ['02', 'Direction', 'Story DNA, visual direction, narrative treatment and sequence.'],
  ['03', 'Production', 'Approved imagery, film, interactive modules and review.'],
  ['04', 'Handover', 'Quality control, final files, rights record and sales-team orientation.'],
] as const;

const VOICE = [
  ['Name the work.', 'A film, a masterplan and an interactive experience built around one story.'],
  ['Keep emotion specific.', 'Morning light. A familiar face. A place to return to.'],
  ['Explain technology plainly.', 'Explore approved project plans and media in one interface.'],
] as const;

const MARKETS = ['India', 'Singapore', 'UAE / Dubai', 'Australia'];

const COLLABORATORS = [
  'Hiranandani',
  'The Wadhwa Group',
  'Shapoorji Pallonji',
  'Brigade Group',
  'CapitaLand',
  'RSP',
  'L&T Realty',
  'Oberoi Realty',
  'Godrej Properties',
  'Phoenix',
  'Embassy Group',
];

function NavBrand({ light }: { light?: boolean }) {
  return (
    <View style={styles.nav}>
      <View style={!light && styles.navChip}>
        <Image source={require('./assets/images/logo.png')} style={styles.navLogo} resizeMode="contain" />
      </View>
    </View>
  );
}

function Tag({ children }: { children: string }) {
  return <Text style={styles.tag}>{children}</Text>;
}

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar barStyle="light-content" backgroundColor={INK} />
      <ScrollView style={styles.appScroll} contentContainerStyle={{ paddingBottom: 48 }}>
        {/* Hero */}
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

        {/* About / Intro */}
        <View style={[styles.section, styles.darkSection]}>
          <Tag>About FUTÉ</Tag>
          <Text style={styles.h2}>A place becomes personal through life.</Text>
          <Text style={styles.lead}>
            We begin with the life people imagine in a place. Then connect the strategy, story, imagery and
            technology that help them understand it.
          </Text>
          <View style={styles.factRow}>
            {FACTS.map(([num, label]) => (
              <View style={styles.fact} key={num}>
                <Text style={styles.factNum}>{num}</Text>
                <Text style={styles.factLabel}>{label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Human idea */}
        <View style={[styles.section, styles.darkSection]}>
          <Text style={styles.smallTag}>The human idea — light / material / movement / memory</Text>
          <Text style={styles.h2}>
            A place becomes personal through <Text style={{ color: RED }}>life.</Text>
          </Text>
          <Text style={styles.lead}>
            We begin with the life people imagine in a place. Then connect the strategy, story, imagery and
            technology that help them understand it.
          </Text>
          <Text style={[styles.lead, { color: PAPER, fontWeight: '700', fontFamily: undefined }]}>
            Every vision, story and sales experience — aligned around the buyer.
          </Text>
        </View>

        {/* Future triad */}
        <View style={[styles.section, styles.darkSection]}>
          <Tag>One approved vision / three dimensions</Tag>
          <Text style={styles.h2}>
            Story. Imagery. <Text style={{ color: RED }}>Technology.</Text>
          </Text>
          <Text style={styles.lead}>
            Give the project human meaning. Make the place tangible through craft. Make project information
            explorable.
          </Text>
          <View style={styles.triadRow}>
            {TRIAD.map(([label, title, bg, fg]) => (
              <View style={[styles.triadCell, { backgroundColor: bg }]} key={label}>
                <Text style={[styles.triadLabel, { color: fg }]}>{label}</Text>
                <Text style={[styles.triadTitle, { color: fg }]}>{title}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Market pulse */}
        <View style={[styles.marketPulse, styles.darkSection]}>
          {MARKETS.map((m) => (
            <Text style={styles.marketItem} key={m}>{m}</Text>
          ))}
          <Text style={styles.marketBig}>Local stories. Global standard.</Text>
        </View>

        {/* Capabilities */}
        <View style={[styles.section, styles.darkSection]}>
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
        </View>

        {/* Work */}
        <View style={[styles.section, styles.paperSection]}>
          <Text style={[styles.h2, styles.inkText]}>The work{'\n'}in experience.</Text>
          <Text style={[styles.lead, styles.smokeText]}>Selected visual narratives</Text>
          {WORK.map((item) => (
            <ImageBackground key={item.title} source={item.image} style={styles.card} imageStyle={styles.cardImage}>
              <View style={styles.cardScrim} />
              <Text style={styles.cardLabel}>{item.label}</Text>
              <Text style={styles.cardTitle}>{item.title}</Text>
              {item.small ? <Text style={styles.cardSmall}>{item.small}</Text> : null}
            </ImageBackground>
          ))}
        </View>

        {/* Film reel */}
        <View style={[styles.section, styles.darkSection]}>
          <Tag>FUTÉ moving image / concept previews</Tag>
          <Text style={styles.h2}>The feeling{'\n'}before the frame.</Text>
          <Text style={styles.lead}>
            A few film directions that put a person, not a property, at the centre of the experience.
          </Text>
          {FILMS.map((film) => (
            <ImageBackground key={film.meta} source={film.image} style={styles.filmCard} imageStyle={styles.cardImage}>
              <View style={styles.cardScrim} />
              <Text style={styles.filmMeta}>Film placeholder / 00:15 · {film.meta}</Text>
              <Text style={styles.filmTitle}>{film.title}</Text>
              <Text style={styles.filmCopy}>{film.copy}</Text>
            </ImageBackground>
          ))}
          <Text style={styles.smallNote}>
            Concept placeholders only — final character, locations, rights and production status require approval.
          </Text>
        </View>

        {/* Buyer signal */}
        <View style={[styles.section, styles.redSection]}>
          <Tag>Start with the next buyer question</Tag>
          <Text style={[styles.h2, { color: PAPER }]}>
            What should your buyer understand, feel and explore?
          </Text>
          <Text style={[styles.lead, { color: PAPER }]}>
            Start with the question your buyers find hardest to understand: the location, the lifestyle, the plan
            or the choice between options.
          </Text>
          <View style={styles.wheelRow}>
            {WHEEL.map((w) => (
              <View style={styles.wheelChip} key={w}>
                <Text style={styles.wheelChipText}>{w}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Experience */}
        <View style={[styles.section, styles.darkSection]}>
          <Tag>Connected buyer journey</Tag>
          <Text style={styles.h2}>Six buyer questions.{'\n'}One coherent experience.</Text>
          {JOURNEY.map(([num, label]) => (
            <View style={styles.journeyRow} key={num}>
              <Text style={styles.rowNumber}>{num}</Text>
              <Text style={styles.journeyLabel}>{label}</Text>
            </View>
          ))}
          <Text style={styles.smallNote}>Location · spaces · options · next step</Text>
        </View>

        {/* Lifecycle */}
        <View style={[styles.section, styles.paperSection]}>
          <Text style={[styles.tag]}>Buyer story system / lifestyle film</Text>
          <Text style={[styles.h2, styles.inkText]}>Life, in every frame.</Text>
          <Text style={[styles.lead, styles.smokeText]}>
            A lifestyle film begins with a character, then follows the moments where architecture becomes part of
            that person's day.
          </Text>
          {BEATS.map(([time, title, copy]) => (
            <View style={styles.beat} key={title}>
              <Text style={styles.beatTime}>{time}</Text>
              <Text style={styles.rowTitleInk}>{title}</Text>
              <Text style={styles.beatCopy}>{copy}</Text>
            </View>
          ))}
        </View>

        {/* AI section */}
        <View style={[styles.section, styles.darkSection]}>
          <Tag>AI-supported creative production</Tag>
          <Text style={styles.h2}>The character gives us someone to follow.</Text>
          <Text style={styles.lead}>
            AI supports character creation and creative production. The buyer remains the point of view.
          </Text>
          <Text style={styles.smallNote}>
            Character / wardrobe / light / camera / continuity{'\n'}Approve the story before you make the frame.
          </Text>
          <ImageBackground
            source={require('./assets/images/ai-arrival.webp')}
            style={styles.aiImage}
            imageStyle={styles.cardImage}
          >
            <View style={styles.cardScrim} />
            <Text style={styles.filmMeta}>Conceptual visual reference / supplied image library</Text>
          </ImageBackground>
        </View>

        {/* Systems */}
        <View style={[styles.section, styles.paperSection]}>
          <Text style={[styles.tag]}>Commercial offer</Text>
          <Text style={[styles.h2, styles.inkText]}>Four commercial systems.</Text>
          <Text style={[styles.lead, styles.smokeText]}>
            Create a consistent structure across projects, markets and approved assets.
          </Text>
          {SYSTEMS.map(([number, title, copy]) => (
            <View style={styles.row} key={number}>
              <Text style={styles.rowNumber}>{number}</Text>
              <View style={styles.rowBody}>
                <Text style={styles.rowTitleInk}>{title}</Text>
                <Text style={styles.beatCopy}>{copy}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Delivery */}
        <View style={[styles.section, styles.darkSection]}>
          <Tag>One approved vision / carried through delivery</Tag>
          <Text style={styles.h2}>How teams align.</Text>
          <Text style={styles.lead}>
            Leadership, design, marketing and sales. One approved project story, centred on the buyer.
          </Text>
          {DELIVERY.map(([number, title, copy]) => (
            <View style={styles.row} key={number}>
              <Text style={styles.rowNumber}>{number}</Text>
              <View style={styles.rowBody}>
                <Text style={styles.rowTitle}>{title}</Text>
                <Text style={styles.rowCopy}>{copy}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Voice */}
        <View style={[styles.section, styles.paperSection]}>
          <Text style={[styles.tag]}>A voice people recognise</Text>
          <Text style={[styles.h2, styles.inkText]}>Begin with the person.</Text>
          {VOICE.map(([title, copy]) => (
            <View style={styles.voiceItem} key={title}>
              <Text style={styles.rowTitleInk}>{title}</Text>
              <Text style={styles.beatCopy}>{copy}</Text>
            </View>
          ))}
        </View>

        {/* Perspective */}
        <View style={[styles.section, styles.darkSection]}>
          <Tag>FUTÉ 2.0 / global perspective</Tag>
          <Text style={styles.h2}>A world of different perspectives.</Text>
          <Text style={styles.lead}>
            A distinctly local project story, held to an international standard of experience.
          </Text>
          <View style={styles.marketGrid}>
            {MARKETS.map((m) => (
              <Text style={styles.marketGridItem} key={m}>{m}</Text>
            ))}
          </View>
          <View style={styles.perspectiveLine}>
            <Text style={styles.rowTitle}>The client and the buyer</Text>
            <Text style={styles.rowCopy}>
              The developer is FUTÉ's client. The property buyer is the developer's customer. Every output must
              serve the developer's communication needs and the buyer's understanding.
            </Text>
          </View>
        </View>

        {/* Clients */}
        <View style={[styles.section, styles.paperSection]}>
          <Text style={[styles.tag]}>Client list</Text>
          <Text style={[styles.h2, styles.inkText]}>Built with{'\n'}ambition.</Text>
          <Text style={[styles.lead, styles.smokeText]}>Selected client and collaborator logos supplied by FUTÉ.</Text>
          <Image source={require('./assets/images/clients-a.webp')} style={styles.clientLogo} resizeMode="contain" />
          <Image source={require('./assets/images/clients-b.webp')} style={styles.clientLogo} resizeMode="contain" />
          <Text style={[styles.smallNote, { color: '#706a62', textAlign: 'left' }]}>
            {COLLABORATORS.join('   ·   ')}
          </Text>
        </View>

        {/* Case study */}
        <View style={[styles.section, styles.redSection]}>
          <Text style={[styles.tag, { color: INK }]}>Client testimonial</Text>
          <Text style={[styles.h2, { color: PAPER }]}>Hiranandani Sands,{'\n'}Alibaug.</Text>
          <Text style={styles.blockquote}>
            "All serviced apartments at Hiranandani Sands, Alibaug has been sold out in 1 day i.e. Saturday and
            that too in record time."
          </Text>
          <Text style={styles.cite}>Sumon Das</Text>
        </View>

        {/* Footer */}
        <View style={[styles.section, styles.paperSection]}>
          <View style={styles.footerHead}>
            <Text style={styles.footerHeadText}>FUTÉ 2.0</Text>
            <Text style={styles.footerHeadText}>The Real Estate Buyer Experience Company</Text>
          </View>
          <Image source={require('./assets/images/logo.png')} style={styles.footerLogo} resizeMode="contain" />
          <Text style={[styles.footerH2, styles.inkText]}>
            Start with{'\n'}your <Text style={{ color: RED }}>next question.</Text>
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Linking.openURL('mailto:Soma@futeservices.com?subject=FUT%C3%89%202.0%20project%20enquiry')
            }
          >
            <Text style={styles.buttonText}>Discuss your project</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonOutline]}
            onPress={() => Linking.openURL('https://fute-redesigned.vercel.app/documents/fute-services-2026-company-profile.pdf')}
          >
            <Text style={[styles.buttonText, styles.buttonOutlineText]}>Brochure</Text>
          </TouchableOpacity>
          <View style={styles.emails}>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:Soma@futeservices.com')}>
              <Text style={styles.emailLink}>Soma@futeservices.com</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:Payel@futeservices.com')}>
              <Text style={styles.emailLink}>Payel@futeservices.com</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.smallNote, { color: '#706a62', marginTop: 16 }]}>
            India / Singapore / UAE · Dubai / Australia
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: INK },
  appScroll: { flex: 1 },
  darkSection: { backgroundColor: INK },
  paperSection: { backgroundColor: PAPER },
  redSection: { backgroundColor: RED },
  section: { padding: 24, gap: 16 },

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

  factRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 20, paddingTop: 16, borderTopWidth: 1, borderTopColor: '#332f2a' },
  fact: { width: '42%' },
  factNum: { fontFamily: SERIF, color: RED, fontSize: 22, marginBottom: 6 },
  factLabel: { color: PAPER, fontSize: 10, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase' },

  tag: { color: RED, fontSize: 10, fontWeight: '700', letterSpacing: 1.4, textTransform: 'uppercase' },
  smallTag: { color: SAND, fontSize: 9, fontWeight: '700', letterSpacing: 1.2, textTransform: 'uppercase' },
  h2: { fontFamily: SERIF, color: PAPER, fontSize: 30, fontWeight: '400', lineHeight: 32, letterSpacing: -1 },
  inkText: { color: INK },
  smokeText: { color: '#706a62' },
  lead: { color: SMOKE, fontSize: 15, lineHeight: 21, fontFamily: SERIF },
  smallNote: { color: SAND, fontSize: 10, fontWeight: '700', letterSpacing: 1, lineHeight: 16, textAlign: 'left' },

  triadRow: { gap: 10 },
  triadCell: { padding: 18, borderRadius: 2, minHeight: 100, justifyContent: 'space-between' },
  triadLabel: { fontSize: 10, fontWeight: '700', letterSpacing: 1.2, textTransform: 'uppercase' },
  triadTitle: { fontFamily: SERIF, fontSize: 24, marginTop: 10 },

  marketPulse: { paddingVertical: 20, paddingHorizontal: 24, borderTopWidth: 1, borderColor: '#332f2a', gap: 6 },
  marketItem: { color: SAND, fontSize: 11, fontWeight: '700', letterSpacing: 1.2, textTransform: 'uppercase' },
  marketBig: { fontFamily: SERIF, color: PAPER, fontSize: 18, marginTop: 8 },

  row: { flexDirection: 'row', gap: 14, paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: '#332f2a', alignItems: 'flex-start' },
  rowNumber: { color: RED, fontSize: 11, fontWeight: '700' },
  rowBody: { flex: 1 },
  rowTitle: { color: PAPER, fontSize: 12, fontWeight: '700', letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 6 },
  rowTitleInk: { color: INK, fontSize: 12, fontWeight: '700', letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 6 },
  rowCopy: { fontFamily: SERIF, color: SMOKE, fontSize: 18, lineHeight: 22 },
  rowArrow: { color: RED, fontSize: 18 },

  card: { height: 220, borderRadius: 2, overflow: 'hidden', justifyContent: 'flex-end', padding: 18, marginBottom: 4 },
  cardImage: { resizeMode: 'cover' },
  cardScrim: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(10,10,9,0.4)' },
  cardLabel: { color: '#ded9cf', fontSize: 9, fontWeight: '700', letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 8 },
  cardTitle: { fontFamily: SERIF, color: PAPER, fontSize: 24, lineHeight: 26, letterSpacing: -0.5 },
  cardSmall: { color: '#ded9cf', fontSize: 10, fontWeight: '700', letterSpacing: 1, marginTop: 8, textTransform: 'uppercase' },

  filmCard: { height: 260, borderRadius: 2, overflow: 'hidden', justifyContent: 'flex-end', padding: 18, marginBottom: 4 },
  filmMeta: { color: '#ded9cf', fontSize: 9, fontWeight: '700', letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 8 },
  filmTitle: { fontFamily: SERIF, color: PAPER, fontSize: 22, marginBottom: 6 },
  filmCopy: { color: '#ded9cf', fontSize: 13, lineHeight: 18, maxWidth: 320 },

  wheelRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  wheelChip: { borderWidth: 1, borderColor: 'rgba(241,238,232,0.6)', borderRadius: 99, paddingHorizontal: 14, paddingVertical: 8 },
  wheelChipText: { color: PAPER, fontSize: 10, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase' },

  journeyRow: { flexDirection: 'row', gap: 14, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: 'rgba(241,238,232,0.42)' },
  journeyLabel: { fontFamily: SERIF, color: PAPER, fontSize: 22 },

  beat: { paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#bcb4a9', gap: 6 },
  beatTime: { color: RED, fontSize: 10, fontWeight: '700' },
  beatCopy: { fontFamily: SERIF, color: '#706a62', fontSize: 15, lineHeight: 19 },

  aiImage: { height: 260, borderRadius: 2, overflow: 'hidden', justifyContent: 'flex-end', padding: 18 },

  voiceItem: { paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#bcb4a9', gap: 6 },

  marketGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, borderTopWidth: 1, borderColor: 'rgba(241,238,232,0.42)', paddingTop: 14 },
  marketGridItem: { color: PAPER, fontSize: 11, fontWeight: '700', letterSpacing: 1.2, textTransform: 'uppercase', width: '45%' },
  perspectiveLine: { borderTopWidth: 1, borderColor: 'rgba(241,238,232,0.42)', paddingTop: 16, gap: 8 },

  clientLogo: { width: '100%', height: 140, backgroundColor: '#fff' },

  blockquote: { fontFamily: SERIF, color: PAPER, fontSize: 24, lineHeight: 28, letterSpacing: -0.5 },
  cite: { color: INK, fontSize: 11, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase' },

  footerHead: { flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  footerHeadText: { color: INK, fontSize: 10, fontWeight: '700', letterSpacing: 1.2, textTransform: 'uppercase' },
  footerLogo: { width: 140, height: 45, marginTop: 12 },
  footerH2: { fontFamily: SERIF, fontSize: 48, fontWeight: '400', lineHeight: 44, letterSpacing: -1.5, marginTop: 8, marginBottom: 4 },
  button: { backgroundColor: INK, paddingVertical: 17, paddingHorizontal: 20, alignItems: 'center', marginTop: 4 },
  buttonOutline: { backgroundColor: 'transparent', borderWidth: 1, borderColor: INK },
  buttonText: { color: PAPER, fontSize: 11, fontWeight: '700', letterSpacing: 1.2, textTransform: 'uppercase' },
  buttonOutlineText: { color: INK },
  emails: { gap: 6, marginTop: 20 },
  emailLink: { color: INK, fontSize: 16, fontFamily: SERIF },
});
