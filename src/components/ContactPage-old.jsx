import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, Shield, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    serviceType: '',
    message: '',
    hipaaAcknowledgment: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        serviceType: '',
        message: '',
        hipaaAcknowledgment: false
      })
    }, 2000)
  }

  return (
    <div className="bg-[#F6F8F7]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#00D9C6] to-[#8CF45D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Ready to start your healthcare advocacy journey? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#3E3D3F] mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#00D9C6] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#3E3D3F] mb-1">Email</h3>
                    <p className="text-gray-600">info@epiphanyhealthtx.com</p>
                    <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#8CF45D] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#3E3D3F] mb-1">Phone</h3>
                    <p className="text-gray-600">(254) 587-4243</p>
                    <p className="text-sm text-gray-500 mt-1">Friday 5 PM - 7 PM, Saturday 9 AM - 5 PM CST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#00D9C6] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#3E3D3F] mb-1">Location</h3>
                    <p className="text-gray-600">Texas, USA</p>
                    <p className="text-sm text-gray-500 mt-1">Serving clients nationwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#8CF45D] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#3E3D3F] mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM CST</p>
                    <p className="text-gray-600">Saturday: By appointment only</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
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

            {/* Contact Form */}
            <div className="bg-[#F6F8F7] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#3E3D3F] mb-6">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">
                    Thank you for your message! We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#3E3D3F] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00D9C6] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#3E3D3F] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00D9C6] focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#3E3D3F] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00D9C6] focus:border-transparent"
                      placeholder="(254) 587-4243"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-[#3E3D3F] mb-2">
                      Organization (Optional)
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00D9C6] focus:border-transparent"
                      placeholder="Your organization"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-[#3E3D3F] mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00D9C6] focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="patient-advocacy">Patient Advocacy Training</option>
                    <option value="professional-education">Professional Education</option>
                    <option value="consultation">One-on-One Consultation</option>
                    <option value="medical-record-review">Medical Record Review</option>
                    <option value="workshop">Workshop Series</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#3E3D3F] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00D9C6] focus:border-transparent"
                    placeholder="Please describe your needs and how we can help you..."
                  />
                </div>

                {/* HIPAA Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-blue-800 mb-2">Privacy & HIPAA Notice</h4>
                      <p className="text-sm text-blue-700 mb-3">
                        We are committed to protecting your privacy. Please do not include any personal health 
                        information (PHI) or sensitive medical details in this form. This initial contact form 
                        is for general inquiries only. Any specific health information will be handled through 
                        secure, HIPAA-compliant channels after we establish a formal consultation relationship.
                      </p>
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="hipaaAcknowledgment"
                          checked={formData.hipaaAcknowledgment}
                          onChange={handleInputChange}
                          required
                          className="mt-1 mr-3 h-4 w-4 text-[#00D9C6] focus:ring-[#00D9C6] border-gray-300 rounded"
                        />
                        <span className="text-sm text-blue-700">
                          I acknowledge that I will not include personal health information in this form and 
                          understand that this is for general inquiries only. *
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.hipaaAcknowledgment}
                  className="w-full bg-[#00D9C6] hover:bg-[#8CF45D] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Widget Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3D3F] mb-4">
              Schedule Your Appointment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book your consultation directly through our secure scheduling system
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#F6F8F7] rounded-2xl p-8">
              <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/t3xdXmaHu9kHw8HebWS7" 
                style={{width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px'}} 
                scrolling="no" 
                id="X2OCUfz33qw3hH5ufb9w_1761164707468"
                title="Schedule Appointment"
              ></iframe>
            </div>
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-[#3E3D3F] mb-3">
                How quickly can I expect a response?
              </h3>
              <p className="text-gray-600">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call our office directly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-[#3E3D3F] mb-3">
                Do you offer virtual consultations?
              </h3>
              <p className="text-gray-600">
                Yes, we offer both in-person and virtual consultations to accommodate clients 
                nationwide. Virtual sessions are conducted through secure, HIPAA-compliant platforms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-[#3E3D3F] mb-3">
                What should I prepare for our first consultation?
              </h3>
              <p className="text-gray-600">
                Come prepared with specific questions about your healthcare advocacy needs. 
                We'll provide a detailed preparation guide once you schedule your consultation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-[#3E3D3F] mb-3">
                Is my information kept confidential?
              </h3>
              <p className="text-gray-600">
                Absolutely. We maintain strict confidentiality and comply with all HIPAA 
                requirements. Your privacy and security are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

