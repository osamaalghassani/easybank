import { useState } from 'react';
import './App.css';
import Button from './components/button';
function App() {
  const [icon,setIcon]=useState('images/icon-hamburger.svg');
  return (
    <div className="App">
   <header>
    <div className='logo'>
      <img src='images/logo.svg' />
    </div>
    <ul className='links'>
      <li><a>Home</a></li>
      <li><a>about</a></li>
      <li><a>Contact</a></li>
      <li><a>Blog</a></li>
      <li><a>Careers</a></li>
    </ul>
    <Button>Request Invite</Button>
    <div className='icon' onClick={()=> icon =='images/icon-hamburger.svg'? setIcon("images/icon-close.svg"):setIcon('images/icon-hamburger.svg')} ><img src={icon}/></div>

   </header>
   <div className='nav-mobile' style={{display:icon == "images/icon-close.svg" ? "block":"none"}}>
   <ul className='links'>
      <li><a>Home</a></li>
      <li><a>about</a></li>
      <li><a>Contact</a></li>
      <li><a>Blog</a></li>
      <li><a>Careers</a></li>
    </ul>
   </div>
   <section className='landing'>
    <div className='desc'>
      <h2>Next Generation Digital Banking</h2>
      <p>Take Your finitonl life online. Your EasyBank account will be  a one-stop-shop for spending.saving, budgeting.investing,and mush more.</p>
      <Button className="btn">Request Invite</Button>
    </div>
    <div className='imag'>

  <img src='images/image-mockups.png'/>
    
  
    </div>

   </section>
   <section className=' boxes'>
<h2>Why Choose Easybank ?</h2>
<p className='pra'>
  We leverage Open Banking to turn your bank account into your financial hub.<br/>
  Control your finances like never before.

</p>
<div className='box-cont'> 
<div className='box'>
  <img src='images/icon-online.svg'/> 
  <h3>Online Banking</h3>
  <p>Our modern web and mobile applications allow you to keep track of your finance wherver you are in the world </p>

  </div>
<div className='box'>
<img src='images/icon-budgeting.svg'/> 
  <h3>simple Budgeting</h3>
  <p>Our modern web and mobile applications allow you to keep track of your finance wherver you are in the world </p>

  </div>
<div className='box'>
  <img src='images/icon-onboarding.svg'/> 
  <h3>Fast onboarding</h3>
  <p>Our modern web and mobile applications allow you to keep track of your finance wherver you are in the world </p>

  </div>
<div className='box'>
  <img src='images/icon-api.svg'/> 
  <h3>Open API</h3>
  <p>Our modern web and mobile applications allow you to keep track of your finance wherver you are in the world </p>

  </div>
</div>
   </section>
   <section className='artical'>
     
     <h2>Latest Articles</h2>
     <div className='arti-boxes'>
       <div className='box'>
         <img src='images/image-currency.jpg'/>
         <div className='arti'>
         <h6>By Claire Robinson</h6>
         <h3> Recevie Money in any currency with no fees </h3>
         <p> The World is getting smaller and we are becoming more moible.So why should you be  forced to only receive money in a single...  </p>
         </div>
       </div>
       <div className='box'>
         <img src='images/image-restaurant.jpg'/>

         <div className='arti'>
         <h6>By Claire Robinson</h6>
<h3>Treat yourself rr woying about money </h3>
         <p> The World is getting smaller and we are becoming more moible.So why should you be  forced to only receive money in a single...  </p>
         </div>
       </div>
       <div className='box'>
         <img src='images/image-plane.jpg'/>
         <div className='arti'>
         <h6>By Claire Robinson</h6>
         <h3> Take your EasyBank card wherever you go </h3>
         <p> The World is getting smaller and we are becoming more moible.So why should you be  forced to only receive money in a single...  </p>
         </div>
       </div>
       <div className='box'>
       <img src='images/image-confetti.jpg'/>

         <div className='arti'>
          
         <h6>By Claire Robinson</h6>
         <h3> Our invite-only Beta accounts are now live </h3>
         <p> The World is getting smaller and we are becoming more moible.So why should you be  forced to only receive money in a single...  </p>
         </div>
       </div>
     </div>
   </section>
   <footer>
     <div className='icons'>
     <img src='images/logo.svg' className='logo' /> 
     <div className='social'>
     <img src='images/icon-facebook.svg' />
     <img src='images/icon-youtube.svg' />
     <img src='images/icon-twitter.svg' />
     <img src='images/icon-pinterest.svg' />
     <img src='images/icon-instagram.svg' />

        </div>
   
   </div>
   <div className='links'>
        <ul >
      <li><a>Home</a></li>
      <li><a>about</a></li>
      <li><a>Contact</a></li>
 
    </ul>
        <ul >
   
      <li><a>Blog</a></li>
      <li><a>Careers</a></li>
      <li><a>Privacy Policy</a></li>
    </ul>
        </div>
        <div className='btn'><Button>Request Invite </Button>
        <p>	&#169;EasyBank.All Rights Reserved</p>
        </div>
   </footer>
    </div>
  );
}

export default App;
