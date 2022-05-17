import React from "react";
import "../Componants/Css/SendContract.css";
import msg from "../Assets/msg.png";
import account from "../Assets/account.png";

export default function ContractAccpeted() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="col-2 card card1">
              <p className="text1">Offer Details</p>
            </div>
            <div className="col-8 card card2 p-4">
              <div className="card">
                <div className="text2">
                  <h3>Painter required</h3>
                  <h4>By: Aaron John</h4>
                  <h4>Jan 21, 2022</h4>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-3">
                  <div className="row">
                    <div className="col-lg-2">
                      <img
                        
                        src={account}
                        alt=""
                        width="60"
                        height="60"
                      />
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                      <p className="mt-2 text3">Jon Snow</p>
                    </div>
                    
                  </div>
                </div>
                <div className="col-lg-7"> </div>

                <div className="col-lg-2">
                  <div className="row">
                      <div className="col-lg-2 msg">
                        <img src={msg} width="30" height="30" />
                      </div>
                      <div className="col-lg-8">
                        <p className="mt-2 ">Message</p>
                      </div>
                      
                  </div>
                  
                  
                </div>
              </div>
              <div className="card card2_1 text-center p-4 text4">
                <p>$ 800</p>
                <p>Total Contract Amount</p>
                <p>Enjoy your 0% transaction fees during trail period</p>
              </div>
              <br />
              <div className="card card2_2 p-4">
                <b>1st proposed payment milestone</b>
                <p>Bidding for whole project</p>
                <div className="text4">
                  <br />
                  <p>Due Date</p>
                  <p>Jan 21, 2022</p>
                  <br />
                  <p>Amount</p>
                  <p>$6766</p>
                </div>
                <b>Poster comment</b>
                <p>Lorem ipsum</p>
                <br />
                <button
                  type="button"
                  className=" align-self-end btn btn-danger col-lg-5"
                >
                  Mark As Completed And Paid
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
