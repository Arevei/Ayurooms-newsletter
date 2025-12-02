import Image from "next/image"
import Link from "next/link"

export default function NewsletterWelcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5fffe] via-[#fafbf8] to-[#fff9f0] flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 sm:py-20">
        <div className="max-w-2xl w-full text-center space-y-8 sm:space-y-10">
          {/* Logo with Wordmark */}
          <div className="flex justify-center mb-6 sm:mb-8  pb-10">
            <div className="w-72 h-auto">
              <Image
                src="/images/logo-color-2.png"
                alt="Ayurooms - Holistic Wellness Escapes"
                width={320}
                height={120}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Welcome and Deep Rooted Header */}
          <div className="flex flex-col items-center gap-4">
            
            <Image
              src="/images/Deep-Rooted-Wecome.png"
              alt="Deep Rooted Newsletter"
              width={500}
              height={140}
              className="w-auto h-30 md:h-34 max-w-full"
              priority
            />
          </div>

          {/* Subtitle */}
          {/* <div className="space-y-3">
            <p className="text-lg sm:text-xl text-[#666666] font-light font-subheading">
              Your Wellness Newsletter from Ayurooms
            </p>
          </div> */}

          {/* Quote Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-[#e8d5c4]/40 shadow-lg shadow-[#7eccc4]/5">
            <blockquote className="text-xl sm:text-2xl font-light text-[#3a3a3a] leading-relaxed font-heading">
              <span className="text-3xl sm:text-4xl text-[#ff9866] mr-2">"</span>
              When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need.
              <span className="text-3xl sm:text-4xl text-[#ff9866] ml-2">"</span>
            </blockquote>
          </div>

          {/* Thank You Section - Highlighted */}
          <div className="space-y-4">
             <div className="  border-2 border-[#ff9866] rounded-xl p-6 sm:p-8  text-[#ff9866] shadow-md">
              <p className="text-lg sm:text-2xl font-heading font-semibold text-[#2a2a2a]">
                Thank you for subscribing to our Newsletter!
              </p>
            </div>
            <p className="text-base sm:text-lg text-[#999999] font-sans">
              Join our community of wellness seekers and discover the path to holistic well-being through Ayurveda and
              natural healing.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4 sm:pt-6">
            <Link
              href="https://www.ayurooms.com/all-resorts.html/?utm_source=arevei&utm_medium=email&utm_campaign=thankyoupage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF7A59] hover:bg-[#ff6a45] text-white px-10 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg shadow-[#FF7A59]/30 transition-all hover:shadow-[#FF7A59]/40 font-heading"
            >
              Start Your Wellness Journey
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e8d5c4]/30 bg-white/50 backdrop-blur-sm py-6 sm:py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm sm:text-base text-[#999999] font-sans">
            © COPYRIGHT 2025 AYUROOMS AND WELLNESS PVT LTD <span className="text-[#e8d5c4] mx-2">|</span> Powered by{" "}
            <Link
              href="https://arevei.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-colors font-medium gradient-text"
            >
              Arevei Marketing
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
