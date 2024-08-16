import React from 'react'
import NavbarWebsite from '../Components/NavbarWebsite'
import FooterComponentWebsite from '../Components/FooterComponentWebsite'
import step1 from '../assets/images/step1.jpg';
import step2 from '../assets/images/step2.jpg';
import step3 from '../assets/images/step3.jpg';
import step4 from '../assets/images/step4.jpg';
import step5 from '../assets/images/step5.jpg';
import step6 from '../assets/images/step6.jpg';
import step7 from '../assets/images/step7.jpg';
import step8 from '../assets/images/step8.jpg';

function HowItWorksWebsite() {

    const steps = [
        {
          stepNumber: "Step 1",
          description: "First login into our account with your right credentials.",
          imgSrc: step1, 
          altText: "Step 1"
        },
        {
          stepNumber: "Step 2",
          description: "Add your video in your storage.",
          imgSrc: step2, // Replace with actual image path
          altText: "Step 2"
        },
        {
          stepNumber: "Step 3",
          description: "From here Upload video.",
          imgSrc: step3, // Replace with actual image path
          altText: "Step 3"
        },
        {
          stepNumber: "Step 4",
          description: "Choose the video you want to play in your stream, give title, and save. Then your uploaded video will be added in the below list.",
          imgSrc: step4, // Replace with actual image path
          altText: "Step 4"
        },
        {
          stepNumber: "Step 5",
          description: "As you can see your video is uploaded. Now go to Live stream page from the sidebar.",
          imgSrc: step5, // Replace with actual image path
          altText: "Step 5"
        },
        {
          stepNumber: "Step 6",
          description: "Now that we are on the live stream page, click on the add stream button and you will be followed to a form on the same page.",
          imgSrc: step6, // Replace with actual image path
          altText: "Step 6"
        },
        {
          stepNumber: "Step 7",
          description: "Then Add Title and Add Group and from your youtube studio put stream key and Stream URL here to link it with your youtube channel for streaming.",
          imgSrc: step7, // Replace with actual image path
          altText: "Step 7"
        },
        {
          stepNumber: "Step 8",
          description: "Then select the video you uploaded in your storage and save, it will redirect you to your respective Facebook or Youtube profile, which you integrated.",
          imgSrc: step8, // Replace with actual image path
          altText: "Step 8"
        }
      ];

      

  return (
    <>
    <NavbarWebsite />

    <div style={{ paddingTop: '10px', paddingBottom:'40px', background: 
        `linear-gradient(217deg, #B30064, #1E024E 70.71%),
        linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
        linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%)`,
      backgroundSize: 'cover', 
      color: '#333',
      margin: '0',
      padding: '0' }}>
    <div className="container" >
      <div className="row d-flex justify-content-center">
        {steps.map((step, index) => (
          <div className="col-lg-10 m-lg-4 mb-3" style={{ 
            borderRadius: '10px',
            padding: '25px',
            transition: 'transform 0.3s ease'}} key={index}>
            <h1 style={{fontWeight: 'bold',
  color: 'white',
  marginBottom: '15px',
  paddingBottom: '5px'}}>{step.stepNumber}</h1>
            <p style={{fontSize: '16px',
  color: '#ffffff',
  lineHeight: '1.8',
  marginBottom: '20px'}}>{step.description}</p>
            {step.imgSrc && <img style={{width: '100%',
  height: 'auto',
  borderRadius: '5px',
  marginBottom: '15px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}} src={step.imgSrc} alt={step.altText} />}
          </div>
        ))}

        <div className="row">
            <div className="col-lg-10">
            <h1 style={{fontWeight: 'bold',
  color: 'white',
  marginBottom: '15px',
  paddingBottom: '5px'}}>Step 9</h1>
            <p style={{fontSize: '16px',
  color: '#ffffff',
  lineHeight: '1.8',
  marginBottom: '20px'}}>Your video will start streaming after you will pass keys for Facebook and Youtube. Your video will start playing on the respective platform. Contact the support team if you have any issues. Thank you.</p>
            </div>
        </div>
      </div>
    </div>
    </div>

    <FooterComponentWebsite />
    </>
  )
}

export default HowItWorksWebsite