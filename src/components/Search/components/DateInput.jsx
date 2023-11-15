// DateInput.jsx
import { formatDate } from "../../../utils/dateUtil.js";

const DateInput = ({ label, minDate, selectedDate, setSelectedDate, placeholder, disabled }) => {
    const handleDateChange = (e) => {
        const newDate = new Date(e.target.value);
        newDate.setDate(newDate.getDate() + 1);
        setSelectedDate(newDate);
    };

    return (
        <div>
            <p className="text-white mb-2 text-sm">{label}</p>
            <div className="flex relative items-center">
                <input
                    className="w-48 h-10 border text-sm pl-8"
                    type="date"
                    placeholder={placeholder}
                    min={formatDate(minDate)}
                    value={formatDate(selectedDate)}
                    onChange={handleDateChange}
                    disabled={disabled}
                />
            </div>
        </div>
    );
};

export default DateInput;