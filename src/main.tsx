import { UserProfileProvider } from "@/context/UserProfileContext";
import Router from "@/routes/Router";
import { client } from "@/services/apollo";
import { ApolloProvider } from "@apollo/client";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <UserProfileProvider>
      <Toaster richColors />
      <Router />
    </UserProfileProvider>
  </ApolloProvider>,
);
