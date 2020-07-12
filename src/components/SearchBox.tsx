import React from 'react';

interface SearchBoxProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBox: React.FC<SearchBoxProps> = ({ onChange }) => {
  return (
    <nav className="panel">
      <div className="panel-block">
        <p className="control">
          <input onChange={onChange} className="input" type="text" placeholder="Enter a name or ID" />
        </p>
      </div>
    </nav>
  );
}

export default SearchBox;