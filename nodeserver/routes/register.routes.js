module.exports = app => {
    const register = require("../service/register.service.js");
  
    // sendEmail
    app.post("/sendEmail", (req, res) => {

        if (!req.body) {
            res.status(400).send({
              message: "Content can not be empty!"
            });
          }

          register.sendMail(req.body.emailAddress, (err, data) => {
              if(err)
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Customer."
              });
              else res.send(data);
          });


    });
  
    // // Retrieve all Customers
    // app.get("/customers", customers.findAll);
  
    // // Retrieve a single Customer with customerId
    // app.get("/customers/:customerId", customers.findOne);
  
    // // Update a Customer with customerId
    // app.put("/customers/:customerId", customers.update);
  
    // // Delete a Customer with customerId
    // app.delete("/customers/:customerId", customers.delete);
  
    // // Create a new Customer
    // app.delete("/customers", customers.deleteAll);
  };