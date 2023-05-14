import { getFirestore, collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";
import {app} from "./firebaseAuthentication.js";

// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

//const userGroups = collection(database, "userGroups");
const groups = collection(database, "groups");

export async function getUserGroups(userID, role) { // TODO: possibly rewrite
    console.log("searching for " + userID + " in " + role)
    // const querySnapshot = await getDocs(query(userGroups, where("user_id", "==", userID)));
    const querySnapshot = await getDocs(query(groups, where(role, "array-contains", userID)))
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