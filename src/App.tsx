import Intro from "./components/Intro/Intro";
import Packages from "./components/Packages/Packages";
import Footer from "./components/Footer/Footer";
import Format from "./components/Format/Format";
import Header from "./components/Header/Header";
import Installment from "./components/Installment/Installment";
import Syllabus from "./components/Syllabus/Syllabus";

function App() {

  return (
    <>
      <Header />
      <main>
        <Intro />
        <Syllabus />
        <Packages />
        <Format />
        <Installment />
      </main>
      <Footer />
    </>
  )
}

export default App
