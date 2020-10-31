import React, { useState, useEffect } from 'react';
import Services from './services';
import Expierence from './expierience';
import Footer from './footer';
import NavBar from './navbar';
import Profile from './profile';
import Projects from './projects';

const Home = () => {
const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const url = 'https://course-api.com/react-tabs-project'

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
        <Projects/>
        <Footer/>
    </div>
     );
}
 
export default Home;