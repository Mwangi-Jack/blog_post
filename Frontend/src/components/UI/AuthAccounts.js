
function AuthAccounts() {
	return (
		<div className="flex justify-center space-x-10 my-10">
			<div className="border w-16 h-8 flex justify-center py-1 rounded cursor-pointer border-[#7C4EE4]">
				<img src="/static/images/fb.png" alt="Facebook" />
			</div>
			<div className="border w-16 h-8 flex justify-center py-1 rounded cursor-pointer border-[#7C4EE4]">
				<img src="/static/images/google.png" alt="Google" />
			</div>
			<div className="border w-16 h-8 flex justify-center py-1 rounded cursor-pointer border-[#7C4EE4]">
				<img src="/static/images/mac.png" alt="Mac" />
			</div>
		</div>
	);
}

export default AuthAccounts;
