import React from "react";
import { ReactComponent as CategoryIcon } from "../Assets/category.svg";
import { ReactComponent as DropDown } from "../Assets/downarrow.svg";
import { Collection } from "Services/collectionServices";
import { products } from "Services/ProductService";

const HeaderNav = () => {
	return (
		<div className="flex justify-between bg-[lightgray] px-[5rem] max-w-[100vw]  items-center">
			<div className="bg-black text-white w-[15rem]">
				<a href="/" className="flex py-[0.5rem] uppercase">
					<CategoryIcon className="w-[24px] h-[24px]  fill-white" />
					<p>categories</p>
				</a>
			</div>
			<div className="flex uppercase justify-between text-[0.9rem] py-[0.5rem] items-center pl-[18rem] absolute">
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
				<a href="/" className="menu py-[0.5rem] mr-2">
					<p className="flex  py-auto">
						mega menu <DropDown className="w-[24px] h-[24px]" />
					</p>
					<div className="megamenu absolute py-10 -ml-20 px-20 mt-2 w-screen flex left-0">
						{Collection.slice(0, 3).map((item) => (
							<a href={item.path}>
								<img
									key={item.id}
									src={item.image}
									alt={item.title}
									className="mr-5"
								/>
							</a>
						))}
					</div>
				</a>
				<a href="/" className="menu py-[0.5rem] mr-2">
					<p className="flex">
						mega menu 2 <DropDown className="w-[24px] h-[24px]" />
					</p>
					<div className="megamenu absolute py-10 -ml-20 px-20 mt-2 w-screen grid grid-cols-4 gap-5 left-0">
						{products.map((item) => (
							<div className="block">
								<a href={item.path}>
									<img
										key={item.id}
										src={item.images[0]}
										alt={item.name}
										className="mr-10 mb-10"
									/>
								</a>
								<p>{item.name}</p>
								<p>
									<b>$</b>
									{item.price}
								</p>
							</div>
						))}
					</div>
				</a>
				<a href="/" className="menu py-[0.5rem] mr-2">
					<p className="flex">
						mega menu 3 <DropDown className="w-[24px] h-[24px]" />
					</p>
					<div className="megamenu absolute py-10 -ml-20 px-20 h-auto mt-2 w-screen flex justify-between left-0">
						{Collection.slice(4, 15).map((item) => (
							<a href={item.path}>
								<img
									key={item.id}
									src={item.image}
									alt={item.title}
									className="mr-5"
								/>
							</a>
						))}
					</div>
				</a>
			</div>
		</div>
	);
};

export default HeaderNav;
