import {UserModel} from './UserModel';

export class AppModel {
   constructor(
     public user: UserModel = new UserModel()
   ) {
   }
}
