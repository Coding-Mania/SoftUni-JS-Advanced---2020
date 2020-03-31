export default {
    create(data) {
        return firebase.firestore().collection("treks").add(data);
    },
    update(email, password) {
       // return firebase.auth().signInWithEmailAndPassword(email, password);
    },
    delete() {
        //return firebase.auth().signOut();
    },
    getAll() {
        return firebase.firestore().collection("treks").get();
    },
    get(id){
        return firebase.firestore().collection("treks").doc(id).get();
    }
}