import React, { createContext, useState } from 'react';
import { UserInterface } from "../interface/interface";
import { db } from '../config/Firebase';
import firebase from "firebase";

interface AuthContextData {
    signed: boolean;
    user: UserInterface;
    signIn(user: string, password: string): Promise<void>;
    signOut(): void;    
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState<UserInterface | null>(null);    

    async function signIn(user, password) {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(user,password)
            if (response.user.uid && response.user.emailVerified) {
                const data = await db
                    .collection('users')
                    .doc(response.user.uid)
                    .get()
                
                // navigateToMenu(data.data())
                console.log(data.data());
                setUser(data.data())
            } else {
                // setMessageAlert('Seu email ainda nao foi verificado')
                // setModalAlertVisible(true)
                console.log('Seu email ainda nao foi verificado');
            }
        }
        catch (error) {
            alert(error)
        }
    }

    async function signOut() {

    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user: {}, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;