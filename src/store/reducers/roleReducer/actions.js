import axios from "axios";

export const loadRoles = () => async (dispatch) => {
    const response = await axios.get("https://localhost:7220/api/role/list");

    if(response.status === 200) {
        return dispatch({type: "ROLES_LOAD", payload: response.data});
    }

    return dispatch({type: "ERROR", payload: []});
}

export const createRole = (name) => {
    let id = 1;
    const localData = localStorage.getItem("roles");
    let roles = [];

    if(localData) {
        roles = JSON.parse(localData);
        id = roles[roles.length - 1].id + 1;
    }

    if(roles.findIndex(r => r.name === name.toLowerCase()) !== -1) {
        return {type: "ERROR", payload: `Role ${name} already exists`};
    }

    const role = {
        id: id,
        name: name.toLowerCase()
    }

    roles.push(role);

    localStorage.setItem("roles", JSON.stringify(roles));
    return {type: "ROLE_CREATE", payload: roles};
}

export const updateRole = (role) => {
    const roles = JSON.parse(localStorage.getItem("roles"));
    const index = roles.findIndex((r) => r.id.toString() === role.id.toString());
    if(index >= 0) {
        roles[index] = {...role};
        localStorage.setItem("roles", JSON.stringify(roles));
        return {type: "ROLE_UPDATE", payload: roles};
    } else {
        return {type: "ERROR", payload: "Role not found"};
    }
}

export const deleteRole = (id) => {
    const localData = localStorage.getItem("roles");
    if(localData) {
        const roles = JSON.parse(localData);
        const updatedRoles = roles.filter(u => u.id.toString() !== id.toString());
        localStorage.setItem("roles", JSON.stringify(updatedRoles));
        return {type: "ROLE_DELETE", payload: updatedRoles};
    }
}