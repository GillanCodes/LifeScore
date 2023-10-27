import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export default function Modal({setModal, modal}: {setModal:any, modal:any}) {

    const actionsData = useSelector((state:any) => state.actionsReducer);

    const [load, setLoad] = useState(false);
    const [currentAction, setCurrentAction]:any = useState();

    useEffect(() => {
        console.log(actionsData)
    }, [actionsData]);

    return (
        <div className='modal-container'>

            <div className="modal">
                <div className="modal-head">
                    <span onClick={() => setModal({open:false, id: ""})}>X</span>
                </div>
                <div className="modal-body">
                    {load && (
                        <div className="field">
                            <input type="text" name="title" id="title" value={currentAction.title} />
                            <input type="text" name="title" id="title" value={currentAction.description} />
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}
