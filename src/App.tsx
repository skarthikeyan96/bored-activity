import React, { useState } from 'react';
import axios from 'axios';

import Navbar from './components/navbar'

const App = () => {


  const [activity, setActivity] = useState()

  const renderActivity = async () => {
    const response = await axios.get('https://www.boredapi.com/api/activity');

    setActivity(response.data)
  }


  return (
    <div>
      <Navbar/>
      <div className='container mx-auto p-5'>
      <h3> Are u bored ? Click the button to find out what you can do next </h3>

      <button onClick={renderActivity} className="mt-4 lg:mt-2 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"> Find out</button>
      <pre className='pt-4'>
        {JSON.stringify(activity)}
      </pre>
      </div>
   
    </div>
  );
}

export default App;
