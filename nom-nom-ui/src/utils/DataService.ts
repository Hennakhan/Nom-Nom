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

async function getFoodById(id: string) {}
async function getUserById(id: string) {}
async function getAllFood() {}
async function getAllUsers() {}

async function getHostById(id: string): Promise<Host>{
    const hostSnapshot = await db.doc(`/host/${id}`).get();
    const hostData = hostSnapshot.data();
    return hostData as Host;
}

export {
    getHostById
}