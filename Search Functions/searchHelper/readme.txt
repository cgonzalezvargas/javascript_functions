formatStringForSearch function:

This function takes a string as input.
It checks if the input string is a number. If so, it converts it to a string using JSON.stringify.
It then performs a series of operations on the string to format it for search:
Converts the string to lowercase using the toLowerCase method.
Removes line breaks using a regular expression (/(\r\n|\n|\r)/gm).
Removes whitespace characters using the replace method with the regular expression /\\s/g.
The function returns the formatted string or an empty string if the input is not a string.
flatSearch function:

This function takes three parameters: list (an array), searchString (a string), and propsToSearch (an array of strings representing properties to search).
If propsToSearch is provided and has a length greater than 0, the function filters the list array based on the following logic:
It iterates over each listEntry in the list array.
For each listEntry, it iterates over the key-value pairs of the object using Object.entries.
If the key is not included in the propsToSearch array, it continues to the next iteration.
Otherwise, it calls the formatStringForSearch function on the value and the searchString and checks if the formatted value includes the formatted searchString.
If the condition is met, the listEntry is included in the filtered array.
If propsToSearch is not provided or has a length of 0, the function performs a flat search on all properties of each object in the list array:
It uses the map method to iterate over each entry in the list array.
For each entry, it iterates over the values of the object using Object.values.
It calls the formatStringForSearch function on each val and checks if the formatted val includes the formatted searchString.
If the condition is met, the entry is returned in the mapped array.
Finally, it filters out any null values from the mapped array using the filter method.
If an error occurs during execution, it is caught and logged to the console.
chunk function:

This function takes an array arr and a size as input.
It initializes an empty array called result to store the chunks of the input array.
It enters a while loop that continues as long as the arr parameter has elements (i.e., its length is greater than 0).
Inside the loop, it uses the splice method to extract a chunk from the beginning of the arr array and push it to the result array.
The loop continues until all elements of the arr array have been processed and extracted into chunks.
Finally, it returns the result array containing the chunks of the original array.