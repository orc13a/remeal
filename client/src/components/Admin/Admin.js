import { Auth } from "../Auth/Auth";
import { AdminAuth } from '../Auth/AdminAuth';
import PageTitle from "../PageTitle/PageTitle";

function Admin() {
    Auth(false);
    AdminAuth();

    return (
        <>
            <PageTitle title={ 'Admin' } />
        </>
    );
}

export default Admin;