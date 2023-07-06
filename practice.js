const firebaseConfig = {
   apiKey: "AIzaSyBmvX6Nt4pWKYxnUiBxdwf_FSe5HJIzBj4",
   authDomain: "kwitter-54146.firebaseapp.com",
   databaseURL: "https://kwitter-54146-default-rtdb.firebaseio.com",
   projectId: "kwitter-54146",
   storageBucket: "kwitter-54146.appspot.com",
   messagingSenderId: "437701622833",
   appId: "1:437701622833:web:9853d8148da095a25b2910"
 };
//ADICIONE OS LINKS DO SEU APP FIREBASE



// Inicializar Firebase
   firebase.initializeApp(firebaseConfig);


function addUser(){
userName = document.getElementById("userName").value;
 firebase.database().ref("/").child(userName).update({
   purpose: "adding user"
});
}



































// Adicionar a função para adicionar usuário 