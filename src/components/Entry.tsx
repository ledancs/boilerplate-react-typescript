import React from 'react';

export type EntryProps = {
  name: string;
  id: string;
  date: string;
  content: string;
};
export const Entry: React.FC<EntryProps> = ({ date, name, content }) => {
  return (
    <div>
      <h1>{name}</h1>
      <span>{date}</span>
      <p>{content}</p>
    </div>
  )
}
