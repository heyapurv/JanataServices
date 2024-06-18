import React from 'react'

const ProfessionalServices = () => {
  return (
    <div>
        <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <h1 className="mb-2">Professional-Services</h1>
            <p className="text-gray-600 text-sm">Janata Services</p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-gray-200 rounded-full px-3 py-1 text-gray-600">
              <i className="fas fa-share-alt"></i>
            </button>
            <button className="bg-gray-200 rounded-full px-3 py-1 text-gray-600">
              <i className="fas fa-bookmark"></i>
            </button>
            <button className="bg-gray-200 rounded-full px-3 py-1 text-gray-600">
              <i className="fas fa-ellipsis-v"></i>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <div className="flex items-center space-x-4">
            <button className="bg-gray-200 rounded-full px-3 py-1 text-gray-600">
              <i className="fas fa-search"></i>
            </button>
            <input
              type="text"
              className="bg-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search All Category"
            />
             <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600">
               Search
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-gray-200 rounded-full px-3 py-1 text-gray-600">
              <i className="fas fa-language"></i>
              EN
            </button>
            <button className="bg-gray-200 rounded-full px-3 py-1 text-gray-600">
              <i className="fas fa-ad"></i>
              Advertise
            </button>
            <button className="bg-gray-200 rounded-full px-3 py-1 text-gray-600">
              <i className="fas fa-list"></i>
              Business
              Listing
            </button>
          </div>
        </div>

      <div className="mt-20">
      <img
       src="https://streamradioytv.buap.mx/images/dia-del-trabajador-1682700526015.jpg"
       alt="Home Decor"
       className="w-full h-64 object-cover rounded-lg"
       />
      </div>

       <div className="mt-16 grid grid-cols-3 gap-8">
         <a href="#" className="bg-gray-100 rounded-lg p-4 text-center">
         <i className="fas fa-couch fa-2x text-blue-500"></i>
         <h3 className="mt-4 text-lg font-semibold text-blue-500">Legal Services</h3>
         </a>
        <a href="#" className="bg-gray-100 rounded-lg p-4 text-center">
        <i className="fas fa-home fa-2x text-blue-500"></i>
        <h3 className="mt-4 text-lg font-semibold text-blue-500">IT Services</h3>
        </a>
        <a href="#" className="bg-gray-100 rounded-lg p-4 text-center">
        <i className="fas fa-lightbulb fa-2x text-blue-500"></i>
        <h3 className="mt-4 text-lg font-semibold text-blue-500">Fianancial Advisory</h3>
        </a>
      </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
          <p className="text-gray-600">
          Lawyers (Attorneys)|Paralegals|Legal Consultants|Legal Advisors|
          Certified Public Accountants (CPAs)|Financial Advisors|Tax Consultants
          Auditors|Management Consultants|IT Consultants|Strategy Consultants
          HR Consultants|Physicians (Doctors)|Surgeons|Dentists|Psychologists
          Therapists|Civil Engineers|Mechanical Engineers|Electrical Engineers|
          Structural Engineers|Architects|Urban Planners|Landscape Architects
          Software Developers|IT Consultants|Network Engineers|Cybersecurity Experts
          Marketing Consultants|Advertising Executives|Branding Specialists|Market Researchers
          Teachers|Tutors|Trainers|Educational Consultants|Real Estate Agents
          Property Managers|Appraisers|Real Estate Consultants
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Follow us on</h2>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-200 rounded-full p-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="bg-gray-200 rounded-full p-2">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="bg-gray-200 rounded-full p-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="bg-gray-200 rounded-full p-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="bg-gray-200 rounded-full p-2">
              <i className="fas fa-times"></i>
            </a>
          </div>
        </div>

        {/* <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Explore JD Collections</h2>
          <p className="text-gray-600">
             Lawyers (Attorneys)|Paralegals|Legal Consultants|Legal Advisors|
             Certified Public Accountants (CPAs)|Financial Advisors|Tax Consultants|
             Auditors|Management Consultants|IT Consultants|Strategy Consultants|
             HR Consultants|Physicians (Doctors)|Surgeons|Dentists|Psychologists|
             Therapists
          </p>
        </div> */}

        {/* <div className="mt-16 grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="list-disc pl-4 text-gray-600">
              <li>About us</li>
              <li>Professional Business</li>
              <li>We're hiring</li>
              <li>Customer Care</li>
              <li>Free Listing</li>
              <li>What's New</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc pl-4 text-gray-600">
              <li>Advertise</li>
              <li>Media</li>
              <li>Testimonials</li>
              <li>Feedback</li>
              <li>Business Badge</li>
            </ul>
          </div>
        </div> */}

        {/* <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Jd Verticals</h2>
          <div className="grid grid-cols-3 gap-8">
            <ul className="list-disc pl-4 text-gray-600">
              <li>B2B</li>
              <li>Legal Services</li>
              <li>Seasonal Services</li>
              <li>Caterers, Wedding Planners</li>
            </ul>
            <ul className="list-disc pl-4 text-gray-600">
              <li>All India</li>
              <li>Service Providers</li>
              <li>Shopkeepers</li>
              <li>Tutors</li>
            </ul>
            <ul className="list-disc pl-4 text-gray-600">
              <li>Financial Consultant</li>
              <li>Digital Service Providers</li>
              <li>Real Estate Agents</li>
              <li>Other Services</li>
            </ul>
          </div>
        </div> */}

        <div className="mt-16 text-center text-gray-600">
          <p>Copyrights 2008-24. All Rights Reserved. <a href="#">Privacy</a> | <a href="#">Terms</a> | <a href="#">Infringement</a></p>
        </div>
      </div>
    </div>

     
    </div>
  )
}

export default ProfessionalServices
