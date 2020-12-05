import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Subscriptions } from '@material-ui/icons'
import React from 'react';
import './Subscriptions.css';
function Subscription() {
    return (
        <div className="subscriptions">
            <div className="subscriptions__container">
                <Subscriptions fontSize="large" className="subscriptions__icon" />
                <h2>Don’t miss new videos</h2>
                <h4>Sign in to see updates from your favorite YouTube channels</h4>
                <div className="subsriptions__button">
                    <AccountCircleIcon src= "" alt="" />
                    <button>
                        SIGN IN
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Subscription
