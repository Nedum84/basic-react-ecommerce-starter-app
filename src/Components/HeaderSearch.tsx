import React from "react";
import { ReactComponent as LogoIcon } from "../Assets/logo.svg";
import { ReactComponent as SearchIcon } from "../Assets/search.svg";
import { ReactComponent as WishIcon } from "../Assets/wishlist.svg";
import { ReactComponent as CompareIcon } from "../Assets/compare.svg";
import { ReactComponent as CartIcon } from "../Assets/bag.svg";

const HeaderSearch = () => {
	return (
		<div className="flex justify-between items-center">
			<LogoIcon className="w-[64px] h-[27px]" />
			<form action="submit" className="flex">
				<label htmlFor="search"></label>
				<div className="flex items-center mr-4">
					<input
						type="text"
						placeholder="Search products..."
						className="border py-[.4rem] text-xs pl-[28px] hover:placeholder-black pr-[15rem] outline-none"
					/>
					<SearchIcon className="w-[24px] h-[24px] mx-[5px] px-[2px] fill-[gray] absolute" />
				</div>
				<button className="border border-black text-sm text-black px-[1.2rem] py-[0.3rem] hover:bg-black hover:text-white transition uppercase">
					search
				</button>
			</form>
			<div className="flex justify-between">
				<WishIcon className="w-[24px] h-[24px]" />
				<CompareIcon className="w-[24px] h-[24px]" />
				<span className="flex">
					<CartIcon className="w-[24px] h-[24px]" />
					bag(0)
				</span>
			</div>
		</div>
	);
};

export default HeaderSearch;
