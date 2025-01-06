import type { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.VITE_GRAPHQL_RAVN_API as string,
  documents: "src/gql/**/*.graphql",
  generates: {
    "src/gql/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
