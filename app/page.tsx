 
import Contacts from "./pages/Contacts";
import Navbar from "./pages/Navbar";
import Services from "./pages/Services";
import Slider from "./pages/Slider";
import SocialMedia from "./pages/SocialMedia";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Slider/>
      <Services/>
      <SocialMedia/>
      <Contacts/>
    </>
  );
}
