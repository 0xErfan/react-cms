import { IoIosArrowRoundBack } from "react-icons/io";

export default function Pagination({ users, page, row, onPreve, onNext }) {
    return (
        <div className={`${users.length > 8 ? "flex" : "hidden"} select-none items-center justify-between py-4 px-2 bg-white rounded-[8px] w-1/3 m-auto mt-4`}>
            <div onClick={onNext} className="text-black duration-200 cursor-pointer transition-all justify-center bg-gray-400 hover:bg-gray-500 rounded-md w-24 py-2 flex items-center gap-2 px-2">
                <IoIosArrowRoundBack className="size-7 rotate-180" />
                <p className="md:flex hidden">بعد</p>
            </div>
            <div className="flex items-center text-black gap-8">
                <p className={`py-2 px-4 rounded-md ${users.slice((page + 1) * row - row, (page + 1) * row).length < 1 && "hidden"}`}>{page + 1}</p>
                <p className="active-page py-2 md:mx-0 mx-3 px-4 rounded-md">{page}</p>
                <p className={`py-2 px-4 ${page - 1 <= 0 && "hidden"} rounded-md`}>{page - 1}</p>
            </div>
            <div onClick={onPreve} className="text-black duration-200 cursor-pointer transition-all justify-center bg-gray-400 hover:bg-gray-500 rounded-md w-24 py-2 flex items-center gap-2 px-2">
                <p className="md:flex hidden">قبل</p>
                <IoIosArrowRoundBack className="size-7" />
            </div>
        </div>
    )
}