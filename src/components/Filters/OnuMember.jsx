import { useContext } from 'react';
import CountryContext  from '../../context/CountryContext';

export const OnuMember = () => {
    const { setONUMember, setIndependent, independent, ONUMember } = useContext(CountryContext);

    const checkONUMember = (event) => {
        setONUMember(event.target.checked);
        if(event.target.checked) {
            setIndependent(false);
        }
    }

    const checkIndependent = (event) => {
        setIndependent(event.target.checked);
        if(event.target.checked) {
        setONUMember(false);
    }
}
    return (
        <div className="onu-member-filter">
            <p className="onu-member-title">Status</p>
            <div className="onu-member-checkbox-container">
                <div className="is-member">
                    <input
                        type="checkbox"
                        onChange={checkONUMember}
                        checked={ONUMember}
                        name="onu-member"
                        id="onu-member"
                    />
                    <label htmlFor="onu-member">Member of the United Nations</label>
                </div>
            <div className="is-not-member">
                <input
                    type="checkbox"
                    onChange={checkIndependent}
                    checked={independent}
                    name="is-not-onu-member"
                    id="is-not-onu-member"
                />
                <label htmlFor="is-not-onu-member">Independent</label>
            </div>
            </div>
        </div>
    )
}