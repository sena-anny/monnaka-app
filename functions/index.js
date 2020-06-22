const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://monnaka-app.firebaseio.com"
});

exports.registerUsers = functions.auth.user().onCreate(user => {
  const { uid } = user;
  const db = admin.firestore();
  const displayName = user.displayName || "Anonymous";
  const photoURL = user.photoURL || "/assets/img/default_profile.svg";

  return db
    .collection("users")
    .doc(uid)
    .set({
      displayName: displayName,
      photoURL: photoURL
    });
  //   .then(function() {
  //   console.log("Document successfully written!");
  // })
  //   .catch((err) => {
  //     console.log(err); // eslint-disable-line no-console
  //   });
});
