import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Page Amy´s site",
    description: 'this is a page dedicated to the contact page for this site',
    authors:{name:"Amy Lovelace"},
    keywords:['contact','information','Amy Lovelace']
   };
function ContactPage() {
    return (
      <>
        <span>Contact Page</span>
      </>
    )
  }
  
  export default ContactPage;
  
  