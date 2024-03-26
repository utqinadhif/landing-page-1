import Image from "next/image"

export const Gallery = () => {
    return (
        <div className="bg-slate-100 pt-28">
            <div className="max-w-screen-xl mx-auto">
                <div className="relative text-3xl font-semibold text-center p-5 uppercase after:absolute after:w-10 after:h-1 after:bg-gradient-to-tl after:from-blue-500 after:to-purple-600 after:bottom-0 after:left-[50%] after:transform after:-translate-x-1/2">
                    Gallery
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 mt-4">
                    <div>
                        <Image className="w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" width={50} height={50} />
                    </div>
                    <div>
                        <Image className="w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" width={50} height={50} />
                    </div>
                    <div>
                        <Image className="w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" width={50} height={50} />
                    </div>
                    <div>
                        <Image className="w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" width={50} height={50} />
                    </div>
                    <div>
                        <Image className="w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" width={50} height={50} />
                    </div>
                    <div>
                        <Image className="w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" width={50} height={50} />
                    </div>
                    <div>
                        <Image className="w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="" width={50} height={50} />
                    </div>
                    <div>
                        <Image className="w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="" width={50} height={50} />
                    </div>
                    <div>
                        <Image className="w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="" width={50} height={50} />
                    </div>
                    <div>
                        <Image className="w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="" width={50} height={50} />
                    </div>
                    <div>
                        <Image className="w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt="" width={50} height={50} />
                    </div>
                    <div>
                        <Image className="w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt="" width={50} height={50} />
                    </div>
                </div>
            </div>
        </div>
    );
}
