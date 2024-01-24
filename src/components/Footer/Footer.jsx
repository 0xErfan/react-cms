import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex flex-row-reverse items-center justify-between text-white bg-primary w-full px-4 h-20">
            <p>.Created with ♥ by <a className="underline" href="http://t.me/llibanogs">Llibanogs</a> 2024</p>
            <div className="flex items-center gap-2">
                <a href="#"><FaGithub className="size-8 fill-gray-500" /></a>
                <a href="#"><FaFacebookF className="size-8 fill-gray-500" /></a>
                <a href="#"><FaLinkedin className="size-8 fill-gray-500" /></a>
            </div>
        </footer>
    )
}