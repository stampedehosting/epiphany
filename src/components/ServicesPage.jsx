import { Link } from 'react-router-dom'
import { CheckCircle, Users, GraduationCap, FileText, MessageSquare, ArrowRight, Clock, Star } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

function ServicesPage() {
  return (
    <div className="bg-[#F6F8F7]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#00D9C6] to-[#8CF45D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive healthcare advocacy education and consultation services for all stakeholders
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Patient Advocacy Training */}
            <div className="bg-[#F6F8F7] rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#00D9C6] rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#3E3D3F]">Patient Advocacy Training</h2>
              </div>
              
              <p className="text-gray-600 mb-6 text-lg">
                Empower yourself or your loved ones with the knowledge and skills needed to navigate healthcare systems effectively.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#00D9C6] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#3E3D3F]">Understanding Your Rights</h4>
                    <p className="text-gray-600 text-sm">Learn about patient rights, informed consent, and healthcare privacy laws</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#00D9C6] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#3E3D3F]">Effective Communication</h4>
                    <p className="text-gray-600 text-sm">Master techniques for clear, assertive communication with healthcare providers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#00D9C6] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#3E3D3F]">System Navigation</h4>
                    <p className="text-gray-600 text-sm">Navigate insurance, referrals, and complex healthcare bureaucracies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#00D9C6] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#3E3D3F]">Medical Record Management</h4>
                    <p className="text-gray-600 text-sm">Organize and maintain your medical records for better care coordination</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <Clock className="h-4 w-4 inline mr-1" />
                  2-4 hour sessions
                </div>
                <Button 
                  className="bg-[#00D9C6] hover:bg-[#8CF45D] text-white font-semibold px-6 py-2 rounded-lg"
                  asChild
                >
                  <Link to="/contact">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Professional Education */}
            <div className="bg-[#F6F8F7] rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#8CF45D] rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#3E3D3F]">Professional Education</h2>
              </div>
              
              <p className="text-gray-600 mb-6 text-lg">
                Specialized training for healthcare professionals, legal experts, and other stakeholders in healthcare advocacy.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#8CF45D] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#3E3D3F]">Healthcare Provider Training</h4>
                    <p className="text-gray-600 text-sm">Enhance patient communication and advocacy support skills</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#8CF45D] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#3E3D3F]">Legal Professional Education</h4>
                    <p className="text-gray-600 text-sm">Understanding healthcare systems for legal advocacy cases</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#8CF45D] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#3E3D3F]">Organizational Training</h4>
                    <p className="text-gray-600 text-sm">Implement patient advocacy programs in healthcare organizations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#8CF45D] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#3E3D3F]">Continuing Education</h4>
                    <p className="text-gray-600 text-sm">Ongoing professional development and certification programs</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <Clock className="h-4 w-4 inline mr-1" />
                  Half-day to multi-day programs
                </div>
                <Button 
                  className="bg-[#00D9C6] hover:bg-[#8CF45D] text-white font-semibold px-6 py-2 rounded-lg"
                  asChild
                >
                  <Link to="/contact">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-[#F6F8F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3D3F] mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for all your healthcare advocacy needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-[#00D9C6] rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#3E3D3F] mb-3">One-on-One Consultation</h3>
              <p className="text-gray-600 mb-4">
                Personalized guidance for specific healthcare advocacy challenges and situations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Individual assessment</li>
                <li>• Customized action plans</li>
                <li>• Follow-up support</li>
              </ul>
              <Button 
                className="w-full bg-[#00D9C6] text-white hover:bg-[#8CF45D]"
                asChild
              >
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-[#8CF45D] rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#3E3D3F] mb-3">Medical Record Review</h3>
              <p className="text-gray-600 mb-4">
                Professional review and analysis of medical records for advocacy purposes.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Comprehensive analysis</li>
                <li>• Identification of gaps</li>
                <li>• Recommendations</li>
              </ul>
              <Button 
                className="w-full bg-[#00D9C6] text-white hover:bg-[#8CF45D]"
                asChild
              >
                <Link to="/contact">Request Review</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-[#00D9C6] rounded-lg flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#3E3D3F] mb-3">Workshop Series</h3>
              <p className="text-gray-600 mb-4">
                Group workshops covering various aspects of healthcare advocacy and self-advocacy.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Interactive sessions</li>
                <li>• Peer learning</li>
                <li>• Practical exercises</li>
              </ul>
              <Button 
                className="w-full bg-[#00D9C6] text-white hover:bg-[#8CF45D]"
                asChild
              >
                <Link to="/contact">Join Workshop</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3D3F] mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures you get the most effective advocacy education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00D9C6] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold text-[#3E3D3F] mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">
                We evaluate your current knowledge and specific advocacy needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#8CF45D] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold text-[#3E3D3F] mb-2">Customization</h3>
              <p className="text-gray-600 text-sm">
                We tailor our education program to your specific situation and goals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#00D9C6] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold text-[#3E3D3F] mb-2">Education</h3>
              <p className="text-gray-600 text-sm">
                Interactive learning sessions with practical tools and strategies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#8CF45D] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-semibold text-[#3E3D3F] mb-2">Support</h3>
              <p className="text-gray-600 text-sm">
                Ongoing support and resources to ensure successful implementation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3E3D3F] to-[#00D9C6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Become a Healthcare Advocate?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step towards empowering yourself or your organization with effective healthcare advocacy skills
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#00D9C6] hover:bg-[#8CF45D] text-white font-semibold px-8 py-3 text-lg rounded-lg"
              asChild
            >
              <Link to="/contact">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

