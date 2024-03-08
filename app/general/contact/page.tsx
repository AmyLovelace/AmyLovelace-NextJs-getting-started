import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Page Amy´s site",
    description: 'this is a page dedicated to the contact page for this site',
    authors:{name:"Amy Lovelace"},
    keywords:['contact','information','Amy Lovelace']
   };
function ContactPage() {
    return (
      <main className="flex flex-col items-center p-24">
        <span className="text-7xl">Contact Page</span>
      </main>  
    )
  }
  
  export default ContactPage;
  
  