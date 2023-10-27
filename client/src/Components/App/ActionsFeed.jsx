import { useEffect, useState } from "react"
import { isEmpty } from "../../Utils";
import axios from "axios";
import Timer from "./Modules/Timer";
import Modal from "./Modals/Modal";
import { useSelector } from "react-redux";

export default function ActionsFeed({user, modal, setModal}) {

    const [load, setLoad] = useState(false);

    const actionsData = useSelector((state) => state.actionsReducer);

    useEffect(() => {
        if (!isEmpty(actionsData))
        {
            setLoad(true);
        }
    }, [actionsData]);

    return (
        <div>
            {load && actionsData.map((action) => {
                return (
                    <div className="card" key={action._id} id={action._id}>    
                        <div className="card-head">
                            <p className="card-title">{action.title}</p>
                            <p className="card-description">{action.description}</p>
                        </div>
                        <div className="card-body">
                            <>
                                <div className="buttons">
                                    <p onClick={() => setModal({open:true, id:action._id})}>Edit</p>
                                </div>
                                {action.type === "counter" && (
                                    <>
                                        <div className="counter">
                                            <p className="select-none">{action.counter}</p>
                                        </div>
                                    </>
                                )}
                                {action.type === "timer" && (
                                    <>
                                        <Timer action={action} />  
                                    </>
                                )}
                            
                            </>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}
