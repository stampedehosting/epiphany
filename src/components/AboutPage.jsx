import { Link } from 'react-router-dom'
import { GraduationCap, Award, Users, Heart, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

function AboutPage() {
  return (
    <div className="bg-[#F6F8F7]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#00D9C6] to-[#8CF45D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Our Team
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Healthcare advocate, educator, and champion for patient empowerment
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                    <img 
                      src="https://imagedelivery.net/HgE3bDw1sgmDigN9ZfdSVA/0c1f9601-acf9-4dda-5604-38f139168900/public" 
                      alt="Dr. Denyse Rowland-Jones" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-lg font-semibold">Dr. Rowland-Jones</p>
                  <p className="text-sm opacity-90">Healthcare Advocate & Educator</p>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-[#3E3D3F] mb-6">
                Empowering Healthcare Advocacy
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Dr. Denyse Rowland-Jones, Chiropractic Doctor, Athletic Trainer, and Certified Ergonomic Assessment Specialist, is a compassionate healthcare leader committed to helping people take charge of their health through knowledge and advocacy. As the Founder of Epiphany Health and Safety Consultants, she combines her clinical expertise with her passion for education to empower individuals to speak up, ask questions, and make informed decisions about their care.
                </p>
                <p>
                  With years of experience across healthcare systems and patient advocacy, Dr. Rowland-Jones brings a holistic perspective to how care is delivered and received. Her mission is to close the communication gap between providers and patients so both can work together toward better outcomes and more positive healthcare experiences.
                </p>
                <p>
                  She works with a wide range of audiences—including healthcare professionals, patients, and legal experts—offering customized education and training that make healthcare advocacy both practical and personal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-[#F6F8F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3D3F] mb-4">
              Areas of Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive knowledge and experience across multiple healthcare domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#00D9C6] rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#3E3D3F] mb-2">Patient Education</h3>
              <p className="text-gray-600 text-sm">
                Teaching patients how to effectively communicate with healthcare providers and navigate complex medical systems
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#8CF45D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#3E3D3F] mb-2">Professional Training</h3>
              <p className="text-gray-600 text-sm">
                Educating healthcare professionals on patient advocacy principles and effective communication strategies
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#00D9C6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#3E3D3F] mb-2">Legal Education</h3>
              <p className="text-gray-600 text-sm">
                Training legal professionals on healthcare advocacy issues and patient rights in medical settings
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#8CF45D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#3E3D3F] mb-2">Compassionate Care</h3>
              <p className="text-gray-600 text-sm">
                Promoting empathetic, patient-centered approaches to healthcare delivery and advocacy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#00D9C6] to-[#8CF45D] rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8">
              "To empower every individual with the knowledge, skills, and confidence needed to become 
              an effective advocate for their healthcare needs, ensuring better outcomes and more 
              meaningful healthcare experiences for all."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#00D9C6] text-white hover:bg-[#8CF45D] font-semibold px-8 py-3 text-lg rounded-lg"
                asChild
              >
                <Link to="/services">
                  Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline"
                className="border-[#00D9C6] text-[#00D9C6] hover:bg-[#00D9C6] hover:text-white font-semibold px-8 py-3 text-lg rounded-lg"
                asChild
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#F6F8F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3D3F] mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#3E3D3F] mb-4">Empowerment</h3>
              <p className="text-gray-600">
                We believe every person has the right to be an active participant in their healthcare decisions 
                and should have the tools to advocate effectively for themselves.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#3E3D3F] mb-4">Education</h3>
              <p className="text-gray-600">
                Knowledge is power. We provide comprehensive education that transforms how people interact 
                with healthcare systems and providers.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#3E3D3F] mb-4">Compassion</h3>
              <p className="text-gray-600">
                Healthcare is deeply personal. We approach every interaction with empathy, understanding, 
                and respect for individual experiences and needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

