import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import SectionTitle from '../components/SectionTitle';
import { bicycles, categories } from '../data/bicycles';

const Home = () => {
  const featuredBicycles = bicycles.filter((bike) => bike.isFeatured).slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] bg-gradient-to-br from-stone-900 to-stone-700">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1200&q=80')"
          }}
        />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-wide">
              Pedal Zone Bicycles
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 mb-8 font-light">
              Crafted for the Road. Inspired by Tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/bicycles" variant="primary" className="text-lg px-8 py-3">
                Shop Bicycles
              </Button>
              <Button to="/gallery" variant="secondary" className="text-lg px-8 py-3 bg-white border-white text-stone-900 hover:bg-stone-100">
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bicycles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Featured Bicycles"
            subtitle="Handpicked classics from our premium collection"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBicycles.map((bicycle) => (
              <ProductCard key={bicycle.id} item={bicycle} type="bicycle" />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/bicycles" variant="dark" className="text-lg px-8 py-3">
              View All Bicycles
            </Button>
          </div>
        </div>
      </section>

      {/* Meet the Owner Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Meet the Owner"
            subtitle="Edward Morrison - Founder of Pedal Zone Bicycles"
          />
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-in">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" 
                    alt="Edward Morrison"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-4xl font-serif font-bold text-stone-900 mb-6">
                    Edward Morrison
                  </h3>
                  <div className="h-1 w-24 bg-amber-700 rounded"></div>
                </div>
                
                <div className="prose prose-lg text-slate-700 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Born in 1925 in Birmingham, England, Edward Morrison discovered his passion for 
                    bicycles at the age of twelve when he received his first bike—a worn-out roadster 
                    that he painstakingly restored to its former glory. This early experience ignited 
                    a lifelong dedication to the art of bicycle craftsmanship.
                  </p>
                  <p className="text-lg leading-relaxed">
                  After serving as an aircraft mechanic during World War II, Edward brought his 
                  precision engineering skills to the world of bicycle making. In 1947, at just 22 
                  years old, he founded Pedal Zone Bicycles in a small London workshop with nothing 
                  but his tools, his vision, and an unwavering commitment to excellence.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Over seven decades, Edward has handcrafted over 5,000 bicycles, each one a 
                    testament to his meticulous attention to detail and deep understanding of frame 
                    geometry, materials, and riding dynamics. His philosophy is simple yet profound: 
                    "A bicycle should be a lifelong companion, built to last generations and bring 
                    joy to every journey."
                  </p>
                </div>
              </div>
            </div>

            {/* Awards and Recognition */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 animate-fade-in">
              <h3 className="text-3xl font-serif font-bold text-stone-900 mb-8 text-center">
                Awards & Recognition
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-xl">
                  <div className="text-4xl">🏆</div>
                  <div>
                    <h4 className="text-xl font-semibold text-stone-900 mb-2">
                      British Cycling Heritage Award
                    </h4>
                    <p className="text-slate-600">
                      Lifetime Achievement Award for outstanding contribution to British cycling 
                      heritage and craftsmanship (2015)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-xl">
                  <div className="text-4xl">⭐</div>
                  <div>
                    <h4 className="text-xl font-semibold text-stone-900 mb-2">
                      Master Craftsman Recognition
                    </h4>
                    <p className="text-slate-600">
                      Awarded Master Craftsman status by the Guild of British Framebuilders 
                      for 50 years of exceptional service (2012)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-xl">
                  <div className="text-4xl">🎖️</div>
                  <div>
                    <h4 className="text-xl font-semibold text-stone-900 mb-2">
                      Order of the British Empire (OBE)
                    </h4>
                    <p className="text-slate-600">
                      Honored by Her Majesty Queen Elizabeth II for services to British 
                      manufacturing and cycling culture (2018)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-xl">
                  <div className="text-4xl">📚</div>
                  <div>
                    <h4 className="text-xl font-semibold text-stone-900 mb-2">
                      Author & Educator
                    </h4>
                    <p className="text-slate-600">
                      Published "The Art of Frame Building" (2008), now considered the definitive 
                      guide to traditional bicycle construction
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dedication and Philosophy */}
            <div className="bg-gradient-to-r from-stone-900 to-stone-700 rounded-2xl shadow-xl p-8 md:p-12 text-white mb-12 animate-fade-in">
              <div className="max-w-4xl mx-auto text-center">
                <div className="text-6xl mb-6">💝</div>
                <h3 className="text-3xl font-serif font-bold mb-6">
                  Dedication to the Craft
                </h3>
                <blockquote className="text-xl md:text-2xl font-light italic leading-relaxed mb-6">
                  "Every frame I build carries a piece of my soul. I don't just create bicycles; 
                  I create companions for life's adventures. When someone rides one of my bikes, 
                  they're not just experiencing superior engineering—they're feeling decades of 
                  passion, countless hours of refinement, and an unbreakable commitment to excellence."
                </blockquote>
                <p className="text-lg text-stone-300">
                  — Edward Morrison, Master Frame Builder
                </p>
              </div>
            </div>

            {/* Legacy and Contributions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-8 bg-white rounded-xl shadow-lg animate-fade-in">
                <div className="text-5xl mb-4">🔧</div>
                <div className="text-4xl font-bold text-amber-700 mb-2">5,000+</div>
                <p className="text-lg text-stone-900 font-semibold mb-2">Bicycles Crafted</p>
                <p className="text-slate-600">Each one hand-built with meticulous attention to detail</p>
              </div>
              <div className="text-center p-8 bg-white rounded-xl shadow-lg animate-fade-in">
                <div className="text-5xl mb-4">👨‍🏫</div>
                <div className="text-4xl font-bold text-amber-700 mb-2">50+</div>
                <p className="text-lg text-stone-900 font-semibold mb-2">Apprentices Trained</p>
                <p className="text-slate-600">Passing on traditional skills to the next generation</p>
              </div>
              <div className="text-center p-8 bg-white rounded-xl shadow-lg animate-fade-in">
                <div className="text-5xl mb-4">🌍</div>
                <div className="text-4xl font-bold text-amber-700 mb-2">75+</div>
                <p className="text-lg text-stone-900 font-semibold mb-2">Years of Excellence</p>
                <p className="text-slate-600">Nearly eight decades of unwavering quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Our Story"
              subtitle="A legacy of craftsmanship spanning generations"
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

      {/* Categories Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Explore Our Collection"
            subtitle="Discover the perfect bicycle for your journey"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            Begin Your Journey Today
          </h2>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Visit our showroom or browse our collection online to find your perfect classic bicycle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/bicycles" variant="primary" className="text-lg px-8 py-3">
              Shop Now
            </Button>
            <Button to="/contact" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-stone-900">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

