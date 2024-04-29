export default function InputDateForm({setDateInput}) {

    return (
        <div>
                <input
                    type="datetime-local"
                    onChange={(e) => setDateInput(e.target.value)}/>
                <p>Please Input Date</p>
        </div>
    )
}