import { Lato } from "next/font/google";

const lato = Lato({ weight: "100", subsets: ["latin"] });

export const Navbar = () => {
    return (
        <div className="shadow-md fixed border bg-white w-full">
            <div className="max-w-screen-xl mx-auto">
                <div className="p-6 flex items-center justify-between">
                    <div className="text-2xl uppercase font-semibold">
                        Landing Page 1
                    </div>
                    <div className={`flex items-center space-x-4 uppercase font-thin ${lato.className}`}>
                        <div>Features</div>
                        <div>About</div>
                        <div>Services</div>
                        <div>Gallery</div>
                        <div>Testimonial</div>
                        <div>Team</div>
                        <div>Contact</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
