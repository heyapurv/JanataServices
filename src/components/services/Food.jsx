import React from "react";

const Food = () => {
  return (
    <>
       <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
      

        <section className="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGZvb2R8ZW58MHx8MHx8fDA%3D')] bg-gray-500 bg-blend-multiply  h-[500px] sm:h-[400px] lg:h-[600px] ">
  <div className="bg-gradient-to-b from-transparent to-gray-900 h-full">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
        Delicious Variety Of Foods 
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
      Indian cuisine is a vibrant blend of spices and regional diversity. Enjoy North India's rich butter chicken, South India's tangy dosas, East India's fish curry, and West India's spicy Goan dishes. Savor street food like chaat and vada pav, and indulge in sweets like gulab jamun and jalebi. Every meal is a sensory feast!
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
          Get started
          <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
        <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
          Order Now
        </a>
      </div>
    </div>
  </div>
</section>

      
{/* Card */}
<div className="container mx-auto p-4 justify-center">
  <h1 className="text-black text-3xl font-bold mb-4 text-center">Food Categories</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Vehicle Sales */}
    <div className="bg-gray-200 rounded-lg p-4 flex flex-col items-center">
      <img src="https://wallpapers.com/images/featured-full/indian-food-x2tv62mgy6kq4or3.jpg" alt="Vehicle Sales" className="w-48 h-36 pb-7" />
      <h2 className="text-xl font-bold mb-2 text-black">Indian Food</h2>
      <ul className="text-center text-black">
        <li><a href="#">- Jain</a></li>
        <li><a href="#">- Dhaba</a></li>
        <li><a href="#">- Biryani</a></li>
        <li><a href="#">- Pure Veg</a></li>
        <li><a href="#">More</a></li>
      </ul>
    </div>

    {/* Vehicle Maintenance and Repair */}
    <div className="bg-gray-200 rounded-lg p-4 flex flex-col items-center">
      <img src="https://cdn.promptden.com/images/99ba8ffc-3346-4586-abd7-b07fdd11143a.webp?class=standard" alt="Modern Cuisines" className="w-48 h-36 pb-7" />
      <h2 className="text-xl font-bold mb-2 text-black">Modern Cuisines</h2>
      <ul className="text-center text-black">
        <li><a href="#">- Italian</a></li>
        <li><a href="#">- Afghani</a></li>
        <li><a href="#">- Chinese</a></li>
        <li><a href="#">- Continental</a></li>
        <li><a href="#">More</a></li>
      </ul>
    </div>

    {/* Vehicle Rental Services */}
    <div className="bg-gray-200 rounded-lg p-4 flex flex-col items-center">
      <img src="https://thekitchencommunity.org/wp-content/uploads/2021/10/indian-shutterstock_295395848.jpg" alt="Deserts" className="w-48 h-36 pb-7" />
      <h2 className="text-xl font-bold mb-2 text-black">Deserts</h2>
      <ul className="text-center text-black ">
        <li><a href="#">- Sweets</a></li>
        <li><a href="#">- Cupcakes</a></li>
        <li><a href="#">- Brownies</a></li>
        <li><a href="#">- Muffins</a></li>
        <li><a href="#">More</a></li>
      </ul>
    </div>
  </div>



        {/* Other Categories */}
        <button className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mt-4 w-full">
          Other Categories...
        </button>

        {/* Descriptions */}
<div className="flex flex-col space-y-8">
  {/* Vehicle Sales */}
  <div className="bg-white shadow-md p-4 rounded">
    <h3 className="text-black text-xl font-bold mb-2">Indian Food</h3>
    <p className="text-gray-600">
    Indian cuisine is a vibrant blend of spices and regional diversity. Enjoy North India's rich butter chicken, South India's tangy dosas, East India's fish curry, and West India's spicy Goan dishes. Savor street food like chaat and vada pav, and indulge in sweets like gulab jamun and jalebi. Every meal is a sensory feast!
    </p>
  </div>

  {/* Vehicle Maintenance and Repair */}
  <div className="bg-white shadow-md p-4 rounded">
    <h3 className="text-black text-xl font-bold mb-2">Modern Cuisines</h3>
    <p className="text-gray-600">
    Modern cuisine blends traditional flavors with innovative techniques, focusing on fresh ingredients, artistic presentation, and fusion influences. It offers a dynamic, sensory dining experience that redefines culinary boundaries.
    </p>
  </div>

  {/* Vehicle Rental Services */}
  <div className="bg-white shadow-md p-4 rounded">
    <h3 className="text-black text-xl font-bold mb-2">Deserts</h3>
    <p className="text-gray-600">
    Desserts are sweet treats that delight the senses. From creamy cakes and pastries to rich chocolates and fruity delights, they offer a perfect end to any meal. Enjoy classics like ice cream, pies, and cookies, each crafted to satisfy your sweet cravings.
    </p>
  </div>
</div>
        {/* Many More */}
        <button className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mt-4 w-full">
          Many more...
        </button>
      </div>

     <div className="mt-16 md:flex md:flex-wrap">
  <h2 className="text-black text-2xl font-bold mb-4 w-full underline underline-offset-2 ">Popular Categories</h2>
  <ul className="text-gray-600 flex flex-wrap justify-center  ">
    {
      [
        "Body Massage Centres |", "Cinema Halls |", "Schools |", "Beauty Spas |", "Dermatologists |", "Hospitals |", "Malls |", "Gyms |", "Beauty Parlours |", "Estate Agents |",
        "Banquet Halls |", "ENT Doctors |", "Book Shops |", "Bike On Rent |", "Sexologist Doctors |", "Neurologists |", "Gynaecologist & Obstetrician Doctors", "Tiffin Services",
        "Travel Agents|", "Paying Guest Accommodations |", "General Physician Doctors |", "Dentists |", "Orthopaedic Doctors |", "Chemists |", "Motor Training Schools |",
        "Gastroenterologists |", "Car Rental |", "Salons |", "Courier Services |", "Dance Classes |", "Pathology Labs |", "Taxi Services |", "Cake Shops |", "AC Repair & Services |",
        "Mobile Phone Dealers |", "Pet Shops", "Dmart |", "Packers And Movers |", "Psychiatrists |", "Dharamshalas |", "Urologist Doctors |", "Bakeries |", "Bicycle Dealers |",
        "Coffee Shops |", "Paediatricians |", "Sonography Centres |", "Yoga Classes |", "Hostels |", "Cardiologists |", "Electrical Shops |", "Skin Care Clinics |", "Diagnostic Centres |",
        "Homeopathic Doctors |", "Physiotherapists |", "Photo Studios |", "Plumbers |", "Music Classes |", "Electricians |", "Sports Goods Dealers |", "Shoe Dealers |", "Hair Stylists |",
        "Gift Shops |", "Ophthalmologists |", "Car Repair & Services |", "Ayurvedic Doctors |", "Eye Clinics |", "Restaurants |", "Carpenters |", "Jewellery Showrooms |",
        "Cooks On Hire |", "Stationery Shops |", "Nephrologists", "Caterers |", "Interior Designers |", "Rehabilitation Center |", "Drug De Addiction Center |", "Grocery Stores |",
        "AC Repair |", "Hotels |", "Cab & Car Rental |", "Spa & Salon |", "Car service |", "Lab Test |", "On Demand Service |", "JdSocial Blog |", "JD collections"
      ].map((category, index) => (
        <li key={index} className="mr-4 mb-2">
          <a href="#" className="text-gray-600 hover:text-gray-900">{category}</a>
        </li>
      ))
    }
  </ul>
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
            Travel & Tourism | Beauty & Fashion | Health & Fitness | Food & Beverage | Finance | On demand Services | Home & Living | Education & Career |
            Recreation
          </p>
        </div> 
        }

        { <div className="mt-16 grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="list-disc pl-4 text-gray-600">
              <li>About us</li>
              <li>Investor Relations</li>
              <li>We are hiring</li>
              <li>Customer Care</li>
              <li>Free Listing</li>
              <li>Whats New</li>
              <li>Report a Bug</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc pl-4 text-gray-600">
              <li>Advertise</li>
              <li>Media</li>
              <li>Testimonials</li>
              <li>Feedback</li>
              <li>Business Badge</li>
              <li>Jd Curated list</li>
            </ul>
          </div>
        </div> }

        { <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Jd Verticals</h2>
          <div className="grid grid-cols-3 gap-8">
            <ul className="list-disc pl-4 text-gray-600">
              <li>B2B</li>
              <li>Doctors</li>
              <li>Colleges</li>
              <li>Hotels</li>
            </ul>
            <ul className="list-disc pl-4 text-gray-600">
              <li>All India</li>
              <li>Hospitals</li>
              <li>AC Repair</li>
              <li>Real Estate</li>
            </ul>
            <ul className="list-disc pl-4 text-gray-600">
              <li>Restaurants</li>
              <li>Schools</li>
              <li>Car Services</li>
              <li>Bills & Recharge</li>
            </ul>
          </div>
        </div> */}

        <div className="mt-16 text-center text-gray-600">
          <p>Copyrights 2008-24. All Rights Reserved. <a href="#">Privacy</a> | <a href="#">Terms</a> | <a href="#">Infringement</a></p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Food;
