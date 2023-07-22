import { queryMerchant } from "../services/merchant.service.js";


const merchantHandler = async (req, res) => {
	const merchants = await queryMerchant({})
	res.status(200).json({
		"message": "success",
		"merchants": merchants
	})
}

export { merchantHandler }

