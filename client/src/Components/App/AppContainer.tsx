import { useDispatch, useSelector } from "react-redux";
import ActionsFeed from "./ActionsFeed";
import { useEffect, useState } from "react";
import { isEmpty } from "../../Utils";
import Modal from "./Modals/Modal";
import Logout from "./Modules/Logout";
import { newAction } from "../../actions/action.actions";

export default function AppContainer() {

    const dispatch:any = useDispatch();
    const userData = useSelector((state:any) => state.userReducer);

    const [load, setLoad] = useState(false);    
    const [modal, setModal] = useState({open: false, id: ""});

    useEffect(() => {
        if(!isEmpty(userData))
            setLoad(true);
    }, [userData]);

    const newCardHandler = () => {
        dispatch(newAction());
    }

    return (
        <div className='container'>

            <div className="app-container">

                <div className="head">
                    <h1 className="title">LifeScore</h1>
                    <button className="new-card" onClick={newCardHandler}>+</button>
                </div>

                <div className="body">
                    {load && (
                        <>
                            <ActionsFeed user={userData} modal={modal} setModal={setModal} />
                            {!isEmpty(modal.id) && modal.open && (
                                <Modal setModal={setModal} modal={modal} />
                            )}
                        </>
                    )}
                </div>

                <div className="footer">
                    {load && (
                        <>
                            <p>{userData.username}</p>
                            <Logout />
                        </>
                    )}
                </div>

            </div>

        </div>
    )
}
