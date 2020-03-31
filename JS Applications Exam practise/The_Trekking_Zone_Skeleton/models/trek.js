export default {
    create(data){
        return firebase.firestore().collection("treks").add(data);
    },
    update(email, password){
        return firebase.auth().signInWithEmailAndPassword(email, password);
    },
    delete(){
        return firebase.auth().signOut();
    },
    getAll(){
        firebase.firestore().collection("treks").get();
    }
}