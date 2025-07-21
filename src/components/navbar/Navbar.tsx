"use client";
import Image from "next/image";
import ArrowLeft from "../arrows/ArrowLeft";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import Popup from "./Popup";
import {
  aboutLinks,
  additionalFeaturesLinks,
  navLinksList,
  productLinks,
  resourcesLinks,
  solutionsLinks,
} from "@/data/navbarData";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { appNavigate, PATH_SECTION_MAP } from "@/lib/appRoutes";
import AppDrawer from "./Drawer";
interface PopupPosition {
  top: number;
  left: number;
}

const Navbar = () => {
  const portalContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const navigate = useRouter();
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [popupPosition, setPopupPosition] = useState<PopupPosition | null>(
    null
  );
  const [selectedLink, setSelectedLink] = useState<string>("");
  const [activeLink, setActiveLink] = useState<string>("");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  // console.log("selectedLink ", selectedLink, "activeLink ", activeLink);
  const closePopup = () => {
    setPopupOpen(false);
    setPopupPosition(null);
    setSelectedLink("");
  };
  // console.log("selectedLink ", selectedLink);
  const handleNavPopupHover = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    // console.log(event.nativeEvent);
    const link = event.currentTarget.id;
    // console.log(selectedLink, link);
    // if (selectedLink != link) {
    if (link == "Pricing") {
      setPopupOpen(false);
      setPopupPosition(null);
      setSelectedLink("");
      return;
    }
    if (link != "Home") {
      setSelectedLink(link);
      const rect = event.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;

      setPopupPosition({
        top: 80,
        left: centerX,
      });
      setPopupOpen(true);
    }
    // }
  };
  const CSS_CLASSES = {
    "nav-inner-container": "p-2.5 cursor-pointer max-w-48",
    "nav-title": "text font-bold hover:text-primary",
    "nav-subTitle": "text-sm font-normal text-custom-gray",
    "services-heading": "text-xs font-semibold px-3 pt-5 pb-3 text-custom-gray",
  };
  useEffect(() => {
    closePopup();

    const currentPath = pathname.split("/").pop() || "";
    // console.log("currentPath ", currentPath);
    if (currentPath === "" || currentPath === "coming-soon") {
      setActiveLink("");
      return;
    }
    const section = PATH_SECTION_MAP[currentPath.toLowerCase()];
    setActiveLink(section || "");
  }, [pathname]);
  const HandleNavPopupLinkClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const link = event.currentTarget.id;
    // console.log("linkId ", link);
    appNavigate(navigate, link);
  };
  // console.log("isPopupOpen ", isPopupOpen, selectedLink);
  const handleDrawerMenuClick = () => {
    setToggleDrawer(true);
  };
  return (
    <header
      className="h-24 flex items-center justify-between px-4 sm:px-14"
      style={{ backgroundImage: "var(--color-background-gradient)" }}
    >
      <div
        className={
          clsx({ hidden: !pathname.split("/").pop() }) + " xl:absolute top-27"
        }
        onClick={() => navigate.back()}
      >
        <ArrowLeft />
      </div>
      <Link
        href="/"
        className="flex items-center cursor-pointer"
        onClick={() => {
          {
            closePopup();
            setSelectedLink("");
          }
        }}
      >
        <Image
          src="/images/util/tesseract_logo_small.png"
          alt="nav search image"
          width={60}
          height={60}
          className="flex-shrink-0"
        />
        <div id="Home" className="text-2xl text-secondary font-semibold">
          TesseractApps
        </div>
      </Link>
      <div className="hidden xl:flex justify-evenly w-5xl m-10 text-xl text-secondary cursor-pointer">
        {navLinksList.map((link) => (
          <div
            key={link + Math.random()}
            id={link}
            onMouseEnter={handleNavPopupHover}
            onMouseDownCapture={HandleNavPopupLinkClick}
            className={clsx({
              "font-semibold text-primary":
                activeLink == link || selectedLink == link,
            })}
          >
            {link}
          </div>
        ))}
      </div>
      <div className="hidden xl:flex justify-end gap-2.5 max-h-12">
        <Image
          src="/images/util/search.svg"
          alt="nav search image"
          width={50}
          height={50}
          className="bg-primary rounded-full w-12 p-2.5 cursor-pointer  flex-shrink-0"
        />
        <button className="bg-primary flex items-center gap-2.5 text-white p-2.5 px-5 rounded-full cursor-pointer flex-shrink-0">
          Book a Demo
          <Image
            src="/images/util/plus.svg"
            alt="nav search image"
            width={25}
            height={25}
            className="bg-white rounded-full w-8  flex-shrink-0"
          />
        </button>
        <Image
          src="/images/util/person.svg"
          alt="nav search image"
          width={50}
          height={50}
          className="bg-primary rounded-full w-12 p-2.5 cursor-pointer flex-shrink-0"
        />
        <Image
          src="/images/flags/australia.png"
          alt="nav search image"
          width={50}
          height={50}
          className="rounded-full w-12 object-contain cursor-pointer flex-shrink-0"
        />
      </div>
      <Image
        src="/images/util/menu.png"
        alt="nav search image"
        width={50}
        height={50}
        className="bg-primary rounded-full w-12 p-2.5 cursor-pointer flex-shrink-0 xl:hidden"
        onClick={handleDrawerMenuClick}
      />

      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        containerRef={portalContainerRef}
        position={popupPosition}
        onMouseLeave={closePopup}
      >
        <div
          className="p-1.5 rounded-xl max-h-[500px] w-max max-w-[95vw] box-border"
          style={{ backgroundImage: "var(--color-background-gradient)" }}
        >
          {selectedLink &&
            selectedLink == "About" &&
            aboutLinks.map((link) => (
              <div
                key={link.title + Math.random()}
                id={link.title}
                onClick={HandleNavPopupLinkClick}
                className={CSS_CLASSES["nav-inner-container"]}
              >
                <div className={CSS_CLASSES["nav-title"]}>{link.title}</div>
                <div className={CSS_CLASSES["nav-subTitle"]}>
                  {link.subTitle}
                </div>
              </div>
            ))}
          <div className="grid grid-cols-3 grid-rows-6 grid-flow-col max-h-[450px]">
            {selectedLink &&
              selectedLink == "Product" &&
              productLinks[0].map((link) => (
                <div
                  key={link.title + Math.random()}
                  id={link.title}
                  onClick={HandleNavPopupLinkClick}
                  className={CSS_CLASSES["nav-inner-container"]}
                >
                  <div className={CSS_CLASSES["nav-title"]}>{link.title}</div>
                  <div className={CSS_CLASSES["nav-subTitle"]}>
                    {link.subTitle}
                  </div>
                </div>
              ))}
            {selectedLink &&
              selectedLink == "Product" &&
              productLinks[1].map((link) => (
                <div
                  key={link.title + Math.random()}
                  id={link.title}
                  onClick={HandleNavPopupLinkClick}
                  className={CSS_CLASSES["nav-inner-container"]}
                >
                  <div className={CSS_CLASSES["nav-title"]}>{link.title}</div>
                  <div className={CSS_CLASSES["nav-subTitle"]}>
                    {link.subTitle}
                  </div>
                </div>
              ))}
            {selectedLink &&
              selectedLink == "Product" &&
              productLinks[2].map((link) => (
                <div
                  key={link.title + Math.random()}
                  id={link.title}
                  onClick={HandleNavPopupLinkClick}
                  className={CSS_CLASSES["nav-inner-container"]}
                >
                  <div className={CSS_CLASSES["nav-title"]}>{link.title}</div>
                  <div className={CSS_CLASSES["nav-subTitle"]}>
                    {link.subTitle}
                  </div>
                </div>
              ))}
          </div>
          <div className="grid grid-cols-5 max-h-[450px]">
            <div>
              {selectedLink && selectedLink == "Solutions" && (
                <div className={CSS_CLASSES["services-heading"]}>
                  BY INDUSTRY
                </div>
              )}
              {selectedLink &&
                selectedLink == "Solutions" &&
                solutionsLinks["BY INDUSTRY"].map((link) => (
                  <div
                    key={link.title + Math.random()}
                    id={link.title}
                    onClick={HandleNavPopupLinkClick}
                    className={CSS_CLASSES["nav-inner-container"]}
                  >
                    <div className={CSS_CLASSES["nav-title"]}>{link.title}</div>
                    <div className={CSS_CLASSES["nav-subTitle"]}>
                      {link.subTitle}
                    </div>
                  </div>
                ))}
            </div>
            <div>
              {selectedLink && selectedLink == "Solutions" && (
                <div className={CSS_CLASSES["services-heading"]}>BY CARE</div>
              )}
              {selectedLink &&
                selectedLink == "Solutions" &&
                solutionsLinks["BY CARE"].map((link) => (
                  <div
                    key={link.title + Math.random()}
                    id={link.title}
                    onClick={HandleNavPopupLinkClick}
                    className={CSS_CLASSES["nav-inner-container"]}
                  >
                    <div className={CSS_CLASSES["nav-title"]}>{link.title}</div>
                    <div className={CSS_CLASSES["nav-subTitle"]}>
                      {link.subTitle}
                    </div>
                  </div>
                ))}
            </div>
            <div>
              {selectedLink && selectedLink == "Solutions" && (
                <div className={CSS_CLASSES["services-heading"]}>BY ROLE</div>
              )}
              {selectedLink &&
                selectedLink == "Solutions" &&
                solutionsLinks["BY ROLE"].map((link) => (
                  <div
                    key={link.title + Math.random()}
                    id={link.title}
                    onClick={HandleNavPopupLinkClick}
                    className={CSS_CLASSES["nav-inner-container"]}
                  >
                    <div className={CSS_CLASSES["nav-title"]}>{link.title}</div>
                    <div className={CSS_CLASSES["nav-subTitle"]}>
                      {link.subTitle}
                    </div>
                  </div>
                ))}
            </div>
            <div>
              {selectedLink && selectedLink == "Solutions" && (
                <div className={CSS_CLASSES["services-heading"]}>
                  BY BUSINESS TYPE
                </div>
              )}
              {selectedLink &&
                selectedLink == "Solutions" &&
                solutionsLinks["BY BUSINESS TYPE"].map((link) => (
                  <div
                    key={link.title + Math.random()}
                    id={link.title}
                    onClick={HandleNavPopupLinkClick}
                    className={CSS_CLASSES["nav-inner-container"]}
                  >
                    <div className={CSS_CLASSES["nav-title"]}>{link.title}</div>
                    <div className={CSS_CLASSES["nav-subTitle"]}>
                      {link.subTitle}
                    </div>
                  </div>
                ))}
            </div>
            <div>
              {selectedLink && selectedLink == "Solutions" && (
                <div className={CSS_CLASSES["services-heading"]}>
                  BY BUSINESS PROBLEM
                </div>
              )}
              {selectedLink &&
                selectedLink == "Solutions" &&
                solutionsLinks["BY BUSINESS PROBLEM"].map((link) => (
                  <div
                    key={link.title + Math.random()}
                    id={link.title}
                    onClick={HandleNavPopupLinkClick}
                    className={CSS_CLASSES["nav-inner-container"]}
                  >
                    <div className={CSS_CLASSES["nav-title"]}>{link.title}</div>
                    <div className={CSS_CLASSES["nav-subTitle"]}>
                      {link.subTitle}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {selectedLink &&
            selectedLink == "Resources" &&
            resourcesLinks.map((link) => (
              <div
                key={link.title + Math.random()}
                id={link.title}
                onClick={HandleNavPopupLinkClick}
                className={CSS_CLASSES["nav-inner-container"]}
              >
                <div className={CSS_CLASSES["nav-title"]}>{link.title}</div>
                <div className={CSS_CLASSES["nav-subTitle"]}>
                  {link.subTitle}
                </div>
              </div>
            ))}
          {selectedLink &&
            selectedLink == "Additional Features" &&
            additionalFeaturesLinks.map((link) => (
              <div
                key={link.title + Math.random()}
                id={link.title}
                onClick={HandleNavPopupLinkClick}
                className={CSS_CLASSES["nav-inner-container"]}
              >
                <div className={CSS_CLASSES["nav-title"]}>{link.title}</div>
                <div className={CSS_CLASSES["nav-subTitle"]}>
                  {link.subTitle}
                </div>
              </div>
            ))}
        </div>
      </Popup>
      <AppDrawer
        navigate={navigate}
        toggleDrawer={toggleDrawer}
        setToggleDrawer={setToggleDrawer}
      />
      <div className="hidden xl:visible" ref={portalContainerRef} />
    </header>
  );
};

export default Navbar;
