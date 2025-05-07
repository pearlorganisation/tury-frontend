import React from 'react'
import Banner from '../../components/HomeComponents/Banner'
import WhyTuryhost from '../../components/HomeComponents/WhyTuryhost'
import Services from '../../components/HomeComponents/Services'
import Benifits from '../../components/HomeComponents/Benifits'

const Home = () => {
  return (
    <div>
      <Banner />
      <WhyTuryhost />
      <Services />
      <Benifits />
    </div>
  )
}

export default Home