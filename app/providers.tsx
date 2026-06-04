"use client";

import { ApolloProvider } from "@apollo/client/react";
import client from "@/services/apollo";

type ProvidersProps = {
  children: React.ReactNode;
};

export function ApolloClientProviders({ children }: ProvidersProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
