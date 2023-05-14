import {atomFamily, selectorFamily} from "recoil";
import {getGroup, setGroupField, subscribeToGroup} from "../integration/firebaseDatabase";

export const groupState = atomFamily({
    key: 'groupState',
    default: selectorFamily({
        key: 'groupState/Default',
        get: (id) => () => {
            return getGroup(id);
        },
    }),
});

const syncStorageEffect = (groupID, path) => async ({setSelf, trigger, onSet}) => {
    // Initialize atom value to the remote storage state
    if (trigger === 'get') { // Avoid expensive initialization
        setSelf((await getGroup(groupID))[path]); // Call synchronously to initialize
    }

    onSet(newValue => {
        setGroupField(groupID, newValue, path)
    });

    return subscribeToGroup(groupID, path, setSelf);
};

export const groupCellsState = atomFamily({
    key: 'groupCellsState',
    effects: userID => [syncStorageEffect(userID, 'cells')],
})