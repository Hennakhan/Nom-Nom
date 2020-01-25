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
  const foodSnap = db.doc(`/food/${id}`).get();
  const foodData = foodSnap.data();
  return foodData as Food; 

}
async function getUserById(id: string) {}
async function getAllFood() {}
async function getAllUsers() {}

async function getUserById(id: string): Promise<User>{
    const userSnapshot = await db.doc(`/user/${id}`).get();
    const userData = userSnapshot.data();
    return userData as User;
}

export {
    getHostById
}
