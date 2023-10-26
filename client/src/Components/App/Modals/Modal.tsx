import React, { useEffect, useState } from 'react'
import { IAction } from '../../../types';
import axios from 'axios';
import { isEmpty } from '../../../Utils';

export default function Modal({setModal, modal}: {setModal:any, modal:any}) {

    const [load, setLoad] = useState(false);
    const [action, setAction]:any = useState();

    useEffect(() => {
        if(!load) {
            axios({
                method: "GET",
                withCredentials: true,
                url: `${process.env.REACT_APP_API_URL}/action/${modal.id}`
            }).then((res) => {
                setAction(res.data)
                if (!isEmpty(action)) setLoad(true);
            })
        }
    }, [action]);

    return (
        <div className='modal-container'>

            <div className="modal">
                <div className="modal-head">
                    <span onClick={() => setModal({open:false, id: ""})}>X</span>
                </div>
                <div className="modal-body">
                    {load && (
                        <div className="field">
                            <input type="text" name="title" id="title" value={action.title} />
                            <input type="text" name="title" id="title" value={action.description} />
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}
