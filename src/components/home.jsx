import React, { useState, useEffect } from 'react';
import Services from './services';
import Expierence from './expierience';
import Footer from './footer';
import NavBar from './navbar';
import Profile from './profile';
import Projects from './projects';
import data from "./data";


const Home = () => {
const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState(data)
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    setJobs(jobs)
    setLoading(false);
  }
  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Projects/>
        <Footer/>
    </div>
     );
}
 
export default Home;