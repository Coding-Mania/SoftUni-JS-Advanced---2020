export default {
    create(data) {
        return firebase.firestore().collection("treks").add(data);
    },
    update(id, data) {
        return firebase.firestore().collection("treks").doc(id).update(data);
    },
    delete(id) {
        return firebase.firestore().collection("treks").doc(id).delete();
    },
    getAll() {
        return firebase.firestore().collection("treks").get();
    },
    get(id) {
        return firebase.firestore().collection("treks").doc(id).get();
    }
}