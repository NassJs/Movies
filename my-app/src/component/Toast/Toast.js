// import { useState, useContext, createContext, useMemo } from "react"


// export const ToastContext = createContext();

// export const ToastProvider = ({ children }) => {
//     const [active, setActive] = useState(false);

//     // const value = useMemo(() => {
//     //     active, setActive
//     // }, [])

//     return (
//         <ToastContext.Provider value={{ active, setActive }}>
//             {children}
//         </ToastContext.Provider>
//     )
// }

// export const useToast = () => {
//     const [active, setActive] = useContext(ToastContext);
//     console.log("active", active)
//     const res = { setActive }
//     return res;
// }

export const Toast = ({ children, variant }) => {

    return (
        <div className={variant}>{children}</div>
    )
}