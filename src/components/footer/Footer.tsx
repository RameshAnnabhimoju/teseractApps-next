import {
  aboutCompanyData,
  companyData,
  exploreData,
  footerBottomData,
  getStartedData,
  newsLetterData,
  supportData,
} from "@/data/footerData";
import { productLinks } from "@/data/footerData";
import Image from "next/image";
import Link from "next/link";
import { getRoute } from "@/lib/appRoutes";
const Footer = () => {
  //   const [newsletterEmail, setNewsletterEmail] = useState("");

  //   const handleNewsletterSubscribe = () => {
  // if (newsletterEmail) {
  // Here you can add the logic to handle the newsletter subscription
  //   sendEmail(
  //     "enquiries@tesseractapps.com",
  //     "Request for newsletter subscription",
  //     `${newsletterEmail} has requested a subscription for our newsletter.\n
  //           Email: ${newsletterEmail}
  //     `
  //   )
  //     .then((response) => {
  //       console.log("Email sent successfully:", response);
  //       alert("Thank you for subscribing to our newsletter!");
  //     })
  //     .catch((error) => {
  //       console.error("Error sending email:", error);
  //       alert(
  //         "There was an error sending your request. Please try again later."
  //       );
  //     });
  // console.log("Subscribed with email:", newsletterEmail);
  //   setNewsletterEmail(""); // Clear the input after subscribing
  // } else {
  //   alert("Please enter a valid email address.");
  // }
  //   };
  const CSS_CLASSES = {
    "footer-column": "flex flex-col w-36 ",
    "footer-heading": "text-lg mb-4",
    "footer-text":
      "text-sm leading-5 pr-10 pb-2.5 text-custom-gray cursor-pointer hover:text-primary transition-colors",
  };
  return (
    <div
      className="flex flex-col xl:px-24 py-20 "
      style={{ backgroundImage: "var(--color-background-gradient)" }}
    >
      <div className="flex">
        <div className="xl:max-w-xl grow shrink basis-96">
          <div id="footer-column1-item">
            <div className="text-lg mb-4">{aboutCompanyData.title}</div>
            <div className="text-sm leading-5 pr-10 pb-2.5 text-custom-gray ">
              {aboutCompanyData.description}
              <br></br>
              <Link
                href={"tel:" + aboutCompanyData.phone}
                className="cursor-pointer"
              >
                Phone: {aboutCompanyData.phone}
              </Link>
              <br></br>
              <Link
                href={"mailto:" + aboutCompanyData.email}
                className="cursor-pointer"
              >
                Email: {aboutCompanyData.email}
              </Link>
            </div>
            <div className="flex items-center gap-5 my-2.5">
              <Link
                href={getRoute("facebook")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/social/facebook.png"
                  alt="Facebook"
                  className="w-6 cursor-pointer"
                  width={25}
                  height={25}
                />
              </Link>
              <Link
                href={getRoute("instagram")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/social/instagram.png"
                  alt="Instagram"
                  className="w-6 cursor-pointer"
                  width={25}
                  height={25}
                />
              </Link>
              <Link
                href={getRoute("linkedin")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/social/linkedin.png"
                  alt="LinkedIn"
                  className="w-6 cursor-pointer"
                  width={25}
                  height={25}
                />
              </Link>
              <Link
                href={getRoute("youtube")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/social/youtube.png"
                  alt="YouTube"
                  className="w-6 cursor-pointer"
                  width={25}
                  height={25}
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 my-12">
            <div className="text-4xl text-custom-gray-dark">
              {newsLetterData.title}
            </div>
            <div className="leading-5 text-custom-gray max-w-md">
              {newsLetterData.description}
            </div>
            <div className="flex items-center">
              <input
                type="text"
                className="w-64 text-sm p-2.5 border-0 rounded-l-xl bg-white"
                placeholder="Enter your email"
                // value={newsletterEmail}
                // onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button
                className="bg-primary text-white cursor-pointer text-sm border-0 rounded-r-xl py-2.5 px-5"
                // onClick={handleNewsletterSubscribe}
              >
                {newsLetterData.button}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 basis-5xl grow-[15] shrink-[15]">
          <div className={CSS_CLASSES["footer-column"]}>
            <div className={CSS_CLASSES["footer-heading"]}>
              {productLinks.title}
            </div>
            {productLinks.data[0].map((link, index) => {
              return (
                <Link
                  href={getRoute(link.title)}
                  className={CSS_CLASSES["footer-text"]}
                  key={index}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
          <div className={CSS_CLASSES["footer-column"]}>
            <div className={CSS_CLASSES["footer-heading"]}></div>
            {productLinks.data[1].map((link, index) => {
              return (
                <Link
                  href={getRoute(link.title)}
                  className={CSS_CLASSES["footer-text"]}
                  key={index}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
          <div className={CSS_CLASSES["footer-column"]}>
            <div className={CSS_CLASSES["footer-heading"]}></div>
            {productLinks.data[2].map((link, index) => {
              return (
                <Link
                  href={getRoute(link.title)}
                  className={CSS_CLASSES["footer-text"]}
                  key={index}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>

          <div id="footer-column-3" className={CSS_CLASSES["footer-column"]}>
            <div className={CSS_CLASSES["footer-heading"]}>
              {getStartedData.title}
            </div>
            {getStartedData.data.map((item, index) => (
              <Link
                href={getRoute(item)}
                className={CSS_CLASSES["footer-text"]}
                key={index}
              >
                {item}
              </Link>
            ))}
          </div>
          <div className={CSS_CLASSES["footer-column"]}>
            <div className={CSS_CLASSES["footer-heading"]}>
              {exploreData.title}
            </div>
            {exploreData.data.map((item, index) => (
              <Link
                href={getRoute(item)}
                className={CSS_CLASSES["footer-text"]}
                key={index}
              >
                {item}
              </Link>
            ))}
          </div>
          <div className={CSS_CLASSES["footer-column"]}>
            <div className={CSS_CLASSES["footer-heading"]}>
              {companyData.title}
            </div>
            {companyData.data.map((item, index) => (
              <Link
                href={getRoute(item)}
                className={CSS_CLASSES["footer-text"]}
                key={index}
              >
                {item}
              </Link>
            ))}
          </div>
          <div className={CSS_CLASSES["footer-column"]}>
            <div className={CSS_CLASSES["footer-heading"]}>
              {supportData.title}
            </div>
            {supportData.data.map((item, index) => (
              <Link
                href={getRoute(item)}
                className={CSS_CLASSES["footer-text"]}
                key={index}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center text-custom-gray w-full">
        <br />
        <br />
        <br />
        {footerBottomData.text}
        <br />
        <div className="flex gap-2 items-center justify-center mt-5">
          {footerBottomData.images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          ))}
        </div>
        <br /> {footerBottomData.bottomText}
      </div>
    </div>
  );
};

export default Footer;
