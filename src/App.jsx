import './App.css'
// import the cobita_bottle image
import cobiota_bottle from './assets/cobiota_bottle.png'
import cobiota_letterC from './assets/cobiota_letterC.svg'
import cobiota_letterO from './assets/cobiota_letterO.svg'
import cobiota_letterB from './assets/cobiota_letterB.svg'
import cobiota_letterI from './assets/cobiota_letterI.svg'
import cobiota_letterO2 from './assets/cobiota_letterO2.svg'
import cobiota_letterT from './assets/cobiota_letterT.svg'
import cobiota_letterA from './assets/cobiota_letterA.svg'
import arrowDown from './assets/arrowDon.svg'
import goodForYouBottle from './assets/goodForYouBottle.svg'
import fingerPrint from './assets/fingerPrint.svg'
import people from './assets/people.svg'

function App() {

  return (
    
    <div>
      <div className="navBar">
        <span className="middle">
          <div className="navBarLink">
            <a href='404'>About</a>
          </div>
          <div className="navBarLogo">
            {/* spell cobiota with the svgs */}
            <img className="navBarLogoImage" src={cobiota_letterC} alt="cobiota_letterC"/>
            <img className="navBarLogoImage" src={cobiota_letterO} alt="cobiota_letterO"/>
            <img className="navBarLogoImage" src={cobiota_letterB} alt="cobiota_letterB"/>
            <img className="navBarLogoImage" src={cobiota_letterI} alt="cobiota_letterI"/>
            <img className="navBarLogoImageO" src={cobiota_letterO2} alt="cobiota_letterO2" />
            <img className="navBarLogoImage" src={cobiota_letterT} alt="cobiota_letterT"/>
            <img className="navBarLogoImage" src={cobiota_letterA} alt="cobiota_letterA"/>
          </div>
          <div className="navBarLink">
            <a href='404'>Science</a>
          </div>
          <div className='shop'>
            Shop
          </div>
        </span>
        
      </div>

      <div className="landing">
        <div className="landingText">
            <h1 className="landingTitle">
              <span className="Regular">A probiotic that</span><br/>
              <span className="Italic">actually helps</span>
            </h1>
            <p className='landingInfo'>
              Most probiotics claim to “support better gut health”,
              but rarely can they actually prove it. At CoBiota, 
              we’ve built our probiotics on solid scientific foundations,
              and are confident that we can provide consumers with real,
              tangible benefits.
            </p>
            <button className="landingButton">Explore</button>
        </div>
        <div className="landingImageContainer">
          <img className="landingImage" src={cobiota_bottle} alt="landingImage"/>
        </div>
      </div>
      <div className="info">
        <div className="MainHeader">
          <h1 className="Title">Engineered with <span className='textYellow'>purpose,</span><br/>
            Designed for <span className='textYellow'>everyone.</span> 
          </h1>
          <h2>
          At CoBiota, we create the world’s most  <span className='itallicsInfo'>useful</span><br/> probiotics using the power of genetic engineering.
          </h2>
          <p>Here's why</p>
          <img className='arrowDown' src={arrowDown} alt="arrowDown"/>
        </div>
          <div className='SecondHeader'>

            <div className='indestrieText'>
              <h1 className='title'>The probiotics industry <br/> is broken</h1>
              <p>
              Ageing probiotic companies no longer care to innovate, and most probiotics sitting on the shelf make a blanket claim of “better for gut health”, but what does that even mean?
              </p>
            </div>
            
              <img className='goodForYouBottle' src={goodForYouBottle} alt="goodForYouBottle"/>
            
          </div>
          <div className='SecondHeader'>
            <img className='fingerPrint' src={fingerPrint} alt="fingerPrint"/>
            <div className='consistancy'>
              <h1 className='title'>There exists a <br/> consistency problem </h1>
                <p>
                The gut and its microbiome is like a fingerprint, different <br/>from person to person. Not just that, gut microbiomes<br/> change frequently, and will look different from one week <br/>to another.<br/><br/>
                Traditional probiotics will inconsistently interact with <br/> your gut, and its effects will be different from one person<br/> to another. Sometimes they work, sometimes not               
             </p>
            </div>
          </div>
          <div className='SecondHeader'>

            <div className='problem'>
              <h1 className='title'>Our probiotics<br/> don’t have this<br/> problem</h1>
              <p>
              We’ve engineered our probiotics to<br/> provide real health benefits,<br/> consistent across everyone.
              </p>
            </div>
            
              <img className='people' src={people} alt="people"/>
            
          </div>
          
        </div>
        <div className='extraspace'></div>

        
      

    </div>
  )
}

export default App
