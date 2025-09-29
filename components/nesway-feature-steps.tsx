import { FeatureSteps } from "@/components/ui/feature-section"

const neswayFeatures = [
  { 
    step: 'Step 1', 
    title: 'Cleaner Labels, Better Choices',
    content: 'We create products with short, transparent ingredient lists — free from artificial preservatives, or unnecessary additives. Every recipe is crafted for pure taste and real nutrition.', 
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1000&auto=format&fit=crop&q=60' // Clean ingredients
  },
  { 
    step: 'Step 2',
    title: 'Smarter Food Tech, Natural Results',
    content: 'We explore every technology that locks in freshness, safety, and nutrition without compromising flavor. The result? Shelf-stable, future-proof food made naturally smarter.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&auto=format&fit=crop&q=60' // Food technology
  },
  { 
    step: 'Step 3',
    title: 'Rigorous Quality Standards',
    content: 'Every batch goes through rigorous testing for texture, taste, and safety. We obsess over consistency so what reaches you is exactly what we promised: high-quality, honest food.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1000&auto=format&fit=crop&q=60' // Quality testing
  },
]

export function NeswayFeatureSteps() {
  return (
      <FeatureSteps 
        features={neswayFeatures}
        title="3 Ways We Make Better Food For You"
        autoPlayInterval={5000}
        imageHeight="h-[500px]"
      />
  )
}
