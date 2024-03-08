import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "About Page Amy´s site",
 description: 'this is a page dedicated to the about page for this site',
 authors:{name:"Amy Lovelace"}
};

function AboutPage() {
    return (
        <span className="text-7xl">About Page</span>
    )
  }
  
  export default AboutPage;
  