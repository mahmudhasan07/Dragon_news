import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import RightSide from './Layout/RightSide';
import Middle from './Layout/Middle';
import LeftSide from './Layout/LeftSide';
import BreakingNew from '../BreakingNew/BreakingNew';
import NavBar from '../Navbar/NavBar';

const Home = () => {
    const user = useLoaderData()
    // console.log(user);
    return (
        <div>
            <BreakingNew></BreakingNew>
            <NavBar></NavBar>
            <div className='flex justify-between lg:px-10 px-3 lg:my-8 my-4'>
            <LeftSide card= {user}></LeftSide>
            <Outlet></Outlet>
            <RightSide></RightSide>

            </div>
        </div>
    );
};

export default Home;