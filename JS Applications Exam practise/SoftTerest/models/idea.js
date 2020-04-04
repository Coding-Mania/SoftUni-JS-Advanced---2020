export default {
    create(data) {
        return firebase.firestore().collection("idea").add(data);
    },
    update(id, data) {
        return firebase.firestore().collection("idea").doc(id).update(data);
    },
    delete(id) {
        return firebase.firestore().collection("idea").doc(id).delete();
    },
    getAll() {
        return firebase.firestore().collection("idea").get();
    },
    get(id) {
        return firebase.firestore().collection("idea").doc(id).get();
    }
}