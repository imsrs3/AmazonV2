import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const pics = ["https://links.papareact.com/gi1"];
function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
            <Carousel 
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
            >
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M17/non-reg/3000x1200_Hero-Tall_P._CB668328610_.jpg" alt="" />
                </div>
                <div>
                    <img src="https://links.papareact.com/gi1" alt="" />
                </div>
                <div>
                    <img src="https://links.papareact.com/6ff" alt="" />
                </div>
                <div>
                    <img src="https://links.papareact.com/7ma" alt="" />
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/May/1X_GW_PC_3000x1200._CB669526939_.jpg" alt="" />
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Electronics/May-BAU/D23214869_IN_CEPC_BAU_activation_graphics_May21_3000x12000.5x._CB669264751_.jpg" alt="" />
                </div>
             </Carousel>      
            
        </div>
    )
}

export default Banner
