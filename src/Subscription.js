import { Subscriptions } from '@material-ui/icons'
import React from 'react';
import './Subscriptions.css';
import GoogleLogin from 'react-google-login'
import { getSubscribers } from './api/youtubeAPI';


const client_id = "91645925090-tovf00ce60f85f9t3u39maruffk2ckst.apps.googleusercontent.com"

function Subscription() {

    const responseGoogle = (response) => {
        getSubscribers(response.accessToken);
      }
       
    return (
        <div className="subscriptions">
            <div className="subscriptions__container">
                <Subscriptions fontSize="large" className="subscriptions__icon" />
                <h2>Don’t miss new videos</h2>
                <h4>Sign in to see updates from your favorite YouTube channels</h4>
                <div className="subsriptions__GoogleLogin">
                    <GoogleLogin clientId={client_id}
                        buttonText="SIGN IN"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}>
                        SIGN IN
                    </GoogleLogin>
                </div>
            </div>
        </div>
    )
}

export default Subscription
