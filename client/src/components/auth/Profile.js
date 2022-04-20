import { useState, useEffect } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { ProfileView, ProfileImg, H1, H2} from '../../styles/shared';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const Profile = ({ user, updateUser }) => {
  const [editing, setEditing] = useState(false)
  const [formVals, setFormValue] = useState({ fname: '', lname: '', username: '', caption: '', email: '', password: '', id: '', image: null})
  const [file, setFile] = useState()

  useEffect( () => {
    const { fname, lname, caption, username, email, image, password, id } = user
    setFormValue({ fname, lname, caption, username, email, image, password, id })
  }, [])

  const handleFileUpdate = (fileItems) => {
    if (fileItems.length !== 0) {
      setFile(fileItems)
      setFormValue({ ...formVals, image: fileItems[0].file});
    }
  }
  
  const handleFileRemoved = (e, file) => {
     setFile(null)
     setFormValue({ ...formVals, image: null });
  }

  
  
  const profileView = () => {
    const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';
    return (
      <>
        <ProfileView>
          <ProfileImg src={user ? formVals.image : defaultImage } alt="profile_pic" />
          <H1>{formVals.fname} {formVals.lname}</H1>
          <H2>{formVals.caption}</H2>
          <H2></H2>
        </ProfileView>
      </>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user.id, formVals);
    setEditing(false)
    setFormValue({ ...formVals})
  }

  const editView = () => {
    return(
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
          <input
            type="text"
            required
            autoFocus
            name='fname'
            value={formVals.fname}
            placeholder='First Name'
            onChange={(e) => setFormValue({ ...formVals, fname: e.target.value })}
          />
        <label>Last Name</label>
          <input
            type="text"
            required
            name='lname'
            value={formVals.lname}
            placeholder='Last Name'
            onChange={(e) => setFormValue({ ...formVals, lname: e.target.value })}
          />
        <label>Username</label>
          <input
            type="text"
            required
            name='username'
            value={formVals.username}
            placeholder='Username'
            onChange={(e) => setFormValue({ ...formVals, username: e.target.value })}
          />
        <label>Add User Image</label>
        <FilePond
          files={file}
          onupdatefiles={handleFileUpdate}
          onremovefile={handleFileRemoved}
          allowMultiple={false}
          name="image"
          // server="/api"
          // value={formVals.image}
          labelIdle='Drag and Drop your files or <span class="filepond--label-action">Browse</span>'
          onChange={(e) => setFormValue({ ...formVals, image: e.target.value })}
        />
        <label>About You</label>
          <textarea
            name='caption'
            value={formVals.caption}
            placeholder='A Short Description of Who You Are'
            onChange={(e) => setFormValue({ ...formVals, caption: e.target.value })}
          ></textarea>
        <label>Email</label>
          <input
            type="email"
            required
            name='email'
            value={formVals.email}
            placeholder='Email'
            onChange={(e) => setFormValue({ ...formVals, email: e.target.value })}
          />
        <label>Password</label>
          <input
            required
            name='password'
            value={formVals.password}
            placeholder='Password'
            type='password'
            onChange={(e) => setFormValue({ ...formVals, password: e.target.value })}
          />
        {/* <label>Password Confirmation</label>
          <input
            required
            name='passwordConfirmation'
            value={formVals.passwordConfirmation}
            placeholder='Password Confirmation'
            type='password'
            onChange={(e) => setFormValue({ ...formVals, passwordConfirmation: e.target.value })}
          /> */}
        <button type='submit'>Submit</button>
      </form>
    )
  } 


  return (
    <>
        { editing ? editView() : profileView()}
        <div>
          <button onClick={() => setEditing(!editing)}>{editing ? 'Cancel' : 'Edit'}</button>
        </div>
    </>
  )
}


const ConnectedProfile = (props) => (
  <AuthConsumer>
    { auth => <Profile { ...props } { ...auth } /> }
  </AuthConsumer>
)

export default ConnectedProfile;