import React from "react";
import { ReactComponent as CategoryIcon } from "../Assets/category.svg";
import { ReactComponent as DropDown } from "../Assets/downarrow.svg";

const HeaderNav = () => {
	return (
		<div className="flex justify-between bg-[lightgray] px-[5rem] max-w-[100vw] items-center relative">
			<div className="bg-black text-white w-[15rem] py-[0.5rem]">
				<a href="/" className="flex uppercase">
					<CategoryIcon className="w-[24px] h-[24px] fill-white" />
					<p>categories</p>
				</a>
			</div>
			<div className="flex uppercase justify-between text-[0.9rem] items-center pl-[18rem] absolute">
				<a href="/" className="mr-2">
					<p>about</p>
				</a>
				<a href="/" className="mr-2">
					<p>delivery</p>
				</a>
				<a href="/" className="mr-2">
					<p>payment</p>
				</a>
				<a href="/" className="mr-2">
					<p>contacts</p>
				</a>
				<a href="/" className="mr-2">
					<p className="flex">
						mega menu <DropDown className="w-[24px] h-[24px]" />
					</p>
				</a>
				<a href="/" className="mr-2">
					<p className="flex">
						mega menu 2 <DropDown className="w-[24px] h-[24px]" />
					</p>
				</a>
				<a href="/" className="mr-2">
					<p className="flex">
						mega menu 3 <DropDown className="w-[24px] h-[24px]" />
					</p>
				</a>
			</div>
		</div>
	);
};

export default HeaderNav;
