import { LuListFilter } from "react-icons/lu";
import { IoIosCheckmark } from "react-icons/io";

function Filter({ handleCheck, categories }) {
	return (
		<div className="mx-10 flex  space-x-4">
		<LuListFilter size={25} />
		<div className="flex flex-wrap gap-2">
			{categories.map((category, key) => (
				<button
					key={category.id}
					name={category.name}
					className={` flex items-center space-x-4 text-sm font-Montserrat px-2 py-0 border rounded-lg focus:outline-none transition-colors
						${category.isCheck ? 'bg-[#7C4EE4] text-white ' : 'bg-gray-200'}`}
					onClick={(e) => handleCheck(category.id, e)}
					>
					{category.name}
					<IoIosCheckmark className={category.isCheck ? 'fles': 'hidden'} />
				</button>
			))}
		</div>

	</div>
	)
}

export default Filter;
