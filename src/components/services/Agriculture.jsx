import React from 'react';
const categories = [
  { name: 'Farming', icon: '🌾' },
  { name: 'Irrigation', icon: '💧' },
  { name: 'Crop Protection', icon: '🌿' },
  { name: 'Soil Fertility', icon: '🌱' },
  { name: 'Livestock', icon: '🐄' },
  { name: 'Agro Machinery', icon: '🚜' },
  { name: 'Organic Farming', icon: '🍀' },
];

const Agriculture = () => {
  return (
    <div>
      <div>
        <div className="mt-20">
          <img
            src="https://images.unsplash.com/photo-1594771804886-a933bb2d609b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEFncmljdWx0dXJlfGVufDB8fDB8fHww://images.unsplash.com/photo-1594771804886-a933bb2d609b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEFncmljdWx0dXJlfGVufDB8fDB8fHwwps://images.unsplash.com/photo-1499529112087-3cb3b73cec95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=https://images.unsplash.com/photo-1594771804886-a933bb2d609b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEFncmljdWx0dXJlfGVufDB8fDB8fHww%3D://images.unsplash.com/photo-1580281868052-4e71a89a2dd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8fDA%3D"
            alt="Agriculture"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-md flex items-center transition duration-200 ease-in-out transform hover:bg-gray-100 hover:shadow-lg cursor-pointer"
            >
              <span className="text-4xl mr-4">{category.icon}</span>
              <span className="text-xl font-semibold">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 max-w-4xl mx-auto">
        {/* Search Bar */}
        <div className="relative flex items-center mb-8">
          <input
            type="text"
            placeholder="Search Agricultural Categories"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-green-300"
          />
          <svg className="absolute right-3 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m0 0a9 9 0 1118-18 9 9 0 01-18 18z" />
          </svg>
        </div>

        {/* Main Categories */}
        <div className="space-y-4">
          {[
            { name: 'Farming', icon: 'M3 12l2-2 4 4L17 5l4 4M1 21h22' }, // Farming
            { name: 'Irrigation', icon: 'M12 2l2 7h-4l2-7m0 0L9 21m3-19l3 19M2 7h5M9 7h5M16 7h6' }, // Irrigation
            { name: 'Crop Protection', icon: 'M10 12h4M2 10h20m-9-8v4m1-4h6m-6 0h-6' }, // Crop Protection
            { name: 'Soil Fertility', icon: 'M3 7h4m4 0h4m4 0h4M2 15h5m5 0h5m5 0h5' }, // Soil Fertility
            { name: 'Livestock', icon: 'M8 21v-2a4 4 0 1 1 8 0v2M5 21v-2a7 7 0 1 1 14 0v2M2 11h20' }, // Livestock
            { name: 'Agro Machinery', icon: 'M3 6h4m4 0h4m4 0h4M2 16h20M12 4v12m-4-6l8 0' }, // Agro Machinery
            { name: 'Organic Farming', icon: 'M4 12h3m5 0h3m5 0h3M3 19h6m6 0h6' }, // Organic Farming
          ].map((category, index) => (
            <div key={index} className="flex items-center p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 hover:shadow-md transition duration-200">
              <svg className="w-6 h-6 mr-3 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={category.icon} />
              </svg>
              <span>{category.name}</span>
            </div>
          ))}
        </div>

        {/* Popular Categories */}
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold">Popular Categories</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            {[
              'Farm Equipment', 'Seed Suppliers', 'Fertilizers', 'Pesticides', 'Organic Products',
              'Irrigation Systems', 'Animal Husbandry', 'Crop Insurance', 'Agro-Tech', 'Soil Testing',
              'Agri Consultants', 'Dairy Products', 'Greenhouses', 'Hydroponics', 'Farm Labor',
              'Agri Finance', 'Farmers Markets', 'Tractors', 'Landscaping', 'Agritourism',
              'Food Processing', 'Crop Diseases', 'Horticulture', 'Aquaculture', 'Forestry',
              'Beekeeping', 'Poultry Farming', 'Fish Farming', 'Weather Forecasting', 'Composting',
              'Farm Management Software', 'Veterinary Services', 'Agri Training', 'Livestock Feed',
              'Soil Conservation', 'Plant Nurseries', 'Crop Storage', 'Water Conservation', 'Biotechnology',
              'Agri Exports', 'Urban Farming', 'Agroforestry', 'Biofertilizers', 'Agro Chemicals',
              'Agro Processing', 'Farm Safety', 'Drone Technology', 'Precision Farming', 'Agri Markets',
              'Livestock Health', 'Farm Waste Management', 'Sustainable Farming', 'Agro Insurance',
              'Crop Rotation', 'Farm Diversification', 'Agri Policy', 'Agricultural Research',
              'Biosecurity', 'Farm Subsidies', 'Agri Supply Chains', 'Smart Farming', 'Agri Robotics',
              'Farm Mechanization', 'Seed Technology', 'Animal Genetics', 'Soil Health', 'Farm Ecology',
              'Agro Marketing', 'Crop Improvement', 'Agri Inputs', 'Farm Loans', 'Agri Business',
              'Soil Erosion', 'Water Management', 'Climate Change Adaptation', 'Farming Associations',
              'Farm Cooperatives', 'Agricultural Education', 'Agri Economics', 'Agri Infrastructure',
              'Farm Advisory', 'Agri Statistics', 'Agri Logistics', 'Agri Commodities', 'Land Reclamation',
              'Agricultural Innovation'
            ].map((category, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 rounded-md shadow hover:bg-gray-200 hover:shadow-md transition duration-200">
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Side Buttons */}
        <div className="fixed right-0 flex flex-col items-center gap-2 mt-8 mr-4">
          <button className="px-4 py-2 text-white bg-green-500 rounded-lg shadow hover:bg-green-600 hover:shadow-md transition duration-200">Advertise</button>
          <button className="px-4 py-2 text-white bg-teal-500 rounded-lg shadow hover:bg-teal-600 hover:shadow-md transition duration-200">Free Listing</button>
        </div>
      </div>
    </div>
  );
};

export default Agriculture;
