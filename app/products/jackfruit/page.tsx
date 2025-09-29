import { HeaderDemo } from '@/components/header-demo'
import NeswayFooter from '@/components/nesway-footer'

export default function Jackfruit() {
  return (
    <div className="relative min-h-screen">
      <HeaderDemo />
      

      {/* Main Content Container */}
      <div className="relative min-h-screen pt-24">
        <div className="container mx-auto px-4 py-8">
          
          {/* Product Title */}
          <div className="mb-8">
            <h1 className="text-display text-foreground">
              Jackfruit
            </h1>
          </div>

          {/* First Text Block - Right aligned */}
          <div className="mb-16">
            <p className="text-h4 italic text-muted-foreground max-w-3xl ml-auto text-right">
              Sustainably sourced jackfruit products. A versatile meat alternative packed with nutrients and flavor, perfect for plant-based cooking.
            </p>
          </div>

          {/* Two Images Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Main Product Image - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
                <img 
                  src="/images/jackf1.png" 
                  alt="Jackfruit Collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Product Shot - Takes 1 column */}
            <div className="lg:col-span-1">
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
                <img 
                  src="/images/jack2.png" 
                  alt="Jackfruit Product"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second Text Block - Full width */}
          <div className="mb-16">
            <p className="text-h4 text-muted-foreground leading-relaxed max-w-4xl">
              We create premium jackfruit varieties including Shredded, Pulled, and Chunks using traditional preparation methods and the finest quality fruit. Our natural ingredients deliver versatile, nutritious texture perfect for plant-based cooking with an impressive shelf life of up to 1 year at ambient temperature — rich nutrients, zero compromise on environmental responsibility and sustainability.
            </p>
          </div>

        </div>
      </div>

      <NeswayFooter />
    </div>
  )
}
