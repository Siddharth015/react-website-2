import React from 'react';

function ProjectQuestions() {
  return (
    
    <><div className="question-box"
      style={{paddingLeft:'25px'}}>
        
      <form>
        <label style={{paddingTop:'20px',fontSize:'20px'}}>What skills does your project demand?</label>
        <select style={{width:'150px', height:'30px', borderRadius:'4px'}}>
          <option value="skill1">Select Option</option>
          <option value="skill2">Blockchain</option>
          <option value="skill3">Content Writing</option>
          {/* Add more skills as needed */}
        </select>
        <label style={{paddingTop:'10px', fontSize:'20px'}}>Select project category</label>
        <select style={{marginBottom:'10px',width:'150px', height:'30px', borderRadius:'4px'}}>
          <option value="skill1">Select Option</option>
          <option value="skill2">Blockchain</option>
          <option value="skill3">Content Writing</option>
          {/* Add more skills as needed */}
        </select>
        
       <div className="form-group"><label style={{ fontSize:'20px'}}>What is the expected time for the completion of the project:</label>
        <input style={{display:'block', marginTop:'5px'}} type="text" placeholder="Your answer" />
        </div>
        <label style={{marginTop:'-8px', fontSize:'20px'}}>What is your expected compensation range?</label>
       
        <select style={{marginBottom:'10px',width:'150px', height:'30px', borderRadius:'4px'}}>
          <option value="skill1">Select Option</option>
          <option value="skill2">Blockchain</option>
          <option value="skill3">Content Writing</option>
          {/* Add more skills as needed */}
        </select>
      </form>
    </div><button type="submit" style={{ padding: '9px',
            paddingLeft: '5px',
            backgroundColor: '#2563EB',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '160px', // Set the width as needed
            marginLeft:10,
            marginRight: '10px', // Add margin to separate from text inputs
           marginTop: '40px',
            fontSize: '18px', 
            font:'Poppins'}}>Submit Project</button></>
   
    
  );
}
export default ProjectQuestions;