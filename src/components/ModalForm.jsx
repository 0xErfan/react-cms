export default function ModalForm(props) {
    const { id, name, lName, userName, email, age } = props.user

    return (
        <div className={`flex justify-center items-center opacity-0 absolute inset-0 ${props.isActive ? "flex opacity-100" : "hidden"} duration-300 transition-all backdrop-blur-sm bg-transparent`}>
            <div className="flex flex-col ch:min-w-full gap-6 text-black bg-white p-4 rounded-xl">
                <label className="text-xl ch:px-2 ch:py-1 ch:mt-1 ch:rounded-md ch:w-full">
                    ایدی:
                    <input value={id} className="border border-primaryBlack" type="text" />
                </label>
                <label className="text-xl ch:px-2 ch:py-1 ch:mt-1 ch:rounded-md ch:w-full">
                    اسم:
                    <input onChange={e => props.onUsersDataChangeHandler([e.target.value, "name"])} value={name} className="border border-primaryBlack" type="text" />
                </label>
                <label className="text-xl ch:px-2 ch:py-1 ch:mt-1 ch:rounded-md ch:w-full">
                    فامیل:
                    <input onChange={e => props.onUsersDataChangeHandler([e.target.value, "lName"])} value={lName} className="border border-primaryBlack" type="text" />
                </label>
                <label className="text-xl ch:px-2 ch:py-1 ch:mt-1 ch:rounded-md ch:w-full">
                    نام کاربری:
                    <input onChange={e => props.onUsersDataChangeHandler([e.target.value, "userName"])} value={userName} className="border border-primaryBlack" type="text" />
                </label>
                <label className="text-xl ch:px-2 ch:py-1 ch:mt-1 ch:rounded-md ch:w-full">
                    ایمیل:
                    <input onChange={e => props.onUsersDataChangeHandler([e.target.value, "email"])} value={email} className="border border-primaryBlack" type="text" />
                </label>
                <label className="text-xl ch:px-2 ch:py-1 ch:mt-1 ch:rounded-md ch:w-full">
                    سن:
                    <input onChange={e => props.onUsersDataChangeHandler([e.target.value, "age"])} value={age} className="border border-primaryBlack" type="text" />
                </label>
                <div className="flex items-center gap-2 ch:duration-300 ch:transition-all">
                    <button onClick={() => props.onSaveEdits(id)} className="text-white w-20 hover:bg-green-700 rounded-md py-2 bg-green-600">ذخیره</button>
                    <button onClick={props.onCancelEdit} className="text-white w-20 hover:bg-red-700 rounded-md py-2 bg-red-600">لغو</button>
                </div>
            </div>
        </div>
    )
}