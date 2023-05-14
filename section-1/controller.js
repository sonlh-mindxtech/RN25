const helloHandler = (req, res) => {
    let country = req.query.country
    // sentinel
    if (!country) return res.send("Unable to hello, lack of country")
    if (country == "vn") return res.send("Xin Chao")
    if (country == "en") return res.send("Hello")
    // default logic
    res.send("Invalid Greetings!")
}

export {
    helloHandler
}
