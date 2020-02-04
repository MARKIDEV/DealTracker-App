import React from "react";
import "./tuto.css";

export default function Tuto() {
  return (
    <div className="tuto" id="tuto">
      <p className="title-tuto">~How you can be a Dealer with few clics!~</p>
      <div className="content-tuto">
        <div className="card-tuto">
          <div className="card-tuto-content">
            <img
              className="img-tuto"
              src="https://as1.ftcdn.net/jpg/02/75/28/72/500_F_275287261_P3vlAY4b8c9KPLd4Fglh32J4rqHuITrX.jpg"
            />
            <p className="p-tuto">
              To be a TransDealer, Sign up to have a private account as a client
              or a transporter (forwarder or carrier)
            </p>
          </div>
        </div>
        <div className="card-tuto">
          <div className="card-tuto-content">
            <img
              className="img-tuto"
              src="https://t3.ftcdn.net/jpg/02/45/24/20/240_F_245242050_YeKpxzzutMROyfD1UD6BQLUULLEhQOXo.jpg"
            />
            <p className="p-tuto">
              As a client TransDealer you can creat e and personnalize your
              price request easily with few clics.
              <br /> As a transporter TransDealer you save requests, upload your
              quote response and send it to client, also you can even negociate!
            </p>
          </div>
        </div>
        <div className="card-tuto">
          <div className="card-tuto-content">
            <img
              className="img-tuto"
              src="https://as2.ftcdn.net/jpg/02/74/43/33/500_F_274433341_KMKjTVnuDjFyyClJ9SSgp6V3h15eFbnQ.jpg"
            />
            <p className="p-tuto">
              {" "}
              As a client TransDealer you share in the realtime request feed,
              you can choose your privacy public or only seen by our
              TransDealers.
              <br />
              As a transporter TransDealer you can view the request feed on
              realtime, explore and make your client portfolio more and more
              rich
            </p>
          </div>
        </div>
        <div className="card-tuto">
          <div className="card-tuto-content">
            <img
              className="img-tuto"
              src="https://as1.ftcdn.net/jpg/02/69/38/52/500_F_269385234_XG2w3Nnp8Riqr0Mu8JNKPQbWpDPqzqWN.jpg"
            />
            <p className="p-tuto">
              {" "}
              As a client TransDealer you share in the realtime request feed,
              you can choose your privacy public or only seen by our
              TransDealers.
              <br />
              As a transporter TransDealer you can view the request feed on
              realtime, explore and make your client portfolio more and more
              rich
            </p>
          </div>
        </div>
        <div className="card-tuto">
          <div className="card-tuto-content">
            <img
              className="img-tuto"
              src="https://as1.ftcdn.net/jpg/02/19/94/34/500_F_219943430_hm7GppSzTqiHlOxGLxoYuQgN9G6dlQ2I.jpg"
            />
            <p className="p-tuto">
              {" "}
              As a client TransDealer you confirm the deal, it will be archived
              in your page as well as
              <br />
              As a transporter TransDealer you can view the request feed on
              realtime, explore and make your client portfolio more and more
              rich
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
