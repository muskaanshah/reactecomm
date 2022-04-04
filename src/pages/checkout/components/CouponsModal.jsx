import { useState, useEffect } from "react";
import { couponsAvailable } from "../../../data/couponsAvailable";

function CouponsModal({
	totalPriceBeforeCoupon,
	setCouponDiscount,
	setCouponModal,
}) {
	const [codeInput, setCodeInput] = useState("");
	const [notApplicable, setNotApplicable] = useState(false);
	const applyCoupon = () => {
		const temp = couponsAvailable.find((item) => item.code === codeInput);
		if (!temp) {
			setNotApplicable("No such coupon!");
		} else if (temp.minimumPrice > totalPriceBeforeCoupon) {
			const differenceForCodeToBeApplied = Math.ceil(
				temp.minimumPrice - totalPriceBeforeCoupon
			);
			setNotApplicable(
				`This coupon is not for you! Add items worth ₹${differenceForCodeToBeApplied} to use this coupon`
			);
		} else {
			if (temp.discount) {
				setCouponDiscount(temp.discount);
			}
			if (temp.discountPercentage) {
				setCouponDiscount(
					Math.floor(totalPriceBeforeCoupon / (100 / temp.discountPercentage))
				);
			}
			setCouponModal(false);
		}
	};
	const availableCouponsLength = couponsAvailable.filter(
		(coupon) => coupon.minimumPrice <= totalPriceBeforeCoupon
	);
	const notAvailableCouponsLength = couponsAvailable.filter(
		(coupon) => coupon.minimumPrice > totalPriceBeforeCoupon
	);
	useEffect(() => {
		document.body.classList.add("scrollBehaviour");
		return () => {
			document.body.classList.remove("scrollBehaviour");
		};
	}, []);
	return (
		<div className="coupons-modal-wrapper">
			<div className="coupons-modal p-1 br-0-5 bg-white">
				<div className="coupons-modal-header">
					<p className="fw-500">APPLY COUPON</p>
					<span
						className="material-icons-outlined"
						onClick={() => setCouponModal(false)}
					>
						close
					</span>
				</div>
				<div className="divider-black"></div>
				<div className="mt-1-5 coupons-modal-header mb-1">
					<input
						type="text"
						placeholder="Enter coupon code"
						className="input-couponcode"
						value={codeInput}
						onChange={(e) => setCodeInput(e.target.value)}
					/>
					<button
						className="btn border-primary color-primary p-0-5 py-0"
						onClick={() => applyCoupon()}
					>
						APPLY
					</button>
				</div>
				<p className="color-danger my-0-5">{notApplicable}</p>
				{availableCouponsLength.length !== 0 && (
					<>
						<p className="my-0 fw-600">Coupons applicable for you:</p>
						{couponsAvailable.map(
							(coupon) =>
								coupon.minimumPrice <= totalPriceBeforeCoupon && (
									<div
										className="coupon-code-wrapper px-1"
										onClick={() => {
											setCodeInput(coupon.code);
											setNotApplicable("");
										}}
									>
										<p className="color-primary fw-600 coupon-code px-0-5">
											{coupon.code}
										</p>
										<p>{coupon.description}</p>
									</div>
								)
						)}
					</>
				)}
				{notAvailableCouponsLength.length !== 0 && (
					<>
						<p className="mb-0 mt-1-5 fw-600">Coupons not applicable:</p>
						{couponsAvailable.map(
							(coupon) =>
								coupon.minimumPrice > totalPriceBeforeCoupon && (
									<div className="coupon-code-wrapper-notapplicable px-1">
										<p className="color-primary fw-600 coupon-code px-0-5">
											{coupon.code}
										</p>
										<p>{coupon.description}</p>
									</div>
								)
						)}
					</>
				)}
			</div>
		</div>
	);
}

export { CouponsModal };
