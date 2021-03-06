import React, { useState } from 'react';
import { Popconfirm, Input } from 'antd';
import { QuestionCircleOutlined, SaveOutlined } from '@ant-design/icons';

const MAX_NAME_LENGTH = 30;

function SaveButton(props) {
  const { projectName, onConfirm } = props;
  const [newProjectName, setProjectName] = useState(
    projectName || 'My Project'
  );

  const handleSubmit = e => {
    newProjectName ? onConfirm(newProjectName) : alert('Please enter a name');
  };

  return (
    <Popconfirm
      title={
        <div style={{ maxWidth: 200 }}>
          <div style={{ marginBottom: 15 }}>
            {projectName
              ? `Overwrite "${projectName}"?`
              : 'What is your project named?'}
          </div>
          {!projectName && (
            <Input
              autoFocus
              value={newProjectName}
              onPressEnter={handleSubmit}
              onChange={({ target: { value } }) => {
                if (value.length < MAX_NAME_LENGTH) setProjectName(value);
              }}
            />
          )}
        </div>
      }
      placement="rightTop"
      okText="Save"
      cancelText="Cancel"
      onConfirm={handleSubmit}
      icon={<QuestionCircleOutlined />}
    >
      <SaveOutlined id="SaveButton" />
    </Popconfirm>
  );
}

export default SaveButton;
