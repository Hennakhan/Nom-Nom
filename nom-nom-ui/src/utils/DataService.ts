import { db } from './firebase';

interface Host {
    name: string;
    number: string
    location: string
}

async function getHostById(id: string): Promise<Host>{
    const hostSnapshot = await db.doc(`/host/${id}`).get();
    const hostData = hostSnapshot.data();
    return hostData as Host;
}

export {
    getHostById
}