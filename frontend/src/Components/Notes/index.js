import React, { useState } from 'react';
import { AiTwotoneDelete, AiOutlineExclamationCircle, AiTwotoneSwitcher } from "react-icons/ai";

import api from "../../services/api"

import './styles-priority.css'

function Notes({ data, handleDelete, handleChangePriority }) {

    const [changedNote, setChangedNote] = useState('')

    // Edição das notas
    async function handleSave(e, notes) {
        // cursor sai do modo text e volta a ser uma seta
        e.style.cursor = 'default';
        // retirando sombreamento do card clikado
        e.style.boxShadow = 'none';

        if (e.value == notes) {
            alert('Voce não fez nenhuma alteração!')
            notes = ''
            return
        } else {
            const response = await api.put(`/contents/${data._id}`, {
                notes: changedNote
            })
            return alert(`${response.data}`)
        }

    }

    function handleEdit(e, priority) {
        e.style.cursor = 'text';
        e.style.borderRadius = '5px';

        // Adicionando sombra ao card clikado com prioridade e sem prioridade
        if (priority) e.style.boxShadow = '0 0 5px yellow';
        else e.style.boxShadow = '0 0 5px gray';
    }

    return (
        <>
            <li className={data.priority ? "notpad-infos-priority" : "notpad-infos"}>

                <div>
                    <strong>{data.title}</strong>
                    <div>
                        <AiTwotoneDelete
                            size='24'
                            title="Excluir"
                            onClick={() => handleDelete(data._id)}
                        />
                    </div>
                </div>

                <textarea
                    defaultValue={data.notes}
                    onChange={e => setChangedNote(e.target.value)}
                    onBlur={e => handleSave(e.target, data.notes)}
                    onClick={e => handleEdit(e.target, data.priority)}
                />
                <span title="Edite o card e clik fora para salvar.">
                    <AiOutlineExclamationCircle
                        size='24'
                    />
                </span>
                <span title="Altere a prioridade.">
                    <AiTwotoneSwitcher
                        size='24'
                        onClick={() => handleChangePriority(data._id)}
                    />
                </span> 

            </li>
        </>
    )
}

export default Notes;