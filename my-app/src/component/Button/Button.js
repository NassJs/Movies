export const Button = ({ children, onClick }) => {
    return (
        <button className="bg-red-500" classNameonClick={onClick}>
            {children}
        </button>
    )
}