import Button from '@mui/material/Button';
import React from 'react'
import axios from 'axios'
import { CircularProgress } from '@mui/material';
import { useCurrentUserContext } from '../contexts/CurrentUserContext';
import { useNavigate } from 'react-router-dom';

export default function UploadFile({fadeIn}) {
  const [loading, setLoading] = React.useState(false);
  const { currentUser } = useCurrentUserContext()
  const navigate = useNavigate();

  const _handleUpload = (e) => {
    const dataForm = new FormData();
    dataForm.append('file', e.target.files[0]);
    console.log(dataForm)
    axios
      .post('http://localhost:8063/api/users/upload', dataForm)
      .then(res => {
        setLoading(true);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      {currentUser?.email ?
        loading
          ? <CircularProgress size={40} />
          : <Button
            component="label"
            variant="contained"
            color="primary"
            size="large"
            sx={{ alignItems: 'center', animation: `${fadeIn} 3s ease-in forwards` }}
            onChange={_handleUpload}
          >
            Upload
            <input
              type="file"
              hidden
            />
          </Button>
        : <Button color="primary" variant="contained" size="small" onClick={() => navigate('/signup')}>
          Sign up now!
        </Button>}
    </div >
  )
}

