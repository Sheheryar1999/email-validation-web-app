import React from 'react';
import './Content.css';

const steps = [
  {
    number: 1,
    title: "Sign Up or Log In",
    description: "Create an account or log in to Leads Verify. After signing in, you’ll be directed to your dashboard where you can manage your email validation tasks.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="icon">
        <path d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"></path>
        <path d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"></path>
        <path d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"></path>
      </svg>
    ),
    image: "32.jpg",
  },
  {
    number: 2,
    title: "Upload Your File",
    description: "Upload a CSV file or other types of files containing the email addresses you want to validate. The platform supports various file formats for your convenience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="icon">
        <path d="M285.177,179l15.513-3.914-7.827-31.028-15.514,3.913a176.937,176.937,0,0,0-129.3,133.557l-3.407,15.633,31.266,6.814,3.406-15.634A145.559,145.559,0,0,1,285.177,179Z"></path>
        <path d="M363.624,147.871C343.733,72.077,274.643,16,192.7,16,95.266,16,16,95.266,16,192.7c0,82.617,57,152.163,133.735,171.4A176.769,176.769,0,0,0,320.7,496c97.431,0,176.7-79.266,176.7-176.695C497.392,238.071,441.64,167.336,363.624,147.871ZM48,192.7C48,112.91,112.91,48,192.7,48s144.7,64.91,144.7,144.7-64.911,144.7-144.7,144.7S48,272.481,48,192.7ZM320.7,464c-60.931,0-115.21-38.854-135.843-94.792,2.6.115,5.214.184,7.843.184a176.862,176.862,0,0,0,32.7-3.047l97.625,97.625C322.247,463.983,321.473,464,320.7,464Zm41.528-6.083L260.26,355.954a176.9,176.9,0,0,0,43.662-26.072L408.37,434.33A144.385,144.385,0,0,1,362.223,457.917Zm69.3-45.692L326.851,307.557a177.082,177.082,0,0,0,27.911-44.5L457.67,365.964A144.661,144.661,0,0,1,431.519,412.225Zm33.594-84.073-99.42-99.42a176.785,176.785,0,0,0,3.7-36.036c0-3.285-.1-6.547-.276-9.787a145.054,145.054,0,0,1,96.276,136.4C465.392,322.276,465.291,325.224,465.113,328.152Z"></path>
      </svg>
    ),
    image: "29.jpg",
  },
  {
    number: 3,
    title: "Validate Emails",
    description: "Our system will process the file and validate the email addresses. We use advanced algorithms to ensure accuracy and deliver reliable results.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="icon">
        <path d="M412.284,294.37l-12.5,15.642c-8.354,10.454-50.027,64.208-50.027,95.883,0,36.451,28.049,66.105,62.526,66.105s62.527-29.654,62.527-66.105c0-31.675-41.673-85.429-50.028-95.883Zm0,145.63c-16.832,0-30.526-15.3-30.526-34.105,0-11.662,15.485-37.883,30.531-59.2,15.043,21.3,30.522,47.509,30.522,59.2C442.811,424.7,429.116,440,412.284,440Z"></path>
        <path d="M122.669,51.492,96.133,124.4,30.092,97.205,17.908,126.8l67.271,27.7L26.9,314.606a48.056,48.056,0,0,0,28.689,61.523l184.719,67.232a48,48,0,0,0,61.523-28.688L397.6,151.56Zm149.1,352.236a16,16,0,0,1-20.508,9.563L66.537,346.059a16,16,0,0,1-9.563-20.507L73.553,280H316.8ZM85.2,248l29.594-81.311,36.333,14.961a32.644,32.644,0,1,0,11.236-29.98l-36.615-15.077,16.046-44.085,214.79,78.177L328,249.219V248Z"></path>
      </svg>
    ),
    image: "2.avif",
  },
  {
    number: 4,
    title: "Review Results",
    description: "Check the results of the validation process. You’ll receive a detailed report or file with insights on the validity of your email addresses.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="icon">
        <path d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"></path>
        <path d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"></path>
        <path d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"></path>
      </svg>
    ),
    image: "30.jpg",
  },
  {
    number: 5,
    title: "Export Results",
    description: "Export the validated results into various formats. Choose the format that best suits your needs for further processing or integration.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="icon">
        <path d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"></path>
        <path d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"></path>
        <path d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"></path>
      </svg>
    ),
    image: "33.jpg",
  },
];

const Content = () => {
  return (
    <div className="content">
      <h1>How to use Leads Verify</h1>
      <div className="steps">
        {steps.map((step) => (
          <div key={step.number} className="step-container">
            <div className="step">
              <div className="step-icon">{step.icon}</div>
              <div className="step-details">
                <h2>Step {step.number}: {step.title}</h2>
                <p>{step.description}</p>
              </div>
            </div>
            <img src={`/image/${step.image}`} alt={`Step ${step.number} illustration`} className="step-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
