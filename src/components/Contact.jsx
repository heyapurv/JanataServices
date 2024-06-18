export default () => {

    return (
        <main className="py-14  rounded-lg md:m-10 ">
            <div className="md:w-3/6  md:mx-auto px-4 text-gray-600 md:px-8 border border-gray-400 md:py-5 rounded-3xl mx-5 py-5">
                <div className="max-w-lg mx-auto space-y-3 sm:text-center">
                    <h3 className="text-purple-600 font-semibold">
                        Contact
                    </h3>
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Get in touch
                    </p>
                    <p>
                        We’d love to hear from you! Please fill out the form bellow.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"
                    >
                               <div>
                                    <label className="font-medium">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-gray-200 outline-none border border-gray-400 focus:border-gray-800 shadow-sm rounded-lg"
                                    />
                                </div>
                      
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-gray-400 focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Phone number
                            </label>
                            <div className=" mt-2">
                                
                                <input
                                    type="number"
                                    placeholder="+91 55555-55555"
                                    required
                                    className="w-full pl-5 pr-3 py-2 appearance-none bg-transparent outline-none border border-gray-400 focus:border-gray-800 shadow-sm rounded-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">
                                Message
                            </label>
                            <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border border-gray-400 focus:border-gray-800 shadow-sm rounded-lg"></textarea>
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-purple-600 hover:bg-purple-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}