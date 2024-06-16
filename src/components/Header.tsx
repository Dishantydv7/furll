import Link from "next/link"


export default function Header() {
    return (
        <div className="flex flex-col h-screen">
            <header className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white">
                <div className="flex items-center justify-center">
                    <span>#Vibe Page</span>
                </div>
                <div className="flex items-center gap-3 mr-5">
                    <HeartIcon className="h-6 w-6 mr-2" />
                    <ShoppingBagIcon className="h-6 w-6" />
                </div>
            </header>
            <div className="relative flex-1 overflow-y-scroll">
                <img src="https://th.bing.com/th/id/R.e9684c769c711d26a9327717da5d8b41?rik=lR9sfYfMy%2bPoHw&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f38200000%2fLink-Hyrule-Warriors-the-legend-of-zelda-38289748-1280-720.jpg&ehk=0uvK0xttsZje%2fB1cniOyezhmRNvDY7tkg%2bX8xCURj80%3d&risl=&pid=ImgRaw&r=0" alt="Banner Image" className="w-full h-[200px]" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-transparent p-4 text-white">
                    <h2 className="text-2xl font-bold">#NightFlea</h2>
                    <div className="flex items-center mt-2">
                        <HeartIcon className="h-6 w-6 mr-2" />
                        <span>6.7k</span>
                    </div>
                </div>
                <div className="px-4 py-2 bg-black-100">
                    <div className="bg-gray-400 rounded-lg p-2 pl-5">
                        <div className="bg-white rounded-lg inline-block p-2 pl-3 pr-3 text-black">
                            Products
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-4 mt-3">
                        <span className="text-sm text-gray-500 ">192 Products</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                        <button className="px-4 py-2 bg-purple-500 text-white rounded-full">All</button>
                        <button className="px-4 py-2 bg-gray-200 rounded-full">Home</button>
                        <button className="px-4 py-2 bg-gray-200 rounded-full">Apparel</button>
                        <button className="px-4 py-2 bg-gray-200 rounded-full">Accessories</button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4">
                    <Link href={'/ProductInfo'}>
                        <div className="bg-white rounded-lg shadow-md relative w-full">
                            <img src="https://th.bing.com/th/id/OIP._Z8SCe1b-8qnn2jl4why5gHaLW?w=780&h=1196&rs=1&pid=ImgDetMain" alt="Product Image" className="w-full h-auto object-contain" />
                            <div className="p-2">
                                <h4 className="text-sm font-bold mb-1 text-black">Go Everywhere Top - Buttercup</h4>
                                <p className="text-sm text-gray-500">Rs. 2,990</p>
                                <div className="flex items-center justify-end mt-2">
                                    <Link href={'/Share'}>
                                    <ShareIcon className="h-6 w-6 text-gray-500" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/ProductInfo'}>
                    <div className="bg-white rounded-lg shadow-md relative w-full">
                        <img src="https://th.bing.com/th/id/OIP._Z8SCe1b-8qnn2jl4why5gHaLW?w=780&h=1196&rs=1&pid=ImgDetMain" alt="Product Image" className="w-full h-auto object-contain" />
                        <div className="p-2">
                            <h4 className="text-sm font-bold mb-1 text-black">Light Green Cotton Dress With B...</h4>
                            <p className="text-sm text-gray-500">
                                Rs. 1,520 <span className="line-through">Rs. 3,800</span>{" "}
                                <span className="bg-red-500 text-white px-1 rounded-sm">60%</span>
                            </p>
                            <div className="flex items-center justify-end mt-2">
                                <Link href={'/Share'}>
                                <ShareIcon className="h-6 w-6 text-gray-500" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="p-4">
                    <img src="https://th.bing.com/th/id/OIP.v9QJdL_HeQ1A2Aa3SoDKZAHaEK?rs=1&pid=ImgDetMain" alt="Product Image" className="w-full  object-cover rounded-lg" />
                </div>
            </div>
        </div>
    )
}

function DownloadIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
    )
}


function HeartIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    )
}


function ShareIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" x2="12" y1="2" y2="15" />
        </svg>
    )
}


function ShoppingBagIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
    )
}


function UserIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}


function XIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}