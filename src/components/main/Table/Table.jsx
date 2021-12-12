import { useContext } from 'react';
import { UsersContext } from "../../../context/UserAppContext"
import { filterTable } from "../../../utils/utils"
import './Table.scss';

const Table = ({ tableId, showRightSide }) => {

    const { users, searchQuery, checkboxData } = useContext(UsersContext)

    const tableContent = users[tableId].filter((userObj) => filterTable(userObj, searchQuery, showRightSide)).map(({ date, name, address }) => {
        return (
            <tr key={Math.random()}>
                {checkboxData[tableId]["date"] && <td>{date}</td>}
                {checkboxData[tableId]["name"] && <td>{name}</td>}
                {checkboxData[tableId]["address"] && <td>{address}</td>}
            </tr>
        )
    })

    return (

        <table>
            <thead>
                <tr>
                    {checkboxData[tableId]["date"] && <th>Date</th>}
                    {checkboxData[tableId]["name"] && <th>Name</th>}
                    {checkboxData[tableId]["address"] && <th>Address</th>}
                </tr>
            </thead>
            <tbody>
                {tableContent}
            </tbody>
        </table>

    );
}

export default Table;
