import React from 'react'
import { Routes, Route } from 'react-router-dom';
import UserLayout from '../userLayout';
import User from '../user';
import Users from '../users'

function UserRoutes() {
    return (
        <>
            <Routes>
                <Route element={<UserLayout />}>
                    <Route index element={<Users />}/>
                    <Route path=':id' element={<User />} />
                </Route>
            </Routes>
        </>
    )
}

export default UserRoutes;

