import Main from '@/components/my-ai/main/Main';
import Sidebar from '@/components/my-ai/sidebar/Sidebar';

import React from 'react'

const page = () => {
    return (<div className='flex'>
        <Sidebar />
        <Main/>
    </div>)
}

export default page;

export const metadata = {
    title: "Get Me A Chai - MY-ai"
}
