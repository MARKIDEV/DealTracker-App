import React from 'react';
import './description.css'

export default function Description() {
    return (
        
            <div className="description-header">
            <div className="description">
              <p>
                DealTracker is a simple & flexible online plateform having
                several key advantages. If you are a forwarder or a carrier
                (transporter). Manage your client portfolio, receive requests on
                realtime, process them, send and track invoice or quote 100%
                accurate.
              </p>
              <p>
                Save your new client exploration time with our realtime
                DealTracker Feed Request.
              </p>{" "}
              <p>
                And if you're company that need to import or export goods,
                create your account and be a Dealer to be able to share your
                quote or price request. Win time with few clics, create request,
                share it and receive quotes.
              </p>
              <p> You can even negociate with the transporter </p>
              <button className="btn-header">
                <a href="#tuto" className="link-header">
                  Discover DealTracker!
                </a>
              </button>
            </div>
        </div>
    )
}
