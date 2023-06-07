getColumn function:

This function takes two parameters: columns (an array of objects) and fieldName (a string).
It uses the filter method to filter the columns array based on the condition provided in the arrow function.
The arrow function checks if the value of the "fieldName" property in each object of columns is equal to the fieldName parameter.
The filtered array is then accessed with [0] to retrieve the first matching object.
The function returns this object as the output, representing the column with the specified field name.
sortFlatList function:

This function takes three parameters: list (an array), property (an object), and direction (a string).
The property object contains two properties: propertyName (a string) and type (a string representing the type of the property).
The function uses a switch statement to handle different types of properties.
For each case, the function performs a specific sorting operation on the list array.
The sorting is done using the sort method of arrays, with a custom sorting function provided as an argument.
The sorting function compares the values of the propertyName property in each object of the list array.
The comparison and sorting behavior differ based on the type and direction parameters.
The sorted array is then returned as the output of the sortFlatList function.
To summarize, the getColumn function filters an array of objects to retrieve the object with a specific field name. The sortFlatList function sorts an array of objects based on a property specified by its name, type, and sorting direction. The sorting behavior varies depending on the property type, such as text, case-sensitive text, date, or number.