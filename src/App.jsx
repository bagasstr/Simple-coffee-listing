import CollectionPage from "./components/organisms/CollectionPage";
import TabsContextProvider from "./utils/context/TabActive";

export default function App() {
  return (
    <>
      <TabsContextProvider>
        <CollectionPage />
      </TabsContextProvider>
    </>
  );
}
