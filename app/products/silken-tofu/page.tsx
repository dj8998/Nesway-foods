import { HeaderDemo } from '@/components/header-demo'
import NeswayFooter from '@/components/nesway-footer'

export default function SilkenTofu() {
  return (
    <div className="relative min-h-screen">
      <HeaderDemo />
      

      {/* Main Content Container */}
      <div className="relative min-h-screen pt-24">
        <div className="container mx-auto px-4 py-8">
          
          {/* Product Title */}
          <div className="mb-8">
            <h1 className="text-display text-foreground">
              Silken Tofu
            </h1>
          </div>

          {/* First Text Block - Right aligned */}
          <div className="mb-16">
            <p className="text-h4 italic text-muted-foreground max-w-3xl ml-auto text-right">
              Premium quality silken tofu, perfect for all your culinary needs. Rich in protein and incredibly versatile for both sweet and savory dishes.
            </p>
          </div>

          {/* Two Images Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Main Product Image - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
                <img 
                  src="/images/tofumain.jpg" 
                  alt="Silken Tofu Collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Product Shot - Takes 1 column */}
            <div className="lg:col-span-1">
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
                <img 
                  src="/images/tofu2.png" 
                  alt="Silken Tofu Product"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second Text Block - Full width */}
          <div className="mb-16">
            <p className="text-h4 text-muted-foreground leading-relaxed max-w-4xl">
              We create premium silken tofu varieties including Plain, Silken, and Extra Firm using traditional methods and the finest organic soybeans. Our natural ingredients deliver smooth, creamy texture perfect for both sweet and savory applications with an impressive shelf life of up to 1 year at ambient temperature — rich protein content, zero compromise on taste or texture.
            </p>
          </div>

        </div>
      </div>

      <NeswayFooter />
    </div>
  )
}