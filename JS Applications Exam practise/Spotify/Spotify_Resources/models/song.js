export default {
    create(data) {
        return firebase.firestore().collection("songs").add(data);
    },
    update(id, data) {
        return firebase.firestore().collection("songs").doc(id).update(data);
    },
    delete(id) {
        return firebase.firestore().collection("songs").doc(id).delete();
    },
    getAll() {
        return firebase.firestore().collection("songs").get();
    },
    get(id) {
        return firebase.firestore().collection("songs").doc(id).get();
    }
}