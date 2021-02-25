const proxy = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        proxy("/createFA", {
            target: "http://localhost:8080/online_investment_banking",
            secure=false,
            changeOrigin = true
        })
    );

   
}
