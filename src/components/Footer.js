const socialPic = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/social_sprites_icons.svg";
const socialSite ={
    fb: "https://www.facebook.com/imsrs3/",
    ig: "https://www.instagram.com/imsrs3/",
    linkedIn: "https://www.linkedin.com/in/imsrs3/",
    twitter: "https://twitter.com/imsrs3",
    youtube: "https://m.youtube.com/channel/UCMeZStN_pxPgcqmAgf5dzGw"
}
function Footer() {
    return (
          
        <div className="text-center  m-auto " >
         
          
           <div className="space-x-8 bg-amazon_blue py-3">
           <a  href={socialSite.fb} target="_blank" rel="noopener noreferrer">
             <div className="fb logo-anime" style={{
               backgroundImage: `url(${socialPic})`,
             }}>
             </div>
           </a> 
           <a  href={socialSite.ig} target="_blank" rel="noopener noreferrer">
             <div className="ig logo-anime" style={{
               backgroundImage: `url(${socialPic})`,
             }}>
             </div>
           </a> 
           <a  href={socialSite.linkedIn} target="_blank" rel="noopener noreferrer">
             <div className="linkedIn logo-anime" style={{
               backgroundImage: `url(${socialPic})`,
             }}>
             </div>
           </a> 
           <a  href={socialSite.twitter} target="_blank" rel="noopener noreferrer">
             <div className="twitter logo-anime" style={{
               backgroundImage: `url(${socialPic})`,
             }}>
             </div>
           </a> 
           <a  href={socialSite.youtube} target="_blank" rel="noopener noreferrer">
             <div className="youtube logo-anime" style={{
               backgroundImage: `url(${socialPic})`,
             }}>
             </div>
           </a>   
           </div>
           <div className="bg-amazon_blue-light font-bold italic text-center text-black p-4 items-center grid animie">
           <q className="mb-2">Creativity is something that can't be adapted by AI and Robots.</q>
      
          <q>World is centered around Innovation and Innovation is basically of marriage between Creativity and Practicality.</q>
       <div className="items-end">
       <button className="scroll-top" title="Scroll to Top" onClick={()=> window.scrollTo(0,0)}>▲</button>
       </div>
           </div>
  
</div>
    )
}

export default Footer
