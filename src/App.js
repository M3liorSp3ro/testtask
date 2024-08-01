import { Header } from "@entities/header";
import { ApartmentCalc } from "@features/apartmentСalc";
import { EvaluationResult } from "@features/evaluationResult";
import { Footer } from "@entities/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ApartmentCalc />
      <EvaluationResult />
      <Footer />
    </div>
  );
}

export default App;
