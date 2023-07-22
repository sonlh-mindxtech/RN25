const orderHandler = (req, res) => {
    res.json({
        "message":"Order accepted."
    })
    console.log(req.user_info)
}
export {
    orderHandler
}
