import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Pricing Page Amy´s site",
    description: 'this is a page dedicated to the pricing page for this site',
    authors:{name:"Amy Lovelace"},
    keywords:['pricing','information','Amy Lovelace']
   };
   
function PricingPage() {
    return (
      <main className="flex flex-col items-center p-24">
      <span className="text-7xl">Pricing Page</span>
      </main>  
    )
  }
  
  export default PricingPage;
  
  