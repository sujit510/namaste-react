import { createContext } from 'react';

const UserContext = createContext({
    user: {
        // Initial Values
        // name: 'Dummy Name',
        // email: 'dummy.name@email.com'
    },
})

// For debugging. Has no impact on App
UserContext.displayName = "UserContext";

export default UserContext;