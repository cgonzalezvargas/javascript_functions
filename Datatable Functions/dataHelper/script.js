export const getColumn = (columns, fieldName) => columns.filter((entry) => entry["fieldName"] === fieldName)[0];

export const sortFlatList = (list, property, direction) => {
    const { propertyName, type } = property;
    //TODO: Add all possible lightning-data-table column "types" to this case statement
    switch (type) {
        case "text":
            return list.sort((a, b) => {
                a = a[propertyName]?.toLowerCase() || "";
                b = b[propertyName]?.toLowerCase() || "";

                if (a === b) return 1;

                if (direction === "asc") {
                    return a > b ? 1 : -1;
                } else {
                    return b > a ? 1 : -1;
                }
            });

        case "caseSensitive":
            return list.sort((a, b) => {
                if (direction === "asc") {
                    return (a[propertyName] || "") > (b[propertyName] || "") ? 1 : -1;
                } else {
                    return (b[propertyName] || "") > (a[propertyName] || "") ? 1 : -1;
                }
            });

        case "date": case "date-local" :
            return list.sort((a, b) => {
                a = Date.parse(a[propertyName]) || 0;
                b = Date.parse(b[propertyName]) || 0;
                if (direction === "asc") {
                    return a - b;
                } else {
                    return b - a;
                }
            });


        case "number":
            return list.sort((a, b) => {
                a = parseFloat(a[propertyName]) || 0;
                b = parseFloat(b[propertyName]) || 0;
                if (direction === "asc") {
                    return a - b;
                } else {
                    return b - a;
                }
            });
    }
};