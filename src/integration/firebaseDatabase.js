import {collection, doc, getDoc, getDocs, getFirestore, onSnapshot, query, updateDoc, where, addDoc} from "firebase/firestore";
import {app} from "./firebaseAuthentication.js";
import {generateBoard} from "../model/gameLogic";

// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

//const userGroups = collection(database, "userGroups");
const groups = collection(database, "groups");

export async function getUserGroups(userID, role) { // TODO: possibly rewrite
    console.log("searching for " + userID + " in " + role)
    // const querySnapshot = await getDocs(query(userGroups, where("user_id", "==", userID)));
    const querySnapshot = await getDocs(query(collection(database, "groups/"), where(role, "array-contains", userID)))
    let res = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        res = [...res, {id: doc.id,...doc.data()}];
    });
    return res;
}

export async function getGroup(id) { // TODO: possibly rewrite
    console.log("searching for group " + id)
    const docRef = doc(database, "groups", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        // docSnap.data() will be undefined in this case
        // TODO: error handling?
        return "no doc"
    }
}

export function setGroupField(id, data, path) {
    let obj = {};
    obj[path] = data;
    return updateDoc(doc(database, "groups", id), obj).catch(console.log);
}

export function subscribeToGroup(id, path, callback) {
    return onSnapshot(doc(database, "groups", id), (doc) => callback(doc.data()[path]))
}

export async function createGroup(name, userID) {
    await addDoc(collection(database, "groups"), {
        members: [userID],
        cells: [],
        name: name,
        current_game: null,
        game_history: []
    });
}

export async function startGame(groupID, members, cells,) {
    let memberData = members.map((uid) => {return {user: uid, cells: generateBoard(cells, 25)}});
    let gameData = {
        start_time: Date.now(),
        boards: memberData
    }
    await setGroupField(groupID, gameData, "current_game");
}