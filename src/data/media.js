/** Unsplash & Pexels URLs — each used once site-wide */
const q = (id, w = 1920) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`

export const heroSlides = [
  {
    type: 'image',
    src: q('photo-1469334031218-e382a71b716b'),
    badge: 'New Collection',
    title: 'SILHOUETTE / FORM',
    desc: 'Sculpted layers for cities that never sleep.',
  },
  {
    type: 'video',
    src: 'https://videos.pexels.com/video-files/3044128/3044128-hd_1920_1080_25fps.mp4',
    poster: q('photo-1509631179647-0177331693ae'),
    badge: 'Motion',
    title: 'VELOCITY / GRACE',
    desc: 'Engineered movement. Cinematic presence.',
  },
  {
    type: 'image',
    src: q('photo-1548036328-c9fa89d128fa'),
    badge: 'Objects',
    title: 'CARRY / COMMAND',
    desc: 'Hardware-grade carry. Silence in the details.',
  },
  {
    type: 'image',
    src: q('photo-1523381210434-271e8be1f52b'),
    badge: 'Footwear Lab',
    title: 'TRACTION / LIGHT',
    desc: 'Sole systems tuned for midnight miles.',
  },
  {
    type: 'image',
    src: q('photo-1490481651871-ab68de25d43d'),
    badge: 'Editorial',
    title: 'AXON / WORLD',
    desc: 'Global codes. One signal.',
  },
]

export const homeFeatured = [
  {
    name: 'Monolith Overcoat',
    category: 'Clothes',
    price: '$680',
    img: q('photo-1539533113208-f6df8cc8b543', 900),
  },
  {
    name: 'Pulse Runner',
    category: 'Shoes',
    price: '$240',
    img: q('photo-1542291026-7eec264c27ff', 900),
  },
  {
    name: 'Vector Tote',
    category: 'Bags',
    price: '$420',
    img: q('photo-1590874103328-eac38a683ce7', 900),
  },
  {
    name: 'Signal Field Jacket',
    category: 'Clothes',
    price: '$520',
    img: q('photo-1551028719-00167b16eac5', 900),
  },
]

export const homeCollections = [
  {
    slug: 'black',
    title: 'Axon Black',
    desc: 'Noir architecture. Matte precision.',
    img: q('photo-1509631179647-0177331693ae', 1600),
    accent: 'from-black/80',
  },
  {
    slug: 'ice',
    title: 'Axon Ice',
    desc: 'Crystalline tones. Cold clarity.',
    img: q('photo-1515886657613-9f3515b0c78f', 1600),
    accent: 'from-cyan-950/70',
  },
  {
    slug: 'volt',
    title: 'Axon Volt',
    desc: 'Electric contrast. High voltage.',
    img: q('photo-1529139574466-a303027c1d8b', 1600),
    accent: 'from-yellow-500/20',
  },
  {
    slug: 'origin',
    title: 'Axon Origin',
    desc: 'Earth tones. Raw refinement.',
    img: q('photo-1520367445093-50dc08a59d9d', 1600),
    accent: 'from-amber-950/60',
  },
]

export const homeJournal = [
  {
    tag: 'Culture',
    title: 'Night Codes: How Cities Wear AXON',
    excerpt: 'From Lagos skylines to Tokyo alleys — a field study in contrast and cut.',
    date: 'Mar 12, 2026',
    img: q('photo-1445205170230-053b83016050', 1000),
  },
  {
    tag: 'Design',
    title: 'The Geometry of Quiet Luxury',
    excerpt: 'Why sharp radius, honest materials, and restraint read as power.',
    date: 'Feb 28, 2026',
    img: q('photo-1483985988355-763728e1935b', 1000),
  },
  {
    tag: 'Studio',
    title: 'Inside the Footwear Lab',
    excerpt: 'Prototyping traction patterns for wet asphalt and dry heat.',
    date: 'Jan 9, 2026',
    img: q('photo-1460353581641-37baddab0fa2', 1000),
  },
]

export const homeFeed = [
  q('photo-1503342217505-b0a15ec3261c', 800),
  q('photo-1581044777550-4cfa60707c03', 800),
  q('photo-1487222477894-8943e31ef7b2', 800),
  q('photo-1558769132-cb1aea458c5e', 800),
  q('photo-1515377905703-c4788e51af15', 800),
  q('photo-1529139574466-a303027c1d8b', 800),
]

export const megaMenuProducts = [
  { label: 'Clothes', to: '/products?cat=clothes', img: q('photo-1551698618-1dfe5d97d256', 600) },
  { label: 'Shoes', to: '/products?cat=shoes', img: q('photo-1542291026-7eec264c27ff', 600) },
  { label: 'Bags', to: '/products?cat=bags', img: q('photo-1590874103328-eac38a683ce7', 600) },
]

export const productsHeroImg = q('photo-1550639525-c97d455acf70', 2200)

export const productsCatalog = [
  // CLOTHES (8)
  { id: 'p1', name: 'Carbon Shell Parka', category: 'clothes', price: '$890', img: q('photo-1591047139829-d91aecb6caea', 900) },
  { id: 'p2', name: 'Meridian Crew', category: 'clothes', price: '$180', img: q('photo-1521572163474-6864f9cf17ab', 900) },
  { id: 'p3', name: 'Obsidian Suiting Blazer', category: 'clothes', price: '$720', img: q('photo-1507679799987-c73779587ccf', 900) },
  { id: 'p4', name: 'Relay Knit', category: 'clothes', price: '$210', img: q('photo-1516762689617-e1cffcef479d', 900) },
  { id: 'p5', name: 'Void Trench Coat', category: 'clothes', price: '$850', img: q('photo-1544923246-77307dd654cb', 900) },
  { id: 'p6', name: 'Phase Cargo Pants', category: 'clothes', price: '$340', img: q('photo-1473966968600-fa801b869a1a', 900) },
  { id: 'p7', name: 'Axis Turtleneck', category: 'clothes', price: '$195', img: q('photo-1583743814966-8936f5b7be1a', 900) },
  { id: 'p8', name: 'Spectrum Windbreaker', category: 'clothes', price: '$460', img: q('photo-1551028719-00167b16eac5', 900) },

  // SHOES (8)
  { id: 'p9', name: 'Arc Stride', category: 'shoes', price: '$260', img: q('photo-1460353581641-37baddab0fa2', 900) },
  { id: 'p10', name: 'Ion Court', category: 'shoes', price: '$220', img: q('photo-1542291026-7eec264c27ff', 900) },
  { id: 'p11', name: 'Drift Low', category: 'shoes', price: '$198', img: q('photo-1491553895911-0055eca6402d', 900) },
  { id: 'p12', name: 'Flux Runner', category: 'shoes', price: '$285', img: q('photo-1539185441755-769473a23570', 900) },
  { id: 'p13', name: 'Cipher Boot', category: 'shoes', price: '$420', img: q('photo-1520639888713-7851133b1ed0', 900) },
  { id: 'p14', name: 'Vector Mid', category: 'shoes', price: '$310', img: q('photo-1525966222134-fcfa99b8ae77', 900) },
  { id: 'p15', name: 'Pulse High', category: 'shoes', price: '$350', img: q('photo-1606107557195-0e29a4b5b4aa', 900) },
  { id: 'p16', name: 'Signal Slide', category: 'shoes', price: '$145', img: q('photo-1600185365483-26d7a4cc7519', 900) },

  // BAGS (8)
  { id: 'p17', name: 'Lattice Duffel', category: 'bags', price: '$540', img: q('photo-1548036328-c9fa89d128fa', 900) },
  { id: 'p18', name: 'Cipher Backpack', category: 'bags', price: '$380', img: q('photo-1622560480654-d96214fdc887', 900) },
  { id: 'p19', name: 'Axis Messenger', category: 'bags', price: '$310', img: q('photo-1473188588951-666fce8e7c68', 900) },
  { id: 'p20', name: 'Monolith Tote', category: 'bags', price: '$290', img: q('photo-1584917865442-de89df76afd3', 900) },
  { id: 'p21', name: 'Grid Crossbody', category: 'bags', price: '$245', img: q('photo-1566150905458-1bf1fc113f0d', 900) },
  { id: 'p22', name: 'Void Clutch', category: 'bags', price: '$180', img: q('photo-1575032617751-6ddec2089882', 900) },
  { id: 'p23', name: 'Phase Weekender', category: 'bags', price: '$620', img: q('photo-1491637639811-60e2756cc1c7', 900) },
  { id: 'p24', name: 'Carbon Card Holder', category: 'bags', price: '$95', img: q('photo-1627123424574-724758594e93', 900) },
]

export const collectionsPage = [
  {
    key: 'black',
    title: 'Axon Black',
    season: 'FW 2026',
    desc: 'Depth without noise. Matte blacks, graphite hardware, and surgical tailoring.',
    img: q('photo-1509631179647-0177331693ae', 2000),
    mood: 'dark',
  },
  {
    key: 'ice',
    title: 'Axon Ice',
    season: 'SS 2026',
    desc: 'Glacial palettes, glassy surfaces, and breathable layers for heat and haze.',
    img: q('photo-1515886657613-9f3515b0c78f', 2000),
    mood: 'ice',
  },
  {
    key: 'volt',
    title: 'Axon Volt',
    season: 'Capsule 02',
    desc: 'Voltage yellows, cobalt sparks, and kinetic graphics for night economies.',
    img: q('photo-1529139574466-a303027c1d8b', 2000),
    mood: 'volt',
  },
  {
    key: 'origin',
    title: 'Axon Origin',
    season: 'Archive',
    desc: 'Terracotta, olive, and stone — materials that age with intention.',
    img: q('photo-1520367445093-50dc08a59d9d', 2000),
    mood: 'origin',
  },
]

export const collectionsHeroImg = q('photo-1539109136881-3be0616acf4b', 2200)

export const aboutStoryImg = q('photo-1551698618-1dfe5d97d256', 1400)
export const aboutTeam = [
  { name: 'Victory Vincent', role: 'Creative Director', img: q('photo-1507003211169-0a1dd7228f2d', 800) },
  { name: 'Amara Osei', role: 'Head of Product', img: q('photo-1531123897727-8f129e1688ce', 800) },

  { name: 'Jonah Reye', role: 'Lead Footwear Engineer', img: q('photo-1500648767791-00dcc994a43e', 800) },
  { name: 'Sofia Lind', role: 'Global Retail Director', img: q('photo-1438761681033-6461ffad8d80', 800) },
]
export const aboutTimelineBg = q('photo-1441984904996-e0b6f687d32a', 1600)
export const aboutClosingImg = q('photo-1483985988355-763728e1935b', 1600)

export const storesHeroImg = q('photo-1441986300917-64674bd600d8', 2200)
export const storesList = [
  { city: 'New York', address: '428 Mercer St, SoHo', hours: 'Mon–Sat 10–8, Sun 11–7', img: q('photo-1518002171953-a080ee817e1f', 1200) },
  { city: 'London', address: '14 Floral St, Covent Garden', hours: 'Mon–Sat 10–7, Sun 11–6', img: q('photo-1513635269975-59663e0ac1ad', 1200) },
  { city: 'Tokyo', address: '5-10-1 Jingumae, Shibuya', hours: 'Daily 11–9', img: q('photo-1540959733332-eab4deabeeaf', 1200) },
  { city: 'Paris', address: '18 Rue de Turenne, Le Marais', hours: 'Tue–Sat 10–7', img: q('photo-1502602898657-3e91760cbb34', 1200) },
  { city: 'Dubai', address: 'Dubai Mall, Fashion Ave', hours: 'Daily 10–12', img: q('photo-1526495124232-a04e1849168c', 1200) },
  { city: 'Milan', address: 'Via della Spiga 26', hours: 'Tue–Sun 10–7', img: q('photo-1539109136881-3be0616acf4b', 1200) },
  { city: 'Lagos', address: 'Victoria Island Flagship', hours: 'Mon–Sat 9–9', img: 'https://images.pexels.com/photos/32014864/pexels-photo-32014864.jpeg' },
  { city: 'Los Angeles', address: '8420 Melrose Ave', hours: 'Mon–Sun 11–8', img: q('photo-1534430480872-3498386e7856', 1200) },
]

export const contactHeroImg = q('photo-1423666639041-f56000c27a9a', 2200)

/** Store coordinates for Leaflet [lat, lng] */
export const storeCoords = {
  'New York': [40.7128, -74.006],
  London: [51.5074, -0.1278],
  Tokyo: [35.6762, 139.6503],
  Paris: [48.8566, 2.3522],
  Dubai: [25.2048, 55.2708],
  Lagos: [6.5244, 3.3792],
  Milan: [45.4642, 9.19],
  'Los Angeles': [34.0522, -118.2437],
}