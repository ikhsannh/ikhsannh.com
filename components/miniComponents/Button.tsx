interface ButtonProps {
    text: string;
}


const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        // onClick={event => event.target.innerText = 'You touched me!'}
        >
        
        {text}
        </button>
    );
}
export default Button