import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import EditUserInformation from './EditUserInformation';
import UserInformation from './UserInformation';
import ChangePassword from './ChangePassword'

const PersonalData = () => {
   const [editModeData, setEditModeData] = useState(false)

   return (
      <Container>
         {!editModeData
            ? <UserInformation setEditModeData={setEditModeData} />
            : <EditUserInformation setEditModeData={setEditModeData} />
         }
         <ChangePassword />
      </Container >
   )
}

export default PersonalData
