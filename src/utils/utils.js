export const data = {
    table1: [],
    table2: []
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