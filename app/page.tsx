import { HeaderDemo } from '@/components/header-demo'
import NeswayHeroDemo from '@/components/nesway-hero'
import { ProductsSection } from '@/components/products-section'
import { NeswayFeatureWithImage } from '@/components/nesway-feature-with-image'
import { NeswayStickyCards } from '@/components/nesway-sticky-cards'
import NeswayFooter from '@/components/nesway-footer'

export default function Home() {
  return (
    <div className="relative">
      <HeaderDemo />
      <NeswayHeroDemo />
      <NeswayFeatureWithImage />
      <ProductsSection />
      <NeswayStickyCards />
      <NeswayFooter />
    </div>
  )
}