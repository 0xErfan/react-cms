import { BiEditAlt } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";

export default function User(props) {
    const { id, name, lName, userName, email, age } = props[1]
    
    return (
        <tr className="ch:border even:bg-primaryBlack odd:bg-grayDark ch:border-primaryBlack">
            <td>{id}</td>
            <td>{name}</td>
            <td>{lName}</td>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{age}</td>
            <td className="flex ch:basis-[50%] ch:duration-300 ch:transition-all  ch:cursor-pointer">
                <BiEditAlt onClick={() => props.onEdit(props[0])} className="hover:bg-primary h-12 p-3 border-l border-primaryBlack" />
                <FaRegTrashAlt onClick={() => props.onRemove(props[0])} className="hover:bg-primary h-12 p-3" />
            </td>
        </tr>
    )
} 