import React from 'react'
import '../Componants/Css/SendContract.css'
import account from '../Assets/account.png'
import {useNavigate} from "react-router-dom"

export default function SendContract () {
  
  const navigate = useNavigate();
  
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="col-lg-2">

          </div>
          <div className="col-lg-8">
            <div className="col-2 card card1">
              <p className="text1">Offer Details</p>
            </div>
            <div className='col-8 card card2 p-4'>  
              <div className='card'>
                <div className='text2'>
                  <h3 >Painter required</h3>
                  <h4 >By: Aaron John</h4>
                  <h4 >Jan 21, 2022</h4>
                </div>
              </div>
              <br/>
              <div className='row'>
                <img className="col-1" src={account} alt="" width="60" height="60"/>
                <p className='col-2 mt-2 text3'>Jon Snow</p>
              </div>
              <div className='row'>
                <p>Bid Date: <b>Jan 18, 2022</b></p>
                
              </div>
              <div className='row'>
                <p>Projected Date: <b>Jan 18, 2022 - Jan 22, 2022</b></p>
                
              </div>
              <div className='card card2_1 text-center p-4 text4'>
                <p>$ 800</p>
                <p>Total Contract Amount</p>
                <p>Enjoy your 0% transaction fees during trail period</p>
              </div>
              <br/>
              <div className='card card2_2 p-4'>
                <b>1st proposed payment milestone</b>
                <p>Bidding for whole project</p>
                <div className='text4'>
                <br/>
                <p>Due Date</p>
                <p>Jan 21, 2022</p>
                <br/> 
                <p>Amount</p>
                <p>$6766</p>
                </div>
                <b>Poster comment</b>
                <p>Lorem ipsum</p>
                <br/>
              </div>
            </div>

            <div className='col-2 card card3 p-4'>
              <div className="row">
                <div className="col-lg-7">

                </div>
                <div className="col-lg-5 align-items-center">
                  <div className="row">
                    <button type="button" className="btn btn-danger col-lg-5" data-bs-toggle="modal" data-bs-target="#myModal">Send Contracts</button>
                    <div className="col-lg-1"></div>
                    <button type="button" className="btn btn-outline-danger col-lg-5">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="modal" id="myModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content modal-lg">

            
            <div className="modal-body col-12col-md-4 text-center">
            Contract will be sent to the bidder
            </div>

            
            <div className="modal-footer col-7 ">
              <button type="button" className="btn btn-dark" onClick={()=>{navigate("/contractaccpeted"); window.location.reload(false)}}>Ok</button>
            </div>

          </div>
        </div>
      </div>
      </>
  )
}
