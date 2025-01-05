import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainContextProvider from "../../Providers/MainContextProvider";

function BasicPage() {
  return (
    <div className="basic-page">
      <Header />
      <main>
        <MainContextProvider>
          <Outlet />
        </MainContextProvider>
      </main>
      <Footer />
    </div>
  );
}
export default BasicPage;
