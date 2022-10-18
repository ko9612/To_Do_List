import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

const TodoItem = ({todos,onDelete,onCheck}) => {

    const {id,text,checked} = todos

    return (
        <div>
            <li className={checked ? 'on' : null }>
                <span onClick={()=>onCheck(id)}>
                    {checked ? <FontAwesomeIcon className='circle' icon={faCircleCheck} /> : <FontAwesomeIcon className='circle' icon={faCircle} />}
                </span>
                <check onClick={()=>onCheck(id)}>{text}</check>
                <button onClick={()=>onDelete(id)}><FontAwesomeIcon icon={faDeleteLeft} /></button>
            </li>
        </div>
    );
};

export default TodoItem;