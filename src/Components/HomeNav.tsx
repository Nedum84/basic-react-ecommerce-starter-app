import React from "react";
import { ReactComponent as PhoneIcon } from "../Assets/phone.svg";
import { ReactComponent as ClockIcon } from "../Assets/clock.svg";
import { ReactComponent as DropDown } from "../Assets/downarrow.svg";

const HomeNav = () => {
	return (
		<div className="flex text-sm text-[gray] flex-cols justify-between mb-[2rem] mt-[.5rem]">
			<div className="flex">
				<div className="flex justify-center items-center pr-5">
					<PhoneIcon className="w-[20px] h-[20px]" />
					<p>Call Us:800-123-4567</p>
				</div>
				<div className="flex justify-center items-center">
					<ClockIcon className="w-[20px] h-[20px]" />
					<p>Mon-Sun: 9:00 am - 6:00 pm</p>
				</div>
			</div>
			<div className="flex">
				<span className="flex justify-between mr-4 border-r-[1px] border-[gray]">
					<a href="#" className="px-4">
						Register or sign In
					</a>
					<a href="#" className="px-4">
						Client services
					</a>
				</span>
				<div className="flex">
					<p className="flex">
						USD($) <DropDown className="w-[24px] h-[24px]" />
					</p>
					<p className="flex">
						English <DropDown className="w-[24px] h-[24px]" />
					</p>
				</div>
			</div>
		</div>
	);
};

export default HomeNav;
