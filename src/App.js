
import React, { useState, useEffect } from 'react';
import Expierence from './components/expierience';
import Footer from './components/footer';
import NavBar from './components/navbar';
import Profile from './components/profile';
import Services from './components/services';

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const reponse = await fetch(url)
    const newJobs = await reponse.json()
    setJobs(newJobs)
    setLoading(false)
  }
  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    )
  }

  const { company, dates, duties, title } = jobs[value]
  return (
      <div>
      <NavBar/>
      <Profile/>
      <Services/>
      <Expierence jobs={jobs} value={value} company={company} dates={dates} duties={duties} title={title} setValue={setValue}/>
      <Footer/>
      </div>
  );
}

export default App;
