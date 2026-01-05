import { Profile } from "./profile";
import styles from "./test.module.css";

export const USER_PROFILES = [
    new Profile({
        id: 1,
        name: 'John Paul',
        description: 'Person',
        is_active: true
    }),
    new Profile({
        id: 2,
        name: 'Evil bitch',
        description: 'An evil bitch',
        is_active: false
    }),
];

type TestPageProps = {
  user: Profile;
};

function TestPage({ user }: TestPageProps) {
  const handle_click = (name: string) => {
    console.log(`${name}`);
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className= {styles.header}>Hello, {user.name}</h1>
        <pre className= {styles.description}>
            Description: {user.description}
        </pre>
        <button className={styles.button} onClick={() => handle_click(user.name)}>Click me</button>
      </div>
    </>
  );
}

export default TestPage;