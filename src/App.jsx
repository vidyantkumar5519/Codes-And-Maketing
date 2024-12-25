import './App.css';
import Advertisment from './Component/Advertisment';
import AwardSection from './Component/AwardSection';
import Client from './Component/Client';
import Footer from './Component/Footer';
import FreqQues from './Component/FreqQues';
import Hero from './Component/Hero';
import Industry from './Component/Industry';
import Information from './Component/Information';
import Insights from './Component/Insights';
import Invovations from './Component/Invovations';
import Languages from './Component/Languages';
import Media from './Component/Media';
import MediaCoverage from './Component/MediaCoverage';
import Navbar from './Component/Navbar';
import Services from './Component/Services';
import Slider from './Component/Slider';

function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
    <Slider/>
    <Information/>
    <Invovations/>
    <Services/>
    <Languages/>
    <Industry/>
    <Client/>
     <Advertisment/>
    <AwardSection/>
    <Insights/>
    <FreqQues/>
 <MediaCoverage/>
    <Footer/>

    </>
  )
}

export default App
