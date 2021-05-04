import { getUserRecipes } from '../../actions/recipes';
import { getLoggedInUser } from '../Auth/Auth';

export const sendUserItems = (dispatch, userItems) => {
    // const dispatch = useDispatch();
    // const userItem = useSelector(state => state.items);s

    let allUserItems = [];

    if (userItems.length > 0) {
        userItems.forEach(item => {
            allUserItems.push(item.item.toLowerCase());
        });
    }

    dispatch(getUserRecipes({
        user: getLoggedInUser(),
        items: allUserItems
    }));
}