/**
 * @func healthController
 * @description The function returns a response from the request to the api
 *
 * @param {Object} req Request Object
 * @param {Object} res Response Object
 *
 * @return {Object} Return res
 */

 const healthController = (req, res) => res.status(200).json({ health: 'OK' });

 /**
  * Export the controllers
  */
 
 module.exports = {
   healthController,
 };
 