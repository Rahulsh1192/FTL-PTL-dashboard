import React from 'react';
import "./CustomDateInput.module.css";
import dateIcon from "../../assets/images/Icon-material-date-range.png";
export const CustomDateInput = () => {
    return (
        <div>
            <form>
                <div class="sd-container">
                    <input class="sd" type="date" name="selected_date" />
                    <span class="open-button">
                        <button type="button"><img src={dateIcon} alt="date icon" /></button>
                    </span>
                </div>
            </form>
        </div>
    )
}
