import React, { useEffect, useState } from 'react'

/* 
    <ResponsiveItem component={<HomePage />} mobileComponent={<HomePageMobile />} />
    props = {
        component:  <HomePage />
        mobileComponent: <HomePageMobile />
    }
*/

const ResponsiveItem = (props) => {
    const [component, setComponent] = useState(props.component);
    const [screen, setScreen] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const handleChangeComponent = () => {
        if (screen.width < 768 && props.mobileComponent) {
            setComponent(props.mobileComponent);
        } else {
            setComponent(props.component);
        }
    }
    const handleChangeWidth= () =>{
        setScreen({
            width:window.innerWidth
        });
    }
    useEffect(() => {
       handleChangeComponent();       
    }, [screen.width]);

    useEffect(()=>{
        window.addEventListener('resize', handleChangeWidth);
        return () => {
            //Clear các giá trị khi component này không còn xuất hiện trên giao diện
            window.removeEventListener('resize',handleChangeWidth);
        }
    },[])


    return (
        <>
            {component}
        </>
    )
}

export default ResponsiveItem