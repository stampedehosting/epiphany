import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, AlertCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#00D9C6] to-[#8CF45D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Ready to take control of your healthcare journey? We're here to help you become your own best advocate.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#3E3D3F] mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Reach out to us for healthcare advocacy consultations, professional training, 
                  or general inquiries. We're committed to empowering you with the knowledge 
                  and confidence to navigate your healthcare journey.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#00D9C6] p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#3E3D3F] mb-1">Email</h3>
                    <p className="text-gray-600">info@epiphanyhealthtx.com</p>
                    <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#00D9C6] p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#3E3D3F] mb-1">Phone</h3>
                    <p className="text-gray-600">(254) 587-4243</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#00D9C6] p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#3E3D3F] mb-1">Location</h3>
                    <p className="text-gray-600">Texas, US</p>
                    <p className="text-sm text-gray-500 mt-1">Serving clients nationwide through virtual consultations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#00D9C6] p-3 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#3E3D3F] mb-1">Response Time</h3>
                    <p className="text-gray-600">24-48 hours</p>
                    <p className="text-sm text-gray-500 mt-1">For all inquiries and consultation requests</p>
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-red-800 mb-1">Important Notice</h4>
                    <p className="text-sm text-red-700">
                      This service is for educational purposes only and does not constitute medical advice. 
                      In case of medical emergencies, please call 911 or visit your nearest emergency room.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* GoHighLevel Message Form */}
            <div className="bg-[#F6F8F7] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#3E3D3F] mb-6">Send Us a Message</h2>
              
              <div style={{minHeight: '1106px'}}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/8y3nZVpvE7mHsTKrUdiJ"
                  style={{width: '100%', height: '100%', border: 'none', borderRadius: '16px'}}
                  id="inline-8y3nZVpvE7mHsTKrUdiJ"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Epiphany Message"
                  data-height="1106"
                  data-layout-iframe-id="inline-8y3nZVpvE7mHsTKrUdiJ"
                  data-form-id="8y3nZVpvE7mHsTKrUdiJ"
                  title="Epiphany Message"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Appointment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3D3F] mb-4">
              Ready to Schedule?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Book your consultation directly through our secure scheduling system
            </p>
            
            <Link 
              to="/appointments"
              className="bg-[#00D9C6] hover:bg-[#8CF45D] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 inline-flex items-center text-lg shadow-lg"
            >
              Schedule Your Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F6F8F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3D3F] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our healthcare advocacy services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#3E3D3F] mb-4">
                What is healthcare advocacy?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Healthcare advocacy involves supporting and empowering patients to make informed decisions 
                about their healthcare. We help you understand your rights, navigate complex medical systems, 
                communicate effectively with healthcare providers, and ensure you receive quality care.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#3E3D3F] mb-4">
                Who can benefit from your services?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our services benefit patients seeking better healthcare outcomes, healthcare professionals 
                wanting to improve patient communication, legal professionals handling medical cases, and 
                organizations looking to enhance their healthcare delivery and patient satisfaction.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#3E3D3F] mb-4">
                How do virtual consultations work?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We conduct secure video consultations where we discuss your healthcare challenges, 
                provide education on self-advocacy strategies, and develop personalized action plans. 
                All sessions are confidential and designed to empower you with practical tools and knowledge.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#3E3D3F] mb-4">
                Do you provide medical advice?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No, we do not provide medical advice, diagnoses, or treatment recommendations. 
                Our focus is on education, advocacy skills, and empowering you to have more effective 
                conversations with your healthcare providers. We complement, not replace, medical care.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#3E3D3F] mb-4">
                What makes your approach unique?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dr. Rowland-Jones brings a unique combination of clinical expertise as a Chiropractic Doctor, 
                Athletic Trainer, and Certified Ergonomic Assessment Specialist, along with extensive experience 
                in patient advocacy. This comprehensive background allows us to understand both sides of the 
                healthcare equation and provide practical, actionable guidance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

