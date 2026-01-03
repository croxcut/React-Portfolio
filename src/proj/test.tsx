import { Profile } from "./profile";

export const USER_PROFILES = [
    new Profile({
        id: 1,
        name: 'John Paul',
        description: 'Person',
        is_active: true
    }),
    new Profile({
        id: 2,
        name: 'Julliah paran',
        description: 'A bitch',
        is_active: false
    }),
];

function TestPage() {
    return (
        <>
            <pre>
                {JSON.stringify(USER_PROFILES, null, ' ')}
            </pre>
        </>
    );
}   

export default TestPage;