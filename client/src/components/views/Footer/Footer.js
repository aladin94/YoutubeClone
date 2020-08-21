import React from 'react'
import { Icon, Button } from 'antd';
import { useSelector } from "react-redux";

function Footer(props) {

    const user = useSelector(state => state.user);
    // const ShowButton = (props) => {
    //     if (user.userData && !user.userData.isAuth) {
    //         return (
    //             <Button href="/register" type="primary" size="large" style={{ backgroundColor: 'black', border: '1px solid red', borderRadius: '10px' }} >Sign Up &amp; Upload<span style={{ color: 'red' }}>&nbsp; Videos</span>
    //             </Button>)

    //     }
    // }
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize: '1rem'
        }}>
            <div>
                {user.userData && !user.userData.isAuth ? (

                    <Button href="/register" type="primary" size="large" style={{ backgroundColor: 'black', border: '1px solid red', borderRadius: '10px' }} >Sign Up &amp; Upload<span style={{ color: 'red' }}>&nbsp; Videos</span>
                    </Button>)
                    : ""}
            </div>
        </div>
    )
}

export default Footer
