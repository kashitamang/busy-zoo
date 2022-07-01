import React from 'react';
import MaterialTable from 'material-table';
import { communityMembers } from '../data';

export default function MyTable() {
  return (
    <div style={{ maxWidth: '100%' }}>
      <h2>Community Members at Busy Zoo</h2>
      <MaterialTable
        columns={
          [
            { title: 'ID', field: 'id' },
            { title: 'First Name', field: 'first_name' },
            { title: 'Last Name', field: 'last_name' },
            { title: 'Gender', field: 'gender' },
            { title: 'Racial or Ethnic Identity', field: 'race' },
            { title: 'Favorite Animal', field: 'favorite_animal' },
          ]
        }
        data={communityMembers}
        title="2022"
        options={{  
          headerStyle: { 
            background: 'lightsalmon',
          },
          rowStyle: { 
            background: 'lemonchiffon',
          }
        }}
      />
    </div>
  );
}
