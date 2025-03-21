import React from "react";
const title = "About ShopCart";
const desc =
  "Eduaid theme number one world class university in the world There are student are studing always in this university for all time.";
const ItemTitle = "Categories";


const addressList = [
  { iconName: "icofont-google-map", text: " New York, USA." },
  { iconName: "icofont-phone", text: " +880 123 456 789" },
  { iconName: "icofont-envelope", text: " info@shopcart.com" },
];

const socialList = [
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
  { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
];

const ItemList = [
  { text: "All Products", link: "/shop" },
  { text: "Shop", link: "/shop" },
  { text: "Blog", link: "/blog" },
  { text: "About", link: "/about" },
  { text: "Policy", link: "#" },
  { text: "FAQs", link: "/about" },
];





const Footer = () => {
  return <footer className=" style-2">
         <div className="footer-top dark-view padding-tb">
            <div className="container">
                <div className="row ">
                    <div className="col">
                        <div className="footer-item our-address">
                            <div className="footer-content">
                                <div className="title">
                                      <h4>{title}</h4>
                                </div>
                                <div className="content">
                                    <p>
                                        {desc}
                                    </p>
                                    <ul className="lab-ul office-address">
                                        {
                                            addressList.map((val , i )=>(
                                                <li key={i}>
                                                     <i className={val.iconName}> {val.iconName}</i>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <ul className="lab-ul social-icons">
                                        {
                                            socialList.map((val , i )=>(
                                                <li key={i}>
                                                     <a href="#" className={val.className}> <i className={val.iconName}>{val.text}</i></a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

         </div>
  </footer>;
};

export default Footer;
