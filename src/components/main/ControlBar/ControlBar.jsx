import { useContext } from 'react';
import './ControlBar.scss';
import { UsersContext } from "../../../context/UserAppContext"
import Button from '../../common/Button/Button';

const ControlBar = ({ showRightSide, tableId }) => {

    const { toggleModal, search, checkboxData, setCheckboxData } = useContext(UsersContext)

    const multyCheckbox = Object.keys({ ...checkboxData[tableId] }).map((el) => {
        return <label className="single-checkbox" key={el}>
            <input
                type="checkbox"
                checked={checkboxData[tableId][el]}
                id={el}
                name={el}
                value={el.toUpperCase()}
                onChange={(e) => { setCheckboxData({ ...checkboxData, [tableId]: { ...checkboxData[tableId], [el]: e.target.checked } }) }} />
            {el}
            <span className="single-checkbox-checkmark"></span>
        </label>
    })


    return (
        <div className="ControlBar">
            <div className="ControlBar-left">{multyCheckbox}</div>
            {
                showRightSide &&
                <div className="ControlBar-right">
                    <div><input type="text" placeholder="Search table" onChange={(e) => { search(e.target.value) }} /></div>
                    <Button onClick={() => toggleModal()} label="Add User" className="ControlBar-right-addUserBtn" />
                </div>
            }
        </div>
    );
}

export default ControlBar;
