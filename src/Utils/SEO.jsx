import { Helmet } from "react-helmet";

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      {/* optional but good */}
      <meta name="author" content="Your Name" />
      <meta name="robots" content="index, follow" />
      {/* Open Graph (Facebook) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;