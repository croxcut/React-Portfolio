import TestPage, { USER_PROFILES } from "./components/test";
import styles from "./app.module.css" 


function App() {
  return (
    <>
      <div className={styles.body}>
        <TestPage user={USER_PROFILES[0]}></TestPage>
        <TestPage user={USER_PROFILES[1]}></TestPage>
      </div>
    </>
  )
}

export default App;