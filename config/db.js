/**
 * @file db.js
 * @author Bastian Bastias Sanchez. 
 * @studentID 301242983 
 * @date October 14th 2022.
 * @since  1.1.0
 * @comment the base of this file is a copy from comp229 week6 resources on e.centennial, but this file has been modified to achieve the assigment.
 */

require('dotenv').config();
const URL_DB = process.env.URL_DB;
module.exports =
{
    "URI": URL_DB,
    "Secret": 'SomeSecret'
}