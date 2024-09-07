
function Button({text, bg}) {
	return (
		<button className={`border px-2 py-1 rounded bg-[${bg}] ${bg === '#FFFFFF' ? 'text-black' : 'text-white'} text-xl font-medium`}>{text}</button>
	)
}

export default Button;
