import React from 'react';
import './Blog.css';
const Blogs = () => {
    return (
        <div>
            <h1 className='text-center border-top p-3 mt-5 rounded d-inline-block bg-light shadow border-danger border-4'>Some interesting blogs</h1>
        <div className='blog-container'>
            
            
            <div className='blog-question-container'>
                <div className="blog-question">
                    <h4 className='text-success'>Difference between authorization and authentication?</h4>
                    <hr />
                    <p>Authentication verifies who the user is and authorization determines what resources a user can access. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user. Other Hand, Authorization works through settings that are implemented and maintained by the organization.</p>
                </div>
                <div className="blog-question">
                    <h4 className='text-success'>Why are you using firebase? <br /> What other options do you have to implement authentication?</h4>
                    <hr />
                    <p>Firebase is a good choice if we want to deploy a working product on the cloud rapidly. Plus, as mentioned, we might want to try it out if we need a backend but don't have a backend development background. <br /> For authentication there are many others options here are some example: <span className='fw-bold'>Parse, </span>
                        <span className='fw-bold'>Back4app,  </span>
                        <span className='fw-bold'>Kinvey,   </span>
                        <span className='fw-bold'>Backendless,   </span>
                        <span className='fw-bold'>Kuzzle,     </span><span className='fw-bold'>Pubnub,     </span><span className='fw-bold'>Heroku.     </span>
                    </p>
                </div>
                <div className="blog-question">
                    <h4 className='text-success'>What other services does firebase provide other than authentication?</h4>
                    <hr />
                    <p>Firebase is not only for authentication services. Its provide us so many services like , Cloud Firestore, Cloud Functions, Authentication, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging. </p>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Blogs;