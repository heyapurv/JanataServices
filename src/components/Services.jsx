import React, { useState } from 'react';

    
export default () => {
    const [visibleRows, setVisibleRows] = useState(1); // Number of rows to initially display
    const articlesPerRow = 3; // Number of articles per row

    const handleShowMore = () => {
        setVisibleRows(prevVisibleRows => prevVisibleRows + 1); // Show another row when "more" is clicked
    };

 
    const posts = [
   
        {
            title: "Agriculture ",
            img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            href: "javascript:void(0)"
        },
        {
            title: "Rent & Hire ",
            img: "https://images.unsplash.com/photo-1519918448158-956d40b0d8fe?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            href: "javascript:void(0)"
        },
        {
            title: "Daily Needs ",
            img: "https://images.unsplash.com/photo-1545601445-4d6a0a0565f0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            href: "javascript:void(0)"
        },
        {
            title: "Emergency Service ",
            img: "https://images.unsplash.com/photo-1635247187021-ad5ab658bc5e?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            href: "javascript:void(0)"
        },
        {
            title: "Home Services ",
            img: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            href: "javascript:void(0)"
        },
        {
            title: "Wedding ",
            img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D", 
            href: "javascript:void(0)"
        },
        {
            title: "Wedding ",
            img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D", 
            href: "javascript:void(0)"
        },
        {
            title: "Wedding ",
            img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D", 
            href: "javascript:void(0)"
        },
       
       
       
    ]
    
    return (
        <section className="my-12 mx-auto px-4 max-w-screen-2xl md:px-8">
            <div className="text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Our Services
                </h1>
                <p className="mt-3 text-gray-500">
                    Blogs that are loved by the community. Updated every hour.
                </p>
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {posts.slice(0, visibleRows * articlesPerRow).map((item, key) => (
                    <article className="max-w-sm  mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm bg-white" key={key}>
                        <a href={item.href}>
                            <img src={item.img} loading="lazy" alt={item.title} className="w-full h-48 rounded-t-md" />
                            <div className="flex items-center mt-2 pt-3 ml-4 mr-2"></div>
                            <div className="ml-4 mr-2 mb-5">
                                <h3 className="text-3xl text-deep-purple-600 text-center hover:scale-105 duration-150">
                                    {item.title}
                                </h3>
                            </div>
                        </a>
                    </article>
                ))}
            </div>
            <div className='flex items-center justify-center md:my-5'>
                <button onClick={handleShowMore} className="bg-purple-500 text-white px-4 py-2 rounded-md mt-4 block">
                    Show More
                </button>
            </div>
        </section>
    )
}
