import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "About Page Amy´s site",
 description: 'this is a page dedicated to the about page for this site',
 authors:{name:"Amy Lovelace"}
};

function AboutPage() {
    return (
      <main className="flex flex-col items-center p-24">
        <span className="text-7xl">About Page</span>
      </main>
    )
  }
  
  export default AboutPage;
  