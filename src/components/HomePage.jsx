import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Users, Heart, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

function HomePage() {
  return (
    <div className="bg-[#F6F8F7]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00D9C6] to-[#8CF45D] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Empower Your <span className="text-[#F6F8F7]">Healthcare Journey</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Learn to become an effective self-advocate in healthcare with tailored guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#00D9C6] text-white hover:bg-[#8CF45D] font-semibold px-8 py-3 text-lg rounded-lg transition-all duration-200 shadow-lg"
                asChild
              >
                <Link to="/services">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                className="bg-[#00D9C6] hover:bg-[#8CF45D] text-white font-semibold px-8 py-3 text-lg rounded-lg transition-all duration-200"
                asChild
              >
                <Link to="/appointments">Schedule an Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3D3F] mb-4">
              Why Choose Epiphany Health & Safety?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive healthcare advocacy education for doctors, patients, lawyers, and healthcare professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-[#F6F8F7] hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-[#00D9C6] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#3E3D3F] mb-4">Expert Guidance</h3>
              <p className="text-gray-600">
                Learn from healthcare professionals with extensive experience in patient advocacy and safety
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-[#F6F8F7] hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-[#8CF45D] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#3E3D3F] mb-4">Diverse Audience</h3>
              <p className="text-gray-600">
                Tailored education for healthcare providers, patients, legal professionals, and anyone involved in healthcare advocacy
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-[#F6F8F7] hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-[#00D9C6] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#3E3D3F] mb-4">Compassionate Care</h3>
              <p className="text-gray-600">
                Focused on empowering individuals to navigate healthcare systems with confidence and knowledge
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-[#F6F8F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3D3F] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare advocacy education and consultation services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-[#3E3D3F] mb-4">Healthcare Self-Advocacy Training</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#00D9C6] mr-3" />
                  <span>Understanding your rights as a patient</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#00D9C6] mr-3" />
                  <span>Effective communication with healthcare providers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#00D9C6] mr-3" />
                  <span>Navigating healthcare systems</span>
                </li>
              </ul>
              <Button 
                className="bg-[#00D9C6] hover:bg-[#8CF45D] text-white font-semibold px-6 py-2 rounded-lg"
                asChild
              >
                <Link to="/services">Learn More</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-[#3E3D3F] mb-4">Professional Education</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#00D9C6] mr-3" />
                  <span>Training for healthcare professionals</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#00D9C6] mr-3" />
                  <span>Consultation services</span>
                </li>
              </ul>
              <Button 
                className="bg-[#00D9C6] hover:bg-[#8CF45D] text-white font-semibold px-6 py-2 rounded-lg"
                asChild
              >
                <Link to="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3E3D3F] to-[#00D9C6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands who have learned to effectively advocate for themselves and others in healthcare settings
          </p>
          <Button 
            className="bg-[#00D9C6] hover:bg-[#8CF45D] text-white font-semibold px-8 py-3 text-lg rounded-lg transition-all duration-200 shadow-lg"
            asChild
          >
            <Link to="/contact">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default HomePage

