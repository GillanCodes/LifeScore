import { useSelector } from "react-redux";
import ActionsFeed from "./ActionsFeed";
import { useEffect, useState } from "react";
import { isEmpty } from "../../Utils";
import Modal from "./Modals/Modal";
import Logout from "./Modules/Logout";

export default function AppContainer() {

    const userData = useSelector((state:any) => state.userReducer);

    const [load, setLoad] = useState(false);    
    
    const [modal, setModal] = useState({open: false, id: ""});

    useEffect(() => {
        if(!isEmpty(userData))
            setLoad(true);
    }, [userData]);

    return (
        <div className='container'>

            <div className="app-container">

                <div className="head">
                    <h1 className="title">LifeScore</h1>
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
