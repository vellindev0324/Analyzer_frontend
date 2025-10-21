
export const sortbyObject = (countryCounts) =>{
    const sortedEntries = Object.entries(countryCounts) // [["us",5],["argentina",3],["columbia",2]]
    .sort((a, b) => b[1] - a[1]); // sort by value (descending)

    const sortedObject = Object.fromEntries(sortedEntries);
    return sortedObject
}