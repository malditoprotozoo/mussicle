// Información base de Firebase
const config = {
  apiKey: "AIzaSyBNw_KqGZwp8xg-J1r-e8spIIXkglnlhF0",
  authDomain: "mussicle-app.firebaseapp.com",
  databaseURL: "https://mussicle-app.firebaseio.com",
  projectId: "mussicle-app",
  storageBucket: "mussicle-app.appspot.com",
  messagingSenderId: "1077193889162"
};

// Tutorial usado: https://www.youtube.com/watch?v=-OKrloDzGpU&t=210s

// Declarando variables
const btnReg = $('#btn-register');
const btnLog = $('#btn-login');
const inputPass = $('#input-pass');
const inputMail = $('#input-mail');
const btnLogOut = $('#btn-logout');

// Creando funciones

// Función para logearse a Firebase
const login = () => {
  btnLog.click(function(error) {
    const email = inputMail.val();
    const pass = inputPass.val();
    const auth = firebase.auth();

    //Limpiando los inputs
    inputMail.val('');
    inputPass.val('');
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(error => console.log(error.message));
  });
};

// Función para registrarse en Firebase
const signUp = () => {
  btnReg.click(function(error) {
    // POR HACER: Revisar que este input sea un email y no cualquier string
    const email = inputMail.val();
    const pass = inputPass.val();
    const auth = firebase.auth();

    //Limpiando los inputs
    inputMail.val('');
    inputPass.val('');
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(error => console.log(error.message));
  });
};

// Creando función que haga algo cuando el usuario esté loggeado
const realTimeListener = () => {
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
    } else {
      console.log('not logged');
    }
  });
};

// Creando función para desloguearse

const signout = () => {
  btnLogOut.click(function() {
    firebase.auth().signOut();
  });
};