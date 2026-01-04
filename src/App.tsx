import TestPage, { USER_PROFILES } from "./components/test";

function App() {
  return (
    <>
      <TestPage user={USER_PROFILES[0 ]}></TestPage>
      <TestPage user={USER_PROFILES[1]}></TestPage>
    </>
  )
}

export default App;