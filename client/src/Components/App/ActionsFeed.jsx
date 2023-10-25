import { useEffect, useState } from "react"
import { isEmpty } from "../../Utils";
import axios from "axios";

export default function ActionsFeed({user}) {

    const [actions, setActions] = useState();

    useEffect(() => {
        if (user)
        {
            if (!isEmpty(user._id))
            {
                axios({
                    method:"GET",
                    withCredentials:true,
                    url: `${process.env.REACT_APP_API_URL}/action`
                }).then((res) => {
                    setActions(res.data);
                });
            }
        }
    }, [user]);

    return (
        <div>
            {!isEmpty(actions) && actions.map((action) => {
                return (
                    <div className="card" key={action._id} id={action._id}>    
                        <div className="card-head">
                            <p className="card-title">{action.title}</p>
                            <p className="card-description">{action.description}</p>
                        </div>
                        <div className="card-body">
                            {action.type === "counter" && (
                                <>
                                <div className="buttons">
                                    <p>+</p>
                                    <p>-</p>
                                </div>
                                <div className="counter">
                                    <p>{action.counter}</p>
                                </div>
                                </>
                            )}
                        </div>

                    </div>
                )
            })}
        </div>
    )
}
