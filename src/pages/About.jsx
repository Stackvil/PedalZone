import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-stone-900 to-stone-700">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=1200&q=80')"
          }}
        />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 tracking-wide">
              About Pedal Zone
            </h1>
            <p className="text-xl text-stone-200">
              Crafting Excellence Since 1947
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Our Story"
              subtitle="A legacy of craftsmanship and passion"
            />
            <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
              <p className="text-lg leading-relaxed">
                Founded in 1947 in the heart of London, Pedal Zone Bicycles began as a small
                workshop where master craftsman Edward Morrison pursued his passion for creating
                the perfect bicycle. What started with a single handmade frame has grown into
                a renowned manufacturer of premium classic bicycles, beloved by cyclists worldwide.
              </p>
              <p className="text-lg leading-relaxed">
                Our philosophy has remained unchanged for over seven decades: every bicycle we
                create should be a perfect blend of timeless design, superior craftsmanship, and
                modern performance. We believe that a bicycle is more than just a means of
                transportation—it's a companion for life's adventures, a statement of style,
                and a joy to ride.
              </p>
              <p className="text-lg leading-relaxed">
                Today, Pedal Zone bicycles are handcrafted by skilled artisans using traditional
                techniques passed down through generations, combined with carefully selected modern
                components. Each frame is built with meticulous attention to detail, ensuring that
                every bicycle that leaves our workshop meets our exacting standards of quality and
                beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8 text-center animate-fade-in">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-serif font-semibold text-stone-900 mb-4">
                Quality
              </h3>
              <p className="text-slate-600">
                We never compromise on quality. Every component is carefully selected, and every
                frame is built to last a lifetime.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 text-center animate-fade-in">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-serif font-semibold text-stone-900 mb-4">
                Craftsmanship
              </h3>
              <p className="text-slate-600">
                Traditional techniques meet modern precision. Our artisans take pride in every
                weld, every joint, every detail.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 text-center animate-fade-in">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-serif font-semibold text-stone-900 mb-4">
                Sustainability
              </h3>
              <p className="text-slate-600">
                We build bicycles that last generations, not seasons. Sustainable materials and
                timeless design reduce waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Craftsmanship Process"
            subtitle="How we build bicycles that last a lifetime"
          />
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6 animate-fade-in">
              <div className="flex-shrink-0 w-16 h-16 bg-amber-700 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-stone-900 mb-2">
                  Design & Engineering
                </h3>
                <p className="text-slate-600 text-lg">
                  Each model begins with careful design, balancing aesthetics, ergonomics, and
                  performance. Our engineers ensure every frame geometry is optimized for comfort
                  and efficiency.
                </p>
              </div>
            </div>
            <div className="flex gap-6 animate-fade-in">
              <div className="flex-shrink-0 w-16 h-16 bg-amber-700 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-stone-900 mb-2">
                  Frame Construction
                </h3>
                <p className="text-slate-600 text-lg">
                  Master frame builders hand-craft each frame using premium steel tubing. Lugged
                  joints are brazed with precision, creating connections that are both strong and
                  beautiful.
                </p>
              </div>
            </div>
            <div className="flex gap-6 animate-fade-in">
              <div className="flex-shrink-0 w-16 h-16 bg-amber-700 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-stone-900 mb-2">
                  Finishing & Assembly
                </h3>
                <p className="text-slate-600 text-lg">
                  Frames are hand-painted with multiple coats for durability and luster. Premium
                  components from renowned manufacturers are carefully assembled and adjusted for
                  perfect performance.
                </p>
              </div>
            </div>
            <div className="flex gap-6 animate-fade-in">
              <div className="flex-shrink-0 w-16 h-16 bg-amber-700 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                4
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-stone-900 mb-2">
                  Quality Control
                </h3>
                <p className="text-slate-600 text-lg">
                  Every bicycle undergoes rigorous inspection and test riding before it's approved
                  to leave our workshop. We stand behind our work with comprehensive warranties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            Experience Pedal Zone
          </h2>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Visit our showroom to see our craftsmen at work and find your perfect bicycle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/bicycles" variant="primary" className="text-lg px-8 py-3">
              Browse Collection
            </Button>
            <Button to="/contact" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-stone-900">
              Visit Showroom
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

