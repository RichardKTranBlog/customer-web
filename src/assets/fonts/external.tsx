import { Global } from "@emotion/react";

export const ExternalFonts = () => (
  <Global
    styles={`
    @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;1,200;1,300;1,400;1,600;1,700;1,800&display=swap");
  `}
  />
);
