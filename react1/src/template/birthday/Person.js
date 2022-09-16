import React from 'react'
import { Button } from 'reactstrap';

const Person = (props) => {
    const {id,name,image,age,deletePerson} = props;
  return (
    <div>
         <div className="card mb-3" style={{maxWidth: '540px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={require(`/${image}`)} className="img-fluid rounded-start"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Age: {age}</p>
            </div>
          </div>
          <Button color="danger" onClick={() => deletePerson(id)}>
    Delete
  </Button>
        </div>
      </div>
    </div>
  )
}

export default Person