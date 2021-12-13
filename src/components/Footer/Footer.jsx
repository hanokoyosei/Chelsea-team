import React from "react"; 
import "./Footer.css"; 
import { 
  InstagramOutlined, 
  FacebookOutlined, 
  TwitterOutlined, 
  YoutubeOutlined, 
  WhatsAppOutlined, 
} from "@ant-design/icons"; 
 
const Footer = () => { 
  return ( 
    <div className="first-footer"> 
      <div className="back"> 
        <a style={{ color: "#2554C7" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> 
          BACK TO TOP 
        </a> 
      </div> 
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '2%'}}>
          <a href='https://www.nike.com/'><img src='https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232,z_1.0/v1/site-assets/partner-logos/Nike_XL_Color%403x' alt='' /></a>
          <a href='http://www.three.co.uk/chelseafc?id=WH_21'><img src='https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232,z_1.0/v1/logos/sponsors/footer-logos/three_-_footer' alt='' /></a>
          <a href='https://www.trivago.com/?cip=1010725040101'><img src='https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232,z_1.0/v1/logos/sponsors/footer-logos/trivago_-_footer_-_trans' alt='' /></a>
      </div>
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '2%'}}>
          <a href='https://www.cadbury.co.uk/'><img style={{width: '120px'}} src='https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232,z_1.0/v1/logos/sponsors/footer-logos/cadbury_-_footer' alt='' /></a>
          <a href='https://www.ea.com/en-gb/games/fifa/fifa-21'><img style={{width: '120px'}} src='https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232,z_1.0/v1/logos/sponsors/footer-logos/ea_-_footer_-_trans' alt='' /></a>
          <a href='https://www.fiserv.com/'><img style={{width: '120px'}} src='https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232,z_1.0/v1/logos/sponsors/footer-logos/fiserv_-_footer_-_trans' alt='' /></a>
          <a href='https://www.gomarkets.com/en/'><img style={{width: '120px'}} src='https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232,z_1.0/v1/logos/sponsors/footer-logos/go_-_footer_-_trans' alt='' /></a>
          <a href='https://www.hublot.com/ru-int/?country=KG'><img style={{width: '120px'}} src='https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232,z_1.0/v1/logos/sponsors/footer-logos/hublot_-_footer_-_trans' alt='' /></a>
          <a href='https://www.hyundai.co.uk/'><img style={{width: '120px'}} src='https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232,z_1.0/v1/site-assets/partner-logos/hyundai_-_footer' alt='' /></a>
          <a href='https://www.msccruises.co.uk/'><img style={{width: '120px'}} src='https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232,z_1.0/v1/logos/sponsors/footer-logos/MSC_-_footer_-_trans' alt='' /></a>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '2%'}}>
          <a href='https://parimatch.com/en?tid=pr_a9b1_Chelsea_logo_footer_pmhomepage&traffic_back_url=%27parimatch.com%2Fen%27'><img style={{width: '120px'}} src='https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232,z_1.0/v1/logos/sponsors/footer-logos/parimatch_-_footer' alt='' /></a>
          <a href='https://www.singha.com/'><img style={{width: '120px'}} src='https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232,z_1.0/v1/logos/sponsors/footer-logos/singha_-_footer' alt='' /></a>
          <a href='https://www.suredeodorant.co.uk/'><img style={{width: '120px'}} src='https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232,z_1.0/v1/logos/sponsors/footer-logos/sure_-_footer_-_trans' alt='' /></a>
          <a href='https://www.vitality.co.uk/'><img style={{width: '120px'}} src='https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232,z_1.0/v1/logos/sponsors/footer-logos/vitality_-_footer' alt='' /></a>
          <a href='https://www.yokohama-online.com/en/'><img style={{width: '120px'}} src='https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,q_auto,w_232,z_1.0/v1/logos/sponsors/footer-logos/yokohama-footer' alt='' /></a>
          </div>
          <div className='col' style={{marginTop: '5%'}}>
      <div className="footer"> 
          <div className="ins">  
            <a> 
              <FacebookOutlined /> 
            </a> 
            <a> 
              <TwitterOutlined /> 
            </a>
            <a> 
              <InstagramOutlined /> 
            </a> 
            <a> 
              <YoutubeOutlined /> 
            </a> 
          </div> 
      </div> 
       <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '2%'}}>
         <a><h3 className="hh">Contact Us</h3></a>
         <a><h3 className="hh">FAQs</h3></a>
         <a><h3 className="hh">Careers</h3></a>
         <a><h3 className="hh">Modern Slavery Act</h3></a>
         <a><h3 className="hh">Privacy Policy</h3></a>
         <a><h3 className="hh">Cookies Policy</h3></a>
         <a><h3 className="hh">Terms & Conditions</h3></a>
       </div>
       <div style={{display: 'flex', justifyContent: 'center', marginTop: '2%', color: 'white'}}>
         <p>© 2021 Chelsea FC. All rights reserved. No part of this site may be reproduced without our written permission.</p>
       </div>
       </div>
    </div> 
  ); 
}; 
 
export default Footer;