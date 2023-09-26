import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

/*
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') //  API Endpoint
    .setProject('[PROJECT_ID]');               //  project ID

const account = new Account(client);

const user = await account.create(
    ID.unique(),
    'email@example.com',
    'password'
);*/

export class AuthService {
    // now make property of AuthService class

    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);

        this.account = new Account(this.client);
    }
    async createAccount({ email, password, name }) {
        try {
             const userAccount = await this.account.create(ID.unique(), email, name);
             if(userAccount){
                // call another method

             }
             else{
                return userAccount;
             }
        }
        catch (error) {
            throw error;
        }
    }
    async login({email, password}){
      try {
        return await this.account.createEmailSession(email, password);
      } catch (error) {
        throw error
      }
    }

    async getCurrentUser(){
        try {
             return await this.account.get();
        } catch (error) {
            console.log("appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }

     async logout(){
        try {
            
        } catch (error) {
            console.log("appwrite service :: Logout :: error", error);
        }
     }
}

const authService = new AuthService();  // here authService is a onjet of AuthService class

export default AuthService;


