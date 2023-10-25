import { useSelector } from "react-redux";
import ActionsFeed from "./ActionsFeed";
import { useEffect, useState } from "react";
import { isEmpty } from "../../Utils";

export default function AppContainer() {

    const userData = useSelector((state:any) => state.userReducer);

    const [load, setLoad] = useState(false);

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
                        <ActionsFeed user={userData} />
                    )}
                </div>

            </div>

        </div>
    )
}
