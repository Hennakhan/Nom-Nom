import React from 'react'; // we need this to make JSX compile
import { User } from '../utils/DataService';

type UserProps = {
    user: User
}


export const UserComponent = ({ user }: UserProps) => <div>
    <ul>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Number: {user.number}</li>
    </ul>
</div>