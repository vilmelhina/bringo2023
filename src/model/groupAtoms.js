import {selectorFamily} from "recoil";
import {getGroup} from "../integration/firebaseDatabase";

export const groupState = selectorFamily({
    key: 'groupState',
    get: (id) => () => {
        return getGroup(id);
    }
});