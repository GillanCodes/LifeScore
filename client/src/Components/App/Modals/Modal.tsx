import React, { useEffect, useState } from 'react'
import { IAction } from '../../../types';
import axios from 'axios';
import { isEmpty } from '../../../Utils';
import { useDispatch, useSelector } from 'react-redux';
import { editActions } from '../../../actions/action.actions';

export default function Modal({setModal, modal}: {setModal:any, modal:any}) {

    const dispatch:any = useDispatch();

    const actionsData = useSelector((state:any) => state.actionsReducer);

    const [load, setLoad] = useState(false);
    const [currentAction, setCurrentAction]:any = useState();

    useEffect(() => {
        if(!load) {
            if (!isEmpty(actionsData))
            {
                actionsData.map((action:IAction) => {
                    if (action._id === modal.id)
                    {
                        setCurrentAction(action);
                        setLoad(true);
                    }
                })
            }
        }
    }, [actionsData, load]);

    const saveHandle = () => {
        dispatch(editActions(currentAction));
    }

    return (
        <div className='modal-container'>

            <div className="modal">
                <div className="modal-head">
                    <span onClick={() => setModal({open:false, id: ""})}>X</span>
                </div>
                <div className="modal-body">
                    {load && (
                        <div className="field">
                            <input type="text" name="title" id="title" value={currentAction.title} onChange={(e) => {setCurrentAction({...currentAction, title:e.target.value})}} />
                            <input type="text" name="title" id="title" value={currentAction.description} onChange={(e) => {setCurrentAction({...currentAction, description:e.target.value})}} />
                            <select name="types" id="types" value={currentAction.type} onChange={(e) => setCurrentAction({...currentAction, type:e.target.value}) }>
                                <option value="timer">Timer</option>
                                <option value="counter">Counter</option>
                            </select>

                            {currentAction.type === "counter" && (
                                <div className="fields">
                                    <input type="number" value={currentAction.counter} onChange={(e) => setCurrentAction({...currentAction, counter:e.target.value}) } />
                                    <input type="number" value={currentAction.step} onChange={(e) => setCurrentAction({...currentAction, step:e.target.value}) } />
                                </div>
                            )}

                            {currentAction.type === "timer" && (
                                <input type="datetime-local" id="start" name="trip-start" value={currentAction.time} onChange={(e) => setCurrentAction({...currentAction, time:e.target.value}) } />
                            )}

                            <button onClick={saveHandle}>Send</button>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}
