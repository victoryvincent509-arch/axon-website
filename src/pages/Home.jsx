import HeroHome from '../components/home/HeroHome'
import FeaturedProducts from '../components/home/FeaturedProducts'
import CollectionsPreview from '../components/home/CollectionsPreview'
import BrandStatement from '../components/home/BrandStatement'
import JournalPreview from '../components/home/JournalPreview'
import VisualFeed from '../components/home/VisualFeed'

export default function Home() {
  return (
    <>
      <HeroHome />
      <FeaturedProducts />
      <CollectionsPreview />
      <BrandStatement />
      <JournalPreview />
      <VisualFeed />
    </>
  )
}
