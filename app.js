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

}());
    
   
    
