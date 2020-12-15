import React from 'react';
import './Restaurents.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
function Restaurents() {
    return (
        <div className="restaurents">
            <div className="restaurent__suggestion">
                <div className="restaurent__suggestionTitle">
                    <h1>Your Favorites</h1>
                </div>
                <div className="restaurent__suggestionArrows">
                    <ArrowBackIcon className="arrow_back" />
                    <ArrowForwardIcon className="arrow_front" />
                </div>
            </div>
            <div className="restaurent__options">
                <div className="restaurents__option">
                    <img
                        src="https://waitr-website-wordpress.s3-us-west-2.amazonaws.com/2019/11/SubwayPromo_WTR_Blog_Header.png"

                        alt=""
                    />
                    <div className="restaurent__title">
                        <h4>Subway (3477 S King Dr)</h4>
                        <h5>4.1</h5>
                    </div>
                    <p>$3.49 Delivery Fee • 30-40 Min • $</p>
                </div>
                <div className="restaurents__option">
                    <img
                        src="https://www.metro.us/wp-content/uploads/2020/02/ubereats.jpg"
                        alt=""
                    />
                    <div className="restaurent__title">
                        <h4>McDonald's® (Halsted & 31st St)</h4>
                        <h5>4.5</h5>
                    </div>
                    <p>$3.49 Delivery Fee • 20-30 Min • $</p>
                </div>
                <div className="restaurents__option">
                    <img
                        src="https://duyt4h9nfnj50.cloudfront.net/resized/1537905782554-w2880-0a.jpg"

                        alt=""
                    />
                    <div className="restaurent__title">
                        <h4>Kaybee's Indian Flavor</h4>
                        <h5>4.4</h5>
                    </div>
                    <p>$0.49 Delivery Fee • 40-50 Min • $</p>
                </div>
            </div>
        </div>
    )
}

export default Restaurents
