import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ManageFoods from "./ManageFoods";



const queryClient = new QueryClient();

const ParentComponent = () => {
  return (
    
    <QueryClientProvider client={queryClient}>
      <ManageFoods />
    </QueryClientProvider>
  );
};

export default ParentComponent;
