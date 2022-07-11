import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout/AppContent";
import ROUTES from "./Routes";

const Spinner = () => <div className="w-full flex items-center justify-center">loading...</div>;

function App() {
  return (
    <AppLayout>
      <Suspense fallback={<Spinner />}>
        <Routes>
          {Object.values(ROUTES).map((route, index) => {
            return <Route {...route} element={<route.element />} key={index} />;
          })}
        </Routes>
      </Suspense>
    </AppLayout>
  );
}

export default App;
