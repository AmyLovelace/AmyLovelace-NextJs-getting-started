import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Pricing Page Amy´s site",
    description: 'this is a page dedicated to the pricing page for this site',
    authors:{name:"Amy Lovelace"},
    keywords:['pricing','information','Amy Lovelace']
   };
   
function PricingPage() {
    return (
      <>
        <span>Pricing Page</span>
      </>
    )
  }
  
  export default PricingPage;
  
  