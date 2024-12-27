export const OnuMember = () => {
    return (
        <div className="onu-member-filter">
            <p className="onu-member-title">Status</p>
            <div className="onu-member-checkbox-container">
                <div className="is-member">
                    <input type="checkbox" name="onu-member" id="onu-member" />
                    <label htmlFor="onu-member">Member of the United Nations</label>
                </div>
                <div className="is-not-member">
                    <input type="checkbox" name="is-not-onu-member" id="is-not-onu-member" />
                    <label htmlFor="onu-member">Independent</label>
                </div>
            </div>
        </div>
    )
}