import { db } from './firebase';

interface Food {
    type: string;
    servings: string;
    location: {
        Latitude: number,
        Longitude: number
    };
    prepDate: Date;
    allergens: string[];
}

interface User {
    name: string;
    number: string;
    email: string;
}

async function getFoodById(id: string) {
  const foodSnap = await db.doc(`/food/${id}`).get();
  const foodData = foodSnap.data();
  return foodData as Food; 

}
//async function getUserById(id: string) {}
async function getAllFood(): Promise<Array<Food>> {
    var allFoodColl = db.collection('food');
    var foodList = Array<Food>();
    await allFoodColl.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
           // console.log(doc.id, ' => ', doc.data());
            
            foodList.push(doc.data() as Food);
        });
    });

    return foodList;
}
async function getAllUsers(): Promise<Array<User>> {

    var allUsersColl = db.collection('user');
    var usersList = Array<User>();
    await allUsersColl.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
           // console.log(doc.id, ' => ', doc.data());
            
           usersList.push(doc.data() as User);
        });
    });

    return usersList;
}

async function getUserById(id: string): Promise<User>{
    const userSnapshot = await db.doc(`/user/${id}`).get();
    const userData = userSnapshot.data();
    return userData as User;
}

export {
    getUserById,
    getAllFood,
    getAllUsers,
    getFoodById
}
