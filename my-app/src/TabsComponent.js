import React, { useState } from 'react';
import Login from './Login';
import Register from './Register'

const tabItems = [
  {
    id: 1,
    title: 'ورود',
    content: <Login />,
  },
  {
    id: 2,
    title: 'ثبت نام',
    content: <Register/>,
  }

];

const TabsComponent = () => {
  const [active, setActive] = useState(1);

  return (
      <div>
        <span className="tabs d-flex justify-content-center">
          {tabItems.map(({ id, title }) => <TabItemComponent
            key={title}
            title={title}
            onItemClicked={() => setActive(id)}
            isActive={active === id}
          
           
          />
          )}
        </span>
        <div className="content">
          {tabItems.map(({ id, content }) => {
            return active === id ? content : ''
          })}
        </div>
        </div>
  )
}

const TabItemComponent = ({
  icon = '',
  title = '',
  
  onItemClicked = () => console.error('You passed no action to the component'),
  isActive = false,
}) => {
  return (

    <div className={isActive ? 'tabitem' : 'tabitem tabitem--inactive'} style={{width:"100px"}} onClick={onItemClicked}>
      <p className="tabitem__title" style={{marginRight:"20px" , marginLeft:"20px"}} >{title}</p>
    </div>

  )
};

export default TabsComponent