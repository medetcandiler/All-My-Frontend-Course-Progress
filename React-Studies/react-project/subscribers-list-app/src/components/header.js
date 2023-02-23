import { memo } from 'react'

function Header({ img }) {

    console.log('header component has been Re-rendered')
    return (
        <>
            <img style={{width:'100%', height:'10rem'}} src={img} alt="colorful-bg" />
        </>
    )
}

export default memo(Header);
