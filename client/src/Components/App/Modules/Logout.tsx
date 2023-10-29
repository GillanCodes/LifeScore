import axios from "axios"

export default function Logout() {

    const logoutHandle = () => {
        axios({
            method: 'POST',
            withCredentials:true,
            url: `${process.env.REACT_APP_API_URL}/auth/signout`
        }).then((res) => {
            const win:Window = window;
            win.location = '/';
        })
    }

    return (
        <button className="button" onClick={logoutHandle}>Logout</button>
    )
}
