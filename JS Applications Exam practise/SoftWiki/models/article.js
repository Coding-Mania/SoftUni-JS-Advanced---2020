export default {
    create(data) {
        return firebase.firestore().collection("article").add(data);
    },
    update(id, data) {
        return firebase.firestore().collection("article").doc(id).update(data);
    },
    delete(id) {
        return firebase.firestore().collection("article").doc(id).delete();
    },
    getAll() {
        return firebase.firestore().collection("article").get();
    },
    get(id) {
        return firebase.firestore().collection("article").doc(id).get();
    }
}