import * as authActions from "../reducers/authReducer/actions";
import * as userActions from "../reducers/userReducer/actions";

const actionCreator = {
    ...authActions,
    ...userActions
};

export default actionCreator;