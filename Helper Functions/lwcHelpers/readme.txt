proxyTool:

This function takes an obj as input.
If the obj is of type object, it uses JSON.stringify and JSON.parse to create a deep copy of the object and return it.
This function is useful for creating copies of objects to avoid unintentional mutation.
getMPIRootElement:

This function takes a json string as input.
If the json is a string, it parses it into an object using JSON.parse.
It filters the object's values to remove any null values and assigns the filtered values to the list variable.
If the list has a length of 1, it assigns the first element of the first item in the list to the root variable.
Finally, it returns the root.
uniqueVals:

This function takes two parameters: list (an array) and uniqueProperty (a property to filter against).
If the list has a length greater than 0, it initializes an empty array called result to store the unique records.
It creates a Map object called map to keep track of unique values based on the uniqueProperty.
It iterates over each item in the list.
If the item exists and the map doesn't have the value of the uniqueProperty for the item, it adds the value to the map and pushes a shallow copy of the item to the result array.
Finally, it returns the result array containing the unique records.
properCase:

This function takes a string as input.
If the string is not of type string, it returns an empty string.
It capitalizes the first character of the string using charAt(0).toUpperCase() and converts the rest of the string to lowercase using slice(1).toLowerCase().
Finally, it returns the modified string.
upperCase:

This function is similar to properCase, but it converts the entire string to uppercase.
lowerCase:

This function is similar to properCase, but it converts the entire string to lowercase.
daysBetween:

This function takes two dates, firstDate and secondDate, as input.
It calculates the difference in days between the two dates using the abs function and the following formula: Math.ceil(Math.abs(secondDate - firstDate) / (1000 * 60 * 60 * 24)) - 1.
Finally, it returns the number of days between the dates.
uniqueId:

This function generates a unique ID by combining the current time (Date.now()) with a randomly generated number (Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)).
The generated ID is returned as a string.
groupBy:

This function takes an array arr and an enumProperty as input.
It reduces the array into a JavaScript object where each property is an array based on the incoming enumProperty.
It iterates over each element in the arr array and checks if the property enumProperty exists in the object being accumulated.
If the property does not exist, it creates an empty array for that property.
It pushes the current element to the array associated with the enumProperty.
Finally, it returns the resulting JavaScript object.
getJsDateFromDateTime:

This function takes a dateTimeValue as input, which represents a number like 3041029.0026 where 304 is the number of years since 1970.
It converts the dateTimeValue to a string with 4 decimal places ((dateTimeValue * 10000).toFixed() + '').
It extracts the year, month, day, hours, and minutes from the string representation of the dateTimeValue.
Using the extracted values, it creates a new Date object and returns it.
dateToDateTime:

This function takes a JavaScript jsDate object as input.
It defines the options object for formatting the date and time in a specific format.
It uses the toLocaleString method with the 'en-US' locale and the options object to format the jsDate as a string.
Finally, it returns the formatted date string.
search:

This function takes four parameters: searchString, columns, array, and forEachMatch.
If array, columns, and forEachMatch are of the expected types (array, array, and function, respectively), it iterates over the array.
For each element in the array, it iterates over the columns.
If the element's property specified by the fieldName in the columns matches the searchString, it invokes the forEachMatch function.
The purpose of this function is to search through an array of objects (array) based on specific columns (columns) and perform an action (forEachMatch) for each matching object.
compare:

This function is a compare function to be used in the Array.sort() method.
It takes two parameters, a and b, and performs a series of checks and comparisons.
The function trims and checks the strings a and b for empty, null, or undefined values.
If both strings are empty, null, or undefined, it returns 0.
If only a is empty, null, or undefined, it returns -1.
If only b is empty, null, or undefined, it returns 1.
If both a and b are either 'true' or 'false', it compares them and returns the result.
Otherwise, it performs a default comparison using the a === b ? 0 : (a > b ? 1 : -1) expression.
The purpose of this function is to provide a comparison function for sorting arrays.
formatDateHDR:

This function takes a dateString as input, which represents a date in a specific format.
It splits the dateString into the year, month, day, and time components.
It creates a dateObject that contains various formats of the date and time for display.
It converts the year, month, and day components to numbers and assigns them to the corresponding properties of the dateObject.
It creates a fullDate object by passing the year, month (minus 1), day, hour, and minute components to the Date constructor.
It extracts the time zone from the fullDate object and assigns it to the timeZone property of the dateObject.
It formats the time component of the fullDate object using the toLocaleString method and assigns it to the time property of the dateObject.
It calculates the milliseconds since January 1, 1970, for the fullDate object and assigns it to the timeMilliSeconds property of the dateObject.
It formats the date component of the fullDate object using the toDateString method and assigns it to the date property of the dateObject.
It converts the fullDate object to an ISO date string and assigns it to the isoDate property of the dateObject.
It converts the fullDate object to an ISO string and assigns it to the isoString property of the dateObject.
It creates a dateTimeString by combining the date and time components of the fullDate object and assigns it to the dateTimeString property of the dateObject.
Finally, it returns the dateObject.
These utility functions provide various functionalities such as object manipulation, string formatting, date handling, sorting, searching, and more. They can be used to perform common operations in JavaScript development