const { useContext, createContext, useState, useEffect } = require("react")

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ""
    })

    useEffect(() => {
        const data = localStorage.getItem('auth');
        if (data) {
            const parseData = JSON.parse(data);
            setAuth({
                ...auth,
                user: parseData.user,
                token: parseData.token,
            })
        }
        //eslinst-disable-next-line
    }, [])

    return (
        <AuthContext.Provider value={[auth, setAuth]} >
            {children}
        </AuthContext.Provider >
    )
}

//custom hooks
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider }