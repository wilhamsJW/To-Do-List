import React from 'react';
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";

function Notes({ data }) {
    return (
        <>
            <li className="notpad-infos">

                <div>
                    <strong>{data.title}</strong>
                    <div>
                        <AiTwotoneDelete />
                    </div>
                </div>

                <textarea defaultValue={data.notes} ></textarea>
                <span><AiOutlineExclamationCircle /></span>

            </li>
        </>
    )
}

export default Notes;