import {atom, selector, selectorFamily} from 'recoil';
import {subscribeToAuthChange} from "../integration/firebaseAuthentication";
import {getUserGroups} from "../integration/firebaseDatabase";

const userIdStateEffect = () => ({setSelf}) => {
    let unsubscribe = subscribeToAuthChange(setSelf);
    return () => unsubscribe();
};

export const userState = atom({
    key: 'userState',
    default: null,
    effects: [userIdStateEffect()],
    dangerouslyAllowMutability: true
})

export const userIdState = selector({
    key: 'userIdState',
    get: ({get}) => {
        if(get(userState))
            return get(userState).uid;
        else return null;
    }
})

export const userEmailState = selector({
    key: 'userEmailState',
    get: ({get}) => {
        if(get(userState))
            return get(userState).email;
        else return null;
    }
})

export const userDisplayNameState = selector({
    key: 'userDisplayNameState',
    get: ({get}) => {
        if(get(userState))
            return get(userState).displayName;
        else return null;
    }
})

export const userGroupsState = selectorFamily({
    key: 'userGroups',
    get: (role) => async ({get}) => {
        if (get(userIdState))
            return await getUserGroups(get(userIdState), role)
        else return []
    }
})