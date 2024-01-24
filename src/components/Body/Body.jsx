import { useEffect, useState } from "react";
import Footer from "./../Footer/Footer"
import User from "./User";
import { FaRegUser } from "react-icons/fa";
import { SiSololearn } from "react-icons/si";
import { GoPlus } from "react-icons/go";
import { IoIosArrowRoundBack } from "react-icons/io";
import ModalForm from "../ModalForm";

export default function Body() {

    const [users, setUsers] = useState([]);
    const [update, setUpdate] = useState(false)
    const [activeModal, setActiveModal] = useState(0)
    const [findUser, setFindUser] = useState([])

    const [user, setUser] = useState({
        id: users.length,
        name: "",
        lName: "",
        userName: "",
        email: "",
        age: ""
    });

    const [currentPage, setCurrentPage] = useState(1) 
    const [rowsPerPage] = useState(3)

    useEffect(() => {
        fetch("https://fesharproject-default-rtdb.firebaseio.com/users.json")
            .then(data => data.json())
            .then(data => {
                const usersData = data ? Object.entries(data) : []
                setUsers(usersData)
            })
    }, [update])

    const addUser = () => {
        const { name, lName, userName, email, age } = user

        if (name.trim().length && lName.trim().length && userName.trim().length && email.trim().length && age.trim().length) {
            let data = {
                id: users.length + 1,
                name,
                lName,
                userName,
                email,
                age
            }

            fetch("https://fesharproject-default-rtdb.firebaseio.com/users.json", {
                method: "POST",
                body: JSON.stringify(data)
            }).then(() => setUpdate(preve => !preve)).then(resetValues)
        } else {alert("لطفا تمام اطلاعات را وارد کنید!")}
    }

    const editUser = id => {
        const FindUser = users.find(user => user[0] == id);
        setFindUser(FindUser[1])
        setActiveModal(preve => !preve)
    }

    const usersDataChangeHandler = data => setFindUser((prevUser) => ({ ...prevUser, [data[1]]: data[0] }));

    const resetValues = () => {
        setUser({
            id: users.length,
            name: "",
            lName: "",
            userName: "",
            email: "",
            age: ""
        });
    }

    const removeUser = id => {
        let makeSure = confirm("آیا از حذف این کاربر اطمینان دارید؟")
        makeSure && fetch(`https://fesharproject-default-rtdb.firebaseio.com/users/${id}.json`, { method: "DELETE" }).then(() => setUpdate(preve => !preve))
    }

    const saveEdits = id => {
        let findUserToEdit = users.filter(user => user[1].id == id);
        findUserToEdit[0][1] = findUser

        fetch(`https://fesharproject-default-rtdb.firebaseio.com/users/${findUserToEdit[0][0]}.json`, { method: "PUT", body: JSON.stringify(findUserToEdit[0][1]) })
        .then(() => {
            setActiveModal(0)
            setUpdate(preve => !preve);
        })
    }

    const prevePageHandler = () => currentPage > 1 && setCurrentPage(preve => preve - 1)

    const nextPageHandler = () => users.slice(currentPage * rowsPerPage - rowsPerPage, currentPage * rowsPerPage).length > 2 && setCurrentPage(preve => preve + 1)

    return (
        <>
            <main className="h-screen w-full bg-grayDark text-white relative overflow-y-hidden">
                <div className="flex pt-20">
                    <section className="max-w-[6%] xl:max-w-[15%] pt-14 h-screen w-full bg-primaryBlack ">
                        <ul className="w-full space-y-4 ch:h-12 ch:px-4 text-sm">

                            <li className="flex nav-active items-center gap-2 duration-200 transition-all">
                                <FaRegUser className="size-6 shrink-0 m-auto sm:m-0" />
                                <a className="hidden text-xl xl:block" href="#">کاربران</a>
                            </li>
                            <li className="flex items-center gap-2 duration-200 transition-all">
                                <SiSololearn className="size-6 shrink-0 m-auto sm:m-0" />
                                <a className="hidden text-xl xl:block" href="#">دوره ها</a>
                            </li>
                        </ul>
                    </section>
                    <section className="max-w-[94%] xl:max-w-[85%] w-full ">
                        <div className="p-8 h-[calc(100vh-160px)]">
                            <div className="bg-grayLight w-full h-[76vh] rounded-md overflow-hidden">
                                <p className="text-xl bg-[#404040] p-4">مدیریت کاربرها</p>
                                <div className="p-4">

                                    <table className="w-full border border-primaryBlack ch:h-12 text-center">
                                        <tr className="ch:p-4  bg-primaryBlack">
                                            <th>ایدی</th>
                                            <th>اسم</th>
                                            <th>فامیل</th>
                                            <th>نام کاربری</th>
                                            <th>ایمیل</th>
                                            <th>سن</th>
                                            <th>عملیات</th>
                                        </tr>
                                        <tr className="ch:max-w-5 ch:p-2 bg-primaryBlack ch:ch:outline-none">
                                            <td><input value={users.length + 1} className="max-w-[85%] py-1 rounded-sm text-primaryBlack px-2 placeholder:text-center" placeholder="ایدی" type="text" /></td>
                                            <td><input value={user.name} onChange={e => setUser(preve => ({ ...preve, name: e.target.value }))} className="max-w-[85%] py-1 rounded-sm text-primaryBlack px-2 placeholder:text-center" placeholder="اسم" type="text" /></td>
                                            <td><input value={user.lName} onChange={e => setUser(preve => ({ ...preve, lName: e.target.value }))} className="max-w-[85%] py-1 rounded-sm text-primaryBlack px-2 placeholder:text-center" placeholder="فامیل" type="text" /></td>
                                            <td><input value={user.userName} onChange={e => setUser(preve => ({ ...preve, userName: e.target.value }))} className="max-w-[85%] py-1 rounded-sm text-primaryBlack px-2 placeholder:text-center" placeholder="نام کاربری" type="text" /></td>
                                            <td><input value={user.email} onChange={e => setUser(preve => ({ ...preve, email: e.target.value }))} className="max-w-[85%] py-1 rounded-sm text-primaryBlack px-2 placeholder:text-center" placeholder="ایمیل" type="text" /></td>
                                            <td><input value={user.age} onChange={e => setUser(preve => ({ ...preve, age: e.target.value }))} className="max-w-[85%] py-1 rounded-sm text-primaryBlack px-2 placeholder:text-center" placeholder="سن" type="text" /></td>
                                            <td><button onClick={addUser} className="flex justify-center w-[90%] hover:bg-primary/75 transition-colors duration-300 m-auto px-2 py-2 bg-primary rounded-sm"><GoPlus className="size-5 shrink-0" /></button></td>
                                        </tr>

                                        {
                                            users.slice(currentPage * rowsPerPage - rowsPerPage, currentPage * rowsPerPage).map(user => <User onRemove={removeUser} onEdit={editUser} onAdd={addUser} key={user.id} {...user} />)
                                        }

                                    </table>

                                    <div className={`${users.length > 8 ? "flex" : "hidden"} items-center justify-between py-4 px-2 bg-white rounded-[8px] w-1/3 m-auto mt-4`}>
                                        <div onClick={nextPageHandler} className="text-black duration-200 cursor-pointer transition-all justify-center bg-gray-400 hover:bg-gray-500 rounded-md w-24 py-2 flex items-center gap-2 px-2">
                                            <IoIosArrowRoundBack className="size-7 rotate-180" />
                                            <p>بعد</p>
                                        </div>
                                        <div className="flex items-center text-black gap-8">
                                            <p className={`py-2 px-4 rounded-md ${users.slice(currentPage * rowsPerPage - rowsPerPage, currentPage * rowsPerPage).length < 2 && "hidden" }`}>{currentPage + 1}</p>
                                            <p className="active-page py-2 px-4 rounded-md">{currentPage}</p>
                                            <p className={`py-2 px-4 ${currentPage - 1 <= 0 && "hidden"} rounded-md`}>{currentPage - 1}</p>
                                        </div>
                                        <div onClick={prevePageHandler} className="text-black duration-200 cursor-pointer transition-all justify-center bg-gray-400 hover:bg-gray-500 rounded-md w-24 py-2 flex items-center gap-2 px-2">
                                            <p>قبل</p>
                                            <IoIosArrowRoundBack className="size-7" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ModalForm onUsersDataChangeHandler={usersDataChangeHandler} onSaveEdits={saveEdits} onEdit={editUser} onCancelEdit={() => setActiveModal(0)} {...users} user={findUser} isActive={activeModal} />
                        <Footer />
                    </section>
                </div>

            </main>
        </>
    )
}