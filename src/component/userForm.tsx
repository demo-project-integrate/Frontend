import { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    
    // Prepare the data to be sent in the POST request
    const data = {
      field1,
      field2,
      field3,
    };

    try {
      setIsSubmitting(true); // set submitting state to true
      setError(''); // Reset any previous errors

      // Make the POST API call
      const response = await axios.post('https://your-api-url.com/endpoint ', data);
      
      console.log('Response:', response.data); // Handle the response as necessary
      alert('Data submitted successfully!');
    } catch (err) {
      setError('Failed to submit data. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false); // Reset the submitting state
    }
  };

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{marginRight:"10px"}}>Field 1</label>
          <input
            type="text"
            value={field1}
            onChange={(e) => setField1(e.target.value)}
            required
          />
        </div>
        <div>
          <label style={{marginRight:"10px"}}>Field 2</label>
          <input
            type="text"
            value={field2}
            onChange={(e) => setField2(e.target.value)}
            required
          />
        </div>
        <div>
          <label style={{marginRight:"10px"}}>Field 3</label>
          <input
            type="text"
            value={field3}
            onChange={(e) => setField3(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={isSubmitting} style={{ marginTop: '10px' }}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
