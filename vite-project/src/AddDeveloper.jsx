import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Developer from './Developer';

export function AddDeveloper() {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [favoriteLanguage, setFavoriteLanguage] = useState('');
    const [yearStarted, setYearStarted] = useState('');

    const clearForm = () => {
        const form = document.getElementById('devForm');
        if (form) {
            form.reset();
        }

        setFirstName('');
        setLastName('');
        setFavoriteLanguage('');
        setYearStarted('');
    }

    const handleSubmit = (event) => {
        let newDev = new Developer(null,
            firstName,
            lastName,
            favoriteLanguage,
            yearStarted
        );
        console.log('NewDev: ' + newDev);
        event.preventDefault();
        fetch('https://dev-bios-api-dot-cog01hprmn542jqme4w772bk1dxpr.uc.r.appspot.com/developers/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newDev)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                clearForm();
                navigate('/developers'); // Navigate after success
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className="container">
            <h1> Add Developer Bio</h1>
            <div className="row">
                <div className="col-mid-6">
                    <form id="devForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" data-testid="firstName" name="firstName" value={firstName} className="form-control" onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" data-testid="lastName" name="lastName" value={lastName} className="form-control" onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="favoriteLanguage">Favorite Language</label>
                            <input type="text" data-testid="favoriteLanguage" name="favoriteLanguage" value={favoriteLanguage} className="form-control" onChange={(e) => setFavoriteLanguage(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="yearStarted">Year Started</label>
                            <input type="text" data-testid="yearStarted" name="yearStarted" value={yearStarted} className="form-control" onChange={(e) => setYearStarted(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success" >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddDeveloper