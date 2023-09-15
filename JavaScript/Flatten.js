function flatten(value) {
  // When the value is primitive type
  // null is also object type
  if (typeof value!=='object' || value===null){
    return value
  }

  // When the value is an array
  if (Array.isArray(value)){
    return flattenArray(value);
  }

  // When the value is an object
  return flattenObject(value)
}

function flattenArray(array){
  return array.reduce((flattenArr,currVal)=> flattenArr.concat(flatten(currVal)),[]); // [] is the initial value
}


function flattenObject(obj) {
  const flattenObj = {};
  // Iterate the object
  for (const [key,value] of Object.entries(obj)){
    // First we check whether the value itself is an object or not
    const valueIsObject = typeof value === 'object' && value!==null && !Array.isArray(value);
    // Now we flatten the value for any of the type
    flattenVal = flatten(value);

    if (valueIsObject){
      // We add the flatten value [key, value pair] to the object
      Object.assign(flattenObj, flattenVal);   // Add all the key value pair of flattenVal to the flattenObj
    }else{
      flattenObj[key] = flattenVal; // Add primitive value , array etc
    }
  }
  return flattenObj
}

// Do not edit the line below.
exports.flatten = flatten;
