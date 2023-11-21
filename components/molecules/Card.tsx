import React from 'react';
import styled from 'styled-components';
import Image from "next/image";
import firstimg from "../../public/black.png";
import secondimg from "../../public/truck.png";
import thirdimg from "../../public/more.png";

 const CardContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 2rem;
 `;

 const CardOne = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   height: 70vh;
   width: 25vw;
 `;
  
 const CardInfo = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 1rem;
   height: 40vh;
   box-shadow: 0 0 5px rgba(128, 128, 128, 0.5);
`;

function Card() {
  return (
    <CardContainer>
       <CardOne>
       <Image
          src={firstimg}
          alt="Slider Image"
          objectFit="cover"
          style={{ height: "100%", width: "100%", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}
        />
        <CardInfo>
            <h1 style={{fontWeight: "700", fontSize: "15px", padding: "15px", borderBottom: "1px solid #87C656"}}>Ship Like a Pro</h1>
            <p style={{padding: "15px"}}>Get access to powerful and time-saving customizable features found only in MyDHL+</p>
        </CardInfo>
       </CardOne>
       <CardOne>
       <Image
          src={secondimg}
          alt="Slider Image"
          objectFit="cover"
          style={{ height: "100%", width: "100%", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}
        />
        <CardInfo>
            <h1 style={{fontWeight: "700", fontSize: "15px", padding: "15px", borderBottom: "1px solid #87C656"}}>Save on Frequent Shipping</h1>
            <p style={{padding: "15px"}}>Get preferred rates, billing options and other great benefits of having a DHL Express account!</p>
        </CardInfo>
       </CardOne>
       <CardOne>
       <Image
          src={thirdimg}
          alt="Slider Image"
          objectFit="cover"
          style={{ height: "100%", width: "100%", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}
        />
        <CardInfo>
            <h1 style={{fontWeight: "700", fontSize: "15px", padding: "15px", borderBottom: "1px solid #87C656"}}>Not Home? Change of Plans?</h1>
            <p style={{padding: "15px"}}>Take control of your shipment delivery!  Decide when and where you want us to deliver.</p>
        </CardInfo>
       </CardOne>
    </CardContainer>
  )
}

export default Card