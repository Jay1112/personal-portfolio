function TitleStripe({
    title
}){
    return (
        <div className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 p-4">
            <p className="text-2xl tracking-wider poppins text-white font-semibold">{title}</p>
        </div>
    );
}

export default TitleStripe;