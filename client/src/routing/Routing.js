import { routes } from "./routes";
import { Route, Routes } from "react-router-dom";

export const Routing = () => {
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            key={route.name}
            element={<route.component />}
          />
        ))}
      </Routes>
    </>
  );
};
