const express=require('express');
const path=require('path');
module.exports=path.dirname(require.main.filename);
//this extra is created as in all other js file there is already a export part if we write it there error will be there 