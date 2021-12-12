export const data = {
    table1: [{ date: "2016-01-01", name: "Tom", address: "No 189, Grove St, Los Angeles" },
    { date: "2018-01-01", name: "Ron", address: "No 222, Pool St, Denver" },
    { date: "2012-06-03", name: "Dubi", address: "No 130, Franklin St, New York" }],
    table2: [{ date: "2016-01-01", name: "Tom", address: "No 189, Grove St, Los Angeles" },
    { date: "2018-01-01", name: "Ron", address: "No 222, Pool St, Denver" },
    { date: "2012-06-03", name: "Dubi", address: "No 130, Franklin St, New York" }]
}


export const parseDate = () => {
    const date = (new Date()).toISOString()
    const parsedDate = date.slice(0, date.indexOf("T"))
    return parsedDate
}


export const filteringData = {
    table1: { date: true, name: true, address: true },
    table2: { date: true, name: true, address: true },
}


export const searchForMatch = (userObj, val) => {
    const fields = Object.keys(userObj)

    const exist = fields.some(el => userObj[el].toLowerCase().includes(val.toLowerCase()))
    return exist
}


export const filterTable = (userObj, searchQuery, showRightSide) => {
    let isFiltered
    if (!searchQuery.length || !showRightSide) {
        isFiltered = true
    } else {
        isFiltered = searchForMatch(userObj, searchQuery)
    }

    return isFiltered
}