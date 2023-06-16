
 export const array = ["red", "green", "yellow",];
 
 const logger = function(log, type = TYPE_LOG)
 {   
     console[type](log);
}
export  {logger};

const loop = function(x)
{
    console.log(x + 10);
}
export {loop as vonglap};