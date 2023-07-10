/**
 *
 *  This is the page's meta data and tab settings
 *
 */

import { useRouter } from "next/router";

import Head from "next/head";

import {
  INDEX_KWS,
  INFO_KWS,
  CONTACT_KWS,
  PETTING_ZOO_KWS,
  PRODUCTS_KWS,
} from "@/assets/data/variables/ARRAYS";

export const PageHead = () => {
  const router = useRouter();

  //! Descriptions
  const INDEX_DESC =
    "Discover local NC farms, dairy products, fresh produce, and staple crops at Farmyard.com. Experience a petting zoo with animals from North Carolina farms. Support the vibrant farming community in North Carolina.";
  const INFO_DESC =
    "Explore the farmyard background and rich history at Farmyard.com. Learn about us and discover our story. Gain insights into our background and learn more about the Farmyard experience.";
  const CONTACT_DESC =
    "Contact Farmyard.com for assistance and support. Get in touch with our customer service team for help and inquiries. Reach Farmyard easily and receive excellent customer support.";
  const PRODUCTS_DESC =
    "Discover a wide range of farmyard products at Farmyard.com. Explore our selection of farmyard produce, dairy, and staple crops. Find high-quality dairy products, fresh produce, and staple crop products sourced directly from our dairy farms, produce farms, and staple crop farms.";
  const PETTING_ZOO_DESC =
    "Experience the joy of a farmyard petting zoo at Farmyard.com. Visit our local petting zoo in North Carolina (NC) and have the opportunity to touch and feed adorable animals. Enjoy an interactive and memorable animal encounter at our NC petting zoo.";

  const DESCS = [
    INDEX_DESC,
    INFO_DESC,
    CONTACT_DESC,
    PRODUCTS_DESC,
    PETTING_ZOO_DESC,
  ];

  let desc;
  let kws;
  let title;
  let robots;
  let url;

  // Index Page
  if (router.pathname == "/") {
    title = "farmyard - Local NC Farms";
    robots = "index, follow";
    url = router.pathname;

    if (INDEX_DESC.length > 0) {
      desc = DESCS[0];
    } else {
      desc = DESCS[0];
    }

    kws = INDEX_KWS;
  }

  // Info Page
  if (router.pathname == "/info") {
    title = "farmyard - About Us";
    robots = "index, follow";
    url = router.pathname;

    if (INFO_DESC.length > 0) {
      desc = DESCS[1];
    } else {
      desc = DESCS[1];
    }

    kws = INFO_KWS;
  }
  // Contact Page
  if (router.pathname == "/contact") {
    title = "farmyard - Contact Us";
    robots = "index, follow";
    url = router.pathname;

    if (CONTACT_DESC.length > 0) {
      desc = DESCS[2];
    } else {
      desc = DESCS[2];
    }

    kws = CONTACT_KWS;
  }

  // Products Page
  if (router.pathname == "/products") {
    title = "farmyard - Our Products";
    robots = "index, follow";
    url = router.pathname;

    if (PRODUCTS_DESC.length > 0) {
      desc = DESCS[3];
    } else {
      desc = DESCS[3];
    }

    kws = PRODUCTS_KWS;
  }

  // Products Page
  if (router.pathname == "/petting_zoo") {
    title = "farmyard - Petting Zoo";
    robots = "index, follow";
    url = router.pathname;

    if (PETTING_ZOO_DESC.length > 0) {
      desc = DESCS[4];
    } else {
      desc = DESCS[4];
    }

    kws = PETTING_ZOO_KWS;
  }

  // 404 Page
  if (router.pathname == "/404") {
    title = "farmyard - 404";
    robots = "no index, no follow";
    desc = "No description";
    kws = "No keywords";
    url = router.pathname;
  }

  return (
    <Head id="pageHead">
      <title>{title}</title>

      <meta name="keywords" content={kws} />
      <meta name="description" content={desc} />
      <meta name="robots" content={robots} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:url" content={url} />
      {/**
        <meta
        name="google-site-verification"
        content="V5Rtva_ZUQGbD75j-mxlBzvediiQnPt2hEi7YaPPAEE"
      />
        */}

      <link rel="canonical" href={url} />

      <link
        rel="shortcut icon"
        href="https://raw.githubusercontent.com/mxrked/farmyard_CDN/master/icons/tab-icons/favicon.ico"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://raw.githubusercontent.com/mxrked/farmyard_CDN/master/icons/tab-icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://raw.githubusercontent.com/mxrked/farmyard_CDN/master/icons/tab-icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://raw.githubusercontent.com/mxrked/farmyard_CDN/master/icons/tab-icons/favicon-16x16.png"
      />
    </Head>
  );
};
