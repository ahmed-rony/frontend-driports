import { ProSidebarProvider } from "react-pro-sidebar";
import React from "react";
import Routes from "./Routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "utils/Reducers/AuthReducer";
import { VehicleProvider } from "utils/Reducers/VehicleReducer";
import { DriverProvider } from "utils/Reducers/DriverReducer";
import { RegProvider } from "utils/Reducers/RegReducer";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RegProvider>
        <AuthProvider>
          <VehicleProvider>
            <DriverProvider>
              <ProSidebarProvider>
                <Routes />
              </ProSidebarProvider>
            </DriverProvider>
          </VehicleProvider>
        </AuthProvider>
      </RegProvider>
    </QueryClientProvider>
  );
}

export default App;
