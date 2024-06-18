import React from 'react'

const Transportation = () => {
  return (
    <div>
       <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
    
       

      <div className="mt-20">
      <img
       src="https://img.freepik.com/premium-photo/transportation-logistics-container-cargo-ship-cargo-plane-3d-rendering-illustration_37416-451.jpg?size=626&ext=jpg&ga=GA1.1.1841189972.1718639082&semt=sph"
       alt="Home Decor"
       className="w-full h-64 object-cover rounded-lg"
       />
      </div>

       <div className="mt-16 grid grid-cols-3 gap-8">
         <a href="#" className="bg-gray-100 rounded-lg p-4 text-center">
         <i className="fas fa-couch fa-2x text-blue-500"></i>
         <h3 className="mt-4 text-lg font-semibold text-blue-500">Vehicle Services</h3>
         </a>
        <a href="#" className="bg-gray-100 rounded-lg p-4 text-center">
        <i className="fas fa-home fa-2x text-blue-500"></i>
        <h3 className="mt-4 text-lg font-semibold text-blue-500">Passenger Transport</h3>
        </a>
        <a href="#" className="bg-gray-100 rounded-lg p-4 text-center">
        <i className="fas fa-lightbulb fa-2x text-blue-500"></i>
        <h3 className="mt-4 text-lg font-semibold text-blue-500">Specialized Transport</h3>
        </a>
      </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
          <p className="text-gray-600">
          Car Rental| Taxi Services|Bike On Rent|Packers and Movers
          Courier Services|Travel Agents|Local Drivers|Bus Drivers|
          Taxi Drivers|Train Drivers|Auto Drivers|Tourist Drivers|
          Ambulance Drivers|Mechanic|Pilot|Captain|Shipmaster|Bus conductor|
          Dispatcher|Freight Broker|Air traffic Controller|
          Logistics Manager|Port Manager|Railroad Engineer|Marine Surveyor|
          Traffic Manager|Train dispatcher|Railroad Conductor|
          Railroad Signal Maintainer|Locomotive Engineer|Railroad Conductor|
          Track Inspector|Bus depot manager|Bus Route Planner|Bus Depot Manager|
          Bus Mechanic|Customer Service Representative|Fleet Manager|Bus Route Planner
          Safety and Compliance Officer|Fleet Manager
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

       

        
      </div>
    </div>

     
    </div>
  )
}

export default Transportation
