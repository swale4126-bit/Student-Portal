function Card({ title, children, className = "" }) {
    return (
        <div className={`bg-white shadow-md rounded-xl p-6 ${className}`}>

            {/* If title exists, show header */}
            {title && (
                <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                    {title}
                </h3>
            )}

            {children}

        </div>
    );
}

export default Card;