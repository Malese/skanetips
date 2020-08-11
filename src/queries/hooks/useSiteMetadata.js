import { useStaticQuery, graphql } from "gatsby";

/**
 *  title
 *  siteUrl
 *  headline
 *  description
 *  image
 *  video
 *  twitter
 *  name
 *  logo
 */

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
