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
import useAxiosPublic from "../../Page/Login/UseAxios/UseAxiosPublic";

// import axios from "axios";
const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

  const axiosPublic = useAxiosPublic();

  // token 




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
      setLoding(false);

      if (currentUser) {
        const AuthInfo = currentUser.email;
        axiosPublic.post("/jwt", AuthInfo).then((res) => {
          localStorage.setItem("access-token", res.data);
          setLoding(false);
        });
      } else {
        localStorage.removeItem("access-token");
        setLoding(false);
      }
    });
    return () => unSubscribe();
  }, [axiosPublic]);
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
