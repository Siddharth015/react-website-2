// ProjectTitleBox.js

import React from 'react';

function ProjectTitleBox() {
  return (
    <div className="project-title-box">
      <img
    src="\image1.png"  
    alt=""
    style={{
      position: 'relative',
      top: -390,
      right: -950,
      width: '350px', // Set the width as needed
      height: '350px', // Set the height as needed
    }}
  />
      <h2  style={{
              height:'40px',
              width: '15%', // Adjust the width as needed
              padding: '10px',
              fontSize: '40px',
              borderRadius: '15px', // Set the border radius
             // Blue color border
              backgroundColor: '#2563EB', // Set text color
               color: 'white',  
               border: 'none', // Remove border        
              outline: 'none', // Remove outline
              position:'absolute',
                top:'25%',
                textAlign: 'center',
                paddingTop:'10px', 
                paddingBottom:'19px',
                marginTop:'40px'
              }}>Project Title</h2>
    </div>
  );
}

export default ProjectTitleBox;
