
//ar ui = new firebaseui.auth.AuthUI(firebase.auth());
var firebaseConfig = {
          apiKey: "AIzaSyDNsy8wR_DNzxt7J5fPS-AW_6XDReeq4jU",
          authDomain: "finalproject-51616.firebaseapp.com",
          databaseURL: "https://finalproject-51616.firebaseio.com",
          projectId: "finalproject-51616",
          storageBucket: "finalproject-51616.appspot.com",
          messagingSenderId: "645157881498",
          appId: "1:645157881498:web:382215ab2d8e03c3428123"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();




var actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be whitelisted in the Firebase Console.
  url: 'https://www.example.com/finishSignUp?cartId=1234',
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '6'
  },
  dynamicLinkDomain: 'example.page.link'
};

function signUp()
{
        //alert();

        var email = document.getElementById("email").value;
        var password = document.getElementById('password').value;
        var cpass = document.getElementById('cpass').value;

        if(cpass == password)
        {


          firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                alert("Creation of user failed...");
            });


          firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
            .then(function() {
              // The link was successfully sent. Inform the user.
              // Save the email locally so you don't need to ask the user for it again
              // if they open the link on the same device.
              window.localStorage.setItem('emailForSignIn', email);
            })
            .catch(function(error) {
              // Some error occurred, you can inspect the code: error.code
            });
        }
        else
        {
          alert('Check both the passwords');
          //window.reload();
        }
        
}

function signIn()
{
        var email = document.getElementById("emailL").value;
        var password = document.getElementById('passwordL').value;


      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          alert('Noo')
        });
        
}