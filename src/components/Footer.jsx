export default () => {

    const footerNavs = [
        {
            label: "Useful Links",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Home'
                },
                {
                    href: 'javascript:void()',
                    name: 'About Us'
                },
                {
                    href: 'javascript:void()',
                    name: 'Become a Partner'
                },
              
            ],
        },
        {
            label: "Policy",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Privacy Policy'
                },
                {
                    href: 'javascript:void()',
                    name: 'Terms & Conditions'
                },
                {
                    href: 'javascript:void()',
                    name: 'Return Policy'
                },
                
            ],
        },
        {
            label: "Contact Us",
            items: [
                {
                    href: 'javascript:void()',
                    name: '+917972727375'
                },
                {
                    href: 'javascript:void()',
                    name: 'License'
                },
                {
                    href: 'javascript:void()',
                    name: 'Privacy'
                },
                
            ]
        }
    ]

    return (
        <footer className="text-white bg-purple-700 px-4 py-5  md:px-8  rounded-2xl mt-5 mx-3 mb-3">
            <div className="gap-6 justify-between md:flex md:mx-10">
                <div className="flex-1">
                    <div className="max-w-xs">
                        <h5 className="font-bold text-3xl drop-shadow-2xl">Janata Services</h5>
                        <p className="leading-relaxed mt-2 text-[15px]">
                           Address:
                           <p>Shegaon </p>
                           <a href="tel:917972727375"> <p>Phone: 917972727375 </p></a>
                           <a href="mailto:janataservices.ni3@gmail.com"><p>Email: janataservices.ni3@gmail.com </p></a>
 

                        </p>
                    </div>
                    
                </div>
                <div className=" md:flex-1 grid grid-cols-2 mt-10 gap-10 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4"
                                key={idx}
                            >
                                <h4 className="text-white underline text-md font-bold">
                                    { item.label }
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <a 
                                                href={el.href}
                                                className="hover:underline duration-300 hover:text-gray-400"
                                            
                                            >
                                                { el.name }
                                            </a>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div className="mt-8 py-6 border-t items-center ">
                <div className="mt-4 sm:mt-0 text-center">
                    &copy; 2024 Janata Sevices All rights reserved.
                </div>
            </div>
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
    )
}
