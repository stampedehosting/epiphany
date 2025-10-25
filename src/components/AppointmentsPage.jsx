import React from 'react'
import { Calendar, Clock, CheckCircle } from 'lucide-react'

export default function AppointmentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#00D9C6] to-[#8CF45D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Schedule Your Appointment
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Book your healthcare advocacy consultation with our secure scheduling system
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#F6F8F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00D9C6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#3E3D3F] mb-2">Easy Scheduling</h3>
              <p className="text-gray-600">Select your preferred date and time from available slots</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8CF45D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#3E3D3F] mb-2">Flexible Times</h3>
              <p className="text-gray-600">Choose from multiple time slots that work with your schedule</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00D9C6] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#3E3D3F] mb-2">Instant Confirmation</h3>
              <p className="text-gray-600">Receive immediate confirmation and calendar invites</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3D3F] mb-4">
              Choose Your Appointment Time
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select a convenient time for your healthcare advocacy consultation
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#F6F8F7] rounded-2xl p-8 shadow-lg">
              <div style={{minHeight: '600px', width: '100%'}}>
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/t3xdXmaHu9kHw8HebWS7" 
                  style={{width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px'}} 
                  scrolling="no" 
                  id="X2OCUfz33qw3hH5ufb9w_1761164707468"
                  title="Schedule Appointment Calendar"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-[#F6F8F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3D3F] mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your consultation will be tailored to your specific healthcare advocacy needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#00D9C6] rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#3E3D3F] mb-2">Initial Assessment</h3>
                  <p className="text-gray-600">We'll discuss your current healthcare challenges and goals</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#00D9C6] rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#3E3D3F] mb-2">Personalized Strategy</h3>
                  <p className="text-gray-600">Develop a customized advocacy plan for your situation</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#00D9C6] rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#3E3D3F] mb-2">Practical Tools</h3>
                  <p className="text-gray-600">Learn specific techniques for effective healthcare communication</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#8CF45D] rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#3E3D3F] mb-2">Resource Sharing</h3>
                  <p className="text-gray-600">Receive valuable resources and templates for advocacy</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#8CF45D] rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#3E3D3F] mb-2">Follow-up Support</h3>
                  <p className="text-gray-600">Ongoing guidance to implement your advocacy strategies</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#8CF45D] rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#3E3D3F] mb-2">Empowerment Focus</h3>
                  <p className="text-gray-600">Build confidence to advocate effectively for yourself and others</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

