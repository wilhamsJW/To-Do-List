import React from 'react';
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";

import './styles-priority.css'

function Notes({ data }) {
    return (
        <>
            <li className={data.priority ? "notpad-infos-priority" : "notpad-infos"}>

                <div>
                    <strong>{data.title}</strong>
                    <div>
                        <AiTwotoneDelete size='24' />
                    </div>
                </div>

                <textarea defaultValue={data.notes} ></textarea>
                <span title="Voce pode editar o card e deletar"><AiOutlineExclamationCircle size='24' /></span>

            </li>
        </>
    )
}

export default Notes;