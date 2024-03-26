import Image from "next/image"

export const Header = () => {
    return (
        <div className="relative">
            <Image src="/header.jpg" alt="header" width={0} height={0} sizes="100vw" className="w-full h-full bg-cover" />
            <div className="absolute top-0 left-0 w-full bg-black/20 h-full">
                <div className="max-w-screen-xl mx-auto p-80">
                    <div className="text-center">
                        <div className="text-6xl text-white font-semibold leading-normal">
                            WE ARE A LANDING PAGE
                        </div>
                        <div className="text-xl text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.
                        </div>
                        <button className="mt-16 bg-gradient-to-tl from-blue-500 to-purple-600 p-4 text-white rounded-2xl">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
