
const Shop = () => {
  return (
    <>


      <section className="bg-center bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmclMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D')] bg-gray-700 bg-blend-multiply h-[600px] ">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 ">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">ALL FOR ONE, ONE FOR ALL</h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Welcome to our diverse shopping hub, featuring a wide array of stores to meet all your needs. Explore our grocery shop for fresh produce and everyday essentials, visit our clothing shop for the latest fashion trends, and check out our automobile shop for top-notch vehicles and accessories. Enjoy a seamless shopping experience with something for everyone!</p>
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
      </section>

      {/* Card */}
      <div className="container mx-auto p-4 justify-center ">
        <h1 className="text-3xl font-bold mb-4 text-center">Shop Services</h1>
        <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {/* Indian Food */}
          <div className="bg-yellow-300 rounded-lg p-4 justify-center ">
            {/* <img src={logo} alt="" className='rounded-full w-40 h-30 pb-7' /> */}
            <h2 className="text-xl font-bold mb-2">Grocery Shop</h2>
            <ul >
              <li><a href="">- In-Store Shopping</a></li>
              <li><a href="">- Online Ordering & Delivery</a></li>
              <li><a href="">- Click & Collect</a></li>
              <li><a href="">- Curbside Pickup</a></li>
              <li><a href="">More</a></li>
            </ul>
          </div>

          {/* Modern Cuisines */}
          <div className="bg-yellow-300 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">Clothing Store</h2>
            <ul>
           <li><a href="" >- Styling Assistance</a></li> 
            <li><a href="" >- Tailoring & Alterations</a></li>
            <li><a href="" >- Special Occasion Services</a></li>
            <li><a href="" >- Returns & Exchanges</a></li>
            <li><a href="">More</a></li>
            </ul>
          </div>

          {/* Deserts */}
          <div className="bg-yellow-300 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">Electronic Shop</h2>
            <ul>
             <li><a href="" >- Expert Advice & Product Demonstrations</a></li> 
              <li><a href="" >- Installation & Setup Services</a></li>
              <li><a href="" >- Price Matching & Warranties</a></li>
              <li><a href="" >- Tech Support & Recycling</a></li>
              <li><a href="" >More</a></li>
            </ul>
          </div>
        </div>

        {/* Other Categories */}
        <button className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded mt-4 w-full">
          Other Categories...
        </button>

        {/* Descriptions */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">Grocery Shop:</h3>
          <p className="text-gray-600">
          Shop how you want! Browse our aisles in-store, or order online for convenient delivery or hassle-free pickup. We offer fresh produce, top brands, and everyday essentials to keep your fridge full!
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Clothing store:</h3>
          <p className="text-gray-600">
          Elevate your style! Our expert staff offers personalized advice and tailoring to ensure a perfect fit. Find trendy looks and timeless pieces for any occasion, all with an easy return policy. Shop with us and look your best!
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Electronic:</h3>
          <p className="text-gray-600">
          Level up your tech life! Get expert advice to find the perfect electronics. Enjoy easy setup and competitive prices. We care - get tech support and recycle responsibly. Shop now!
          </p>
        </div>

        {/* Many More */}
        <button className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded mt-4 w-full">
          Many more...
        </button>
      </div>


      

    </>
  )
}

export default Shop;