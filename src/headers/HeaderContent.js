import React from "react"

/** Content for a header */
export default function HeaderContent(props) {
  return (
    <>
      <meta charSet="utf-8" />
      {/* Load Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,700&display=swap"
        rel="stylesheet"
      />

      <title>{props.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <link rel="canonical" href="http://mysite.com/example" /> */}

      {/* Done for initial loading */}
      <style jsx global>
        {`
          body {
            background-color: red;
            margin: 0;
          }
        `}
      </style>
    </>
  );
}
HeaderContent.defaultProps = {
  title: "Robbie Cook",
  backgroundColor: "red"
};
