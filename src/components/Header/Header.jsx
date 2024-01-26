import { MdOutlineEmail } from "react-icons/md";
import { IoReorderThree } from "react-icons/io5";

export default function Header() {
    return (
        <>
            <header className="sticky flex top-0 items-center justify-between z-40 bg-primary h-20 px-6 shadow-black shadow-regular2 text-white/90">
                <div className="flex items-center max-w-[50%] w-full gap-4">
                    <IoReorderThree className="size-14 cursor-pointer border-l border-black/80 pl-4" />
                    <h2 className="text-xl">Llibanogs-admin</h2>

                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 ga-4 border-l border-black/80 pl-4">
                        <MdOutlineEmail className="size-6" />
                        <h4>Contact @Llibanogs</h4>
                    </div>
                    <div className="size-12 rounded-full border border-black/80 overflow-hidden">
                        <img className="size-full object-cover" src="./images/ellie-guitar-last-of-us-2-uhdpaper.com-hd-5.2491.jpg" />
                    </div>
                </div>
            </header>
        </>
    )
}