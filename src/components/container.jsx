export const Container = ({ children, className }) => {
    return (
        <div className={`container max-w-[1315px] mx-auto ${className}`}>
            {children}
        </div>
    )
}