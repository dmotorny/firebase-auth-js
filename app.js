(function() {
    
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAhiefIsbzCYeWDi9b5LV-R80-mNRzfKZw",
      authDomain: "mailbox-87bdf.firebaseapp.com",
      databaseURL: "https://mailbox-87bdf.firebaseio.com",
      storageBucket: "mailbox-87bdf.appspot.com",
      messagingSenderId: "765645523270"
    };  
    
    firebase.initializeApp(config); 

    const fbEmail = document.getElementById('fbEmail');
    const fbPassword = document.getElementById('fbPassword');
    const btSignin = document.getElementById('btSignin');
    const btSignup = document.getElementById('btSignup');
    const btSignout = document.getElementById('btSignout');

    btSignin.addEventListener('click', e => {
        const email = fbEmail.value;
        const pass = fbPassword.value;
        const auth = firebase.auth();
        // Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    btSignup.addEventListener('click', e => {
        // TODO: CHECK 4 REAL EMAILS
        const email = fbEmail.value;
        const pass = fbPassword.value;
        const auth = firebase.auth();
        // Sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise
            // .then(user => console.log(user))
            .catch(e => console.log(e.message));
    });

    btSignout.addEventListener('click', e => {
        fbEmail.value = '';
        fbPassword.value = '';
        firebase.auth().signOut();

    });

    // Add a realtime listener

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log('logged in');
            // console.log(firebaseUser);
            btSignout.classList.remove('hide');            
        } else {
            console.log('logged out');
            btSignout.classList.add('hide');
        }
    });

}());
    
   
    
