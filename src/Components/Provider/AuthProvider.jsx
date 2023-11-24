import {
  // hello
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase.config";

// import axios from "axios";
const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setLoding(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("use in the auth state  change", currentUser);
      setLoding(false);
      // const userEmail = currentUser?.email || user?.email;
      // const logInUser = { email: userEmail };

      // if (currentUser) {
      //   axios
      //     .post("https://hotel-server-theta.vercel.app/jwt", logInUser, {
      //       withCredentials: true,
      //     })
      //     .then((res) => console.log(res.data))
      //     .catch((error) => {
      //       console.log(error);
      //     });
      // // } else {
      //   axios
      //     .post("https://hotel-server-theta.vercel.app/logout", logInUser, {
      //       withCredentials: true,
      //     })
      //     .then((res) => {
      //       console.log(res);
      //     })
      //     .catch((error) => {
      //       console.error(error);
      //     });
      // }
    });
    return () => unSubscribe();
  }, []);
  const AuthInfo = {
    user,
    loding,
    createUser,
    logOut,
    signIn,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
