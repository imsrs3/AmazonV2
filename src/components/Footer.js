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
          
        <div className="text-center  m-auto" >
          <p className="link" onClick={()=> window.scrollTo(0,0)}>Go to Top</p>
           <div className="space-x-8 bg-amazon_blue py-3">
           <a  href={socialSite.fb} target="_blank" rel="noopener noreferrer">
             <div className="fb" style={{
               backgroundImage: `url(${socialPic})`,
             }}>
             </div>
           </a> 
           <a  href={socialSite.ig} target="_blank" rel="noopener noreferrer">
             <div className="ig" style={{
               backgroundImage: `url(${socialPic})`,
             }}>
             </div>
           </a> 
           <a  href={socialSite.linkedIn} target="_blank" rel="noopener noreferrer">
             <div className="linkedIn" style={{
               backgroundImage: `url(${socialPic})`,
             }}>
             </div>
           </a> 
           <a  href={socialSite.twitter} target="_blank" rel="noopener noreferrer">
             <div className="twitter" style={{
               backgroundImage: `url(${socialPic})`,
             }}>
             </div>
           </a> 
           <a  href={socialSite.youtube} target="_blank" rel="noopener noreferrer">
             <div className="youtube" style={{
               backgroundImage: `url(${socialPic})`,
             }}>
             </div>
           </a>   
           </div>
           <div className="bg-amazon_blue-light font-semibold italic text-center text-white p-4 items-center grid">
           <q className="mb-2">Creativity is something that can't be adapted by AI and Robots.</q>
      
          <q>World is centered around Innovation and Innovation is basically of marriage between Creativity and Practicality.</q>
       
           </div>
  
</div>
    )
}

export default Footer
