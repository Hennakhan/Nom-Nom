import { db } from './firebase';

export interface Food {
    id: string | undefined;
    type: string;
    servings: string;
    location: {
        Latitude: number,
        Longitude: number
    };
    address: string;
    prepDate: Date;
    allergens: string[];
    name: string;
    number: string;
    email: string;
}


export interface User {
    name: string;
    number: string;
    email: string;
}

async function getFoodById(id: string) {
  const foodSnap = await db.doc(`/food/${id}`).get();
  const foodData = {...foodSnap.data(),
                    id: foodSnap.id};
  
  return foodData as Food; 

}

//async function getUserById(id: string) {}
async function getAllFood(): Promise<Array<Food>> {
    var allFoodColl = db.collection('food');
    var foodList = Array<Food>();
    await allFoodColl.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {   
            foodList.push({
              ...doc.data(),
              id: doc.id
            } as Food);
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

async function postUser(userObj: User) {
    
    db.collection("user").doc().set(userObj).then(function() {
        console.log("Document successfully written!");});
}

async function postFood(foodObj: Food) {
    db.collection("food").doc().set(foodObj).then(function() {
        console.log("Document successfully written!");});
}

async function deleteFoodById(id: string) {
    
    db.collection("food").doc(`${id}`).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}




export {
    getUserById,
    getAllFood,
    getAllUsers,
    getFoodById,
    postUser,
    postFood,
    deleteFoodById
}
