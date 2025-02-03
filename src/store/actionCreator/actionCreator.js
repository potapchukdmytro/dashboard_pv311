import * as authActions from "../reducers/authReducer/actions";
import * as userActions from "../reducers/userReducer/actions";
import * as themeActions from "../reducers/themeReducer/actions";

const actionCreator = {
    ...authActions,
    ...userActions,
    ...themeActions
};

export default actionCreator;