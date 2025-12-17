import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title = "Bawa Khan Design Studio",
  description = "Architectural & Construction Design Services in Bahawalnagar, Punjab, Pakistan.",
  keywords = "Bawa Khan Design Studio, architect, Bahawalnagar, construction design, interior design, house design",
  canonical = "https://bawakhandesignstudio.com/",
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
  twitterCard = "summary_large_image",
}) => {
  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Bawa Khan Design Studio" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Bawa Khan Design Studio" />
      <meta property="og:locale" content="en_PK" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={ogUrl || canonical} />
      <meta
        property="og:image"
        content={ogImage || "https://bawakhandesignstudio.com/chrome512.png"}
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta
        name="twitter:image"
        content={ogImage || "https://bawakhandesignstudio.com/chrome512.png"}
      />
    </Helmet>
  );
};

export default SEO;
