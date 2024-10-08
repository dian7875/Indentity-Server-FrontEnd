import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
import Routes from "./Routes";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Routes} />
      </QueryClientProvider>
    </>
  );
}

export default App;
