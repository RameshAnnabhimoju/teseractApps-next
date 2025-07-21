import { Drawer } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { appNavigate } from "@/lib/appRoutes";
import {
  aboutLinks,
  additionalFeaturesLinks,
  navLinksList,
  productLinks,
  resourcesLinks,
  solutionsLinks,
} from "@/data/navbarData";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
type appDrawerTypes = {
  toggleDrawer: boolean;
  setToggleDrawer: Dispatch<SetStateAction<boolean>>;
  navigate: AppRouterInstance;
};
const AppDrawer = ({
  toggleDrawer,
  setToggleDrawer,
  navigate,
}: appDrawerTypes) => {
  const [expanded, setExpanded] = useState(-1);
  const handleExpansion = (index: number) => {
    // console.log(index);
    setExpanded((prevExpanded: number) => {
      if (prevExpanded === index) {
        return -1; // Collapse the currently expanded item
      } else {
        return index; // Expand the clicked item
      }
    });
  };
  const drawerLinkClickHandler = (name: string) => {
    setToggleDrawer(false);
    if (name) {
      appNavigate(navigate, name);
    }
  };
  const CSS_CLASSES = {
    "nav-inner-container": "p-2.5 max-w-[200px] block",
    "nav-title": "font-semibold  block",
    "nav-sub-title": "text-sm font-medium text-custom-gray  block",
  };
  return (
    <Drawer
      id="nav-menu-drawer"
      anchor="right"
      open={toggleDrawer}
      ModalProps={{
        BackdropProps: {
          sx: {
            backdropFilter: "blur(4px)", // 💡 adds blur effect
            backgroundColor: "rgba(0, 0, 0, 0.4)", // optional dark overlay
          },
        },
      }}
    >
      <div className="py-6">
        <div className="flex justify-between items-center px-3">
          <div
            className="bg-primary flex items-center gap-2.5 text-white p-2 px-3 rounded-full cursor-pointer flex-shrink-0 "
            id="navbar-requestDemo"
            onClick={() => drawerLinkClickHandler("Book a Demo")}
          >
            Book a Demo{" "}
            <Image
              src="/images/util/plus.svg"
              alt="navbar-plus-image"
              id="navbar-requestDemo-icon"
              width={25}
              height={25}
              className="bg-white rounded-full w-8  flex-shrink-0"
            />
          </div>
          <Image
            src="/images/util/close.png"
            alt="closeIcon"
            id="nav-drawer-close"
            width={30}
            height={30}
            onClick={() => {
              setToggleDrawer(false);
            }}
          />
        </div>
        <div>
          {navLinksList.map((label, index) => {
            if (label != "Pricing") {
              return (
                <Accordion
                  key={label}
                  elevation={0}
                  square
                  expanded={expanded === index}
                  onChange={() => handleExpansion(index)}
                  sx={{
                    backgroundColor: "transparent",
                    marginBottom: "5px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <Image
                        src="/images/util/arrow_down.svg"
                        alt="arrow"
                        width={25}
                        height={25}
                      />
                    }
                  >
                    <Typography
                      sx={{ fontSize: "20px", fontWeight: 600 }}
                      component="span"
                    >
                      {label}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ fontSize: "18px", fontWeight: 400 }}>
                      {expanded == 0 &&
                        Array.isArray(aboutLinks) &&
                        aboutLinks.map((value) => (
                          <span
                            key={value.title}
                            className={CSS_CLASSES["nav-inner-container"]}
                            onClick={() => drawerLinkClickHandler(value.title)}
                          >
                            <span className={CSS_CLASSES["nav-title"]}>
                              {value.title}
                            </span>
                            <span className={CSS_CLASSES["nav-sub-title"]}>
                              {value.subTitle}
                            </span>
                          </span>
                        ))}
                      {expanded == 1 && Array.isArray(productLinks) && (
                        <>
                          <span
                            key="Product"
                            id="Product"
                            className={CSS_CLASSES["nav-inner-container"]}
                            onClick={() => drawerLinkClickHandler("Product")}
                          >
                            <span className={CSS_CLASSES["nav-title"]}>
                              Products Overview
                            </span>
                            <span className={CSS_CLASSES["nav-sub-title"]}>
                              Learn More
                            </span>
                          </span>
                          {productLinks[0].map((value) => (
                            <span
                              key={value.title}
                              className={CSS_CLASSES["nav-inner-container"]}
                              onClick={() =>
                                drawerLinkClickHandler(value.title)
                              }
                            >
                              <span className={CSS_CLASSES["nav-title"]}>
                                {value.title}
                              </span>
                              <span className={CSS_CLASSES["nav-sub-title"]}>
                                {value.subTitle}
                              </span>
                            </span>
                          ))}
                          {productLinks[1].map((value) => (
                            <span
                              key={value.title}
                              className={CSS_CLASSES["nav-inner-container"]}
                              onClick={() =>
                                drawerLinkClickHandler(value.title)
                              }
                            >
                              <span className={CSS_CLASSES["nav-title"]}>
                                {value.title}
                              </span>
                              <span className={CSS_CLASSES["nav-sub-title"]}>
                                {value.subTitle}
                              </span>
                            </span>
                          ))}
                          {productLinks[2].map((value) => (
                            <span
                              key={value.title}
                              className={CSS_CLASSES["nav-inner-container"]}
                              onClick={() =>
                                drawerLinkClickHandler(value.title)
                              }
                            >
                              <span className={CSS_CLASSES["nav-title"]}>
                                {value.title}
                              </span>
                              <span className={CSS_CLASSES["nav-sub-title"]}>
                                {value.subTitle}
                              </span>
                            </span>
                          ))}
                        </>
                      )}
                      {expanded == 4 &&
                        Array.isArray(resourcesLinks) &&
                        resourcesLinks.map((value) => (
                          <span
                            key={value.title}
                            className={CSS_CLASSES["nav-inner-container"]}
                            onClick={() => drawerLinkClickHandler(value.title)}
                          >
                            <span className={CSS_CLASSES["nav-title"]}>
                              {value.title}
                            </span>
                            <span className={CSS_CLASSES["nav-sub-title"]}>
                              {value.subTitle}
                            </span>
                          </span>
                        ))}
                      {expanded == 5 &&
                        Array.isArray(additionalFeaturesLinks) &&
                        additionalFeaturesLinks.map((value) => (
                          <span
                            key={value.title}
                            className={CSS_CLASSES["nav-inner-container"]}
                            onClick={() => drawerLinkClickHandler(value.title)}
                          >
                            <span className={CSS_CLASSES["nav-title"]}>
                              {value.title}
                            </span>
                            <span className={CSS_CLASSES["nav-sub-title"]}>
                              {value.subTitle}
                            </span>
                          </span>
                        ))}
                      {expanded == 2 && (
                        <span id="nav-menu-solutions">
                          <span>
                            <span className="services-heading">
                              BY INDUSTRY
                            </span>
                            {Array.isArray(solutionsLinks["BY INDUSTRY"]) &&
                              solutionsLinks["BY INDUSTRY"].map((value) => (
                                <span
                                  key={value.title}
                                  className={CSS_CLASSES["nav-inner-container"]}
                                  onClick={() =>
                                    drawerLinkClickHandler(value.title)
                                  }
                                >
                                  <span className={CSS_CLASSES["nav-title"]}>
                                    {value.title}
                                  </span>
                                  <span
                                    className={CSS_CLASSES["nav-sub-title"]}
                                  >
                                    {value.subTitle}
                                  </span>
                                </span>
                              ))}
                          </span>
                          <span>
                            <span className="services-heading">BY CARE</span>
                            {Array.isArray(solutionsLinks["BY CARE"]) &&
                              solutionsLinks["BY CARE"].map((value) => (
                                <span
                                  key={value.title}
                                  className={CSS_CLASSES["nav-inner-container"]}
                                  onClick={() =>
                                    drawerLinkClickHandler(value.title)
                                  }
                                >
                                  <span className={CSS_CLASSES["nav-title"]}>
                                    {value.title}
                                  </span>
                                  <span
                                    className={CSS_CLASSES["nav-sub-title"]}
                                  >
                                    {value.subTitle}
                                  </span>
                                </span>
                              ))}
                          </span>
                          <span>
                            <span className="services-heading">BY ROLE</span>
                            {Array.isArray(solutionsLinks["BY ROLE"]) &&
                              solutionsLinks["BY ROLE"].map((value) => (
                                <span
                                  key={value.title}
                                  className={CSS_CLASSES["nav-inner-container"]}
                                  onClick={() =>
                                    drawerLinkClickHandler(value.title)
                                  }
                                >
                                  <span className={CSS_CLASSES["nav-title"]}>
                                    {value.title}
                                  </span>
                                  <span
                                    className={CSS_CLASSES["nav-sub-title"]}
                                  >
                                    {value.subTitle}
                                  </span>
                                </span>
                              ))}
                          </span>
                          <span>
                            <span className="services-heading">
                              BY BUSINESS TYPE
                            </span>
                            {Array.isArray(
                              solutionsLinks["BY BUSINESS TYPE"]
                            ) &&
                              solutionsLinks["BY BUSINESS TYPE"].map(
                                (value) => (
                                  <span
                                    key={value.title}
                                    className={
                                      CSS_CLASSES["nav-inner-container"]
                                    }
                                    onClick={() =>
                                      drawerLinkClickHandler(value.title)
                                    }
                                  >
                                    <span className={CSS_CLASSES["nav-title"]}>
                                      {value.title}
                                    </span>
                                    <span
                                      className={CSS_CLASSES["nav-sub-title"]}
                                    >
                                      {value.subTitle}
                                    </span>
                                  </span>
                                )
                              )}
                          </span>
                          <span>
                            <span className="services-heading">
                              BY BUSINESS PROBLEM
                            </span>
                            {Array.isArray(
                              solutionsLinks["BY BUSINESS PROBLEM"]
                            ) &&
                              solutionsLinks["BY BUSINESS PROBLEM"].map(
                                (value) => (
                                  <span
                                    key={value.title}
                                    className={
                                      CSS_CLASSES["nav-inner-container"]
                                    }
                                    onClick={() =>
                                      drawerLinkClickHandler(value.title)
                                    }
                                  >
                                    <span className={CSS_CLASSES["nav-title"]}>
                                      {value.title}
                                    </span>
                                    <span
                                      className={CSS_CLASSES["nav-sub-title"]}
                                    >
                                      {value.subTitle}
                                    </span>
                                  </span>
                                )
                              )}
                          </span>
                        </span>
                      )}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            } else {
              return (
                <Accordion
                  key={label}
                  elevation={0}
                  square
                  expanded={false}
                  sx={{
                    backgroundColor: "transparent",
                    marginBottom: "5px",
                  }}
                >
                  <AccordionSummary expandIcon={""}>
                    <Typography
                      sx={{ fontSize: "20px", fontWeight: 600 }}
                      component="span"
                    >
                      <span
                        key={label}
                        id={label}
                        onClick={() => {
                          drawerLinkClickHandler(label);
                        }}
                      >
                        {label}
                      </span>
                    </Typography>
                  </AccordionSummary>
                </Accordion>
              );
            }
          })}
        </div>
        <div className="flex items-center px-3 gap-x-2.5 ">
          <Image
            src="/images/util/person.svg"
            alt="navbar-profile-icon"
            id="navbar-profile-icon"
            width={50}
            height={50}
            className="bg-primary rounded-full w-12 p-2.5 cursor-pointer flex-shrink-0"
            // onClick={loginHandler}
          />
          <Image
            src="/images/flags/australia.png"
            alt="navbar-country-icon"
            id="navbar-country-icon"
            width={50}
            height={50}
            className="rounded-full w-12 object-contain cursor-pointer flex-shrink-0"
          />
        </div>
      </div>
    </Drawer>
  );
};

export default AppDrawer;
