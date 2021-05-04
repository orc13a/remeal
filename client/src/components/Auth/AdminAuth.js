import { useHistory } from "react-router";
import { getLoggedInUser } from "./Auth";


export const AdminAuth = () => {
    const history = useHistory();

    if (getLoggedInUser().admin === false) {
        history.push('/');
    }
}