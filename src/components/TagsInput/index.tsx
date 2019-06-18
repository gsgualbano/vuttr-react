import React, { useState } from 'react';

import {
 Container, TextInput, RemoveButton, IconContainer, CloseIcon, Text,
} from './styles';
import Tag from './Tag';

/**
 * Propreidades do TagsInput
 */
interface OwnProps {
  /** text input Id */
  id: string;
  /** text input name */
  name: string;
  /** tags array */
  tags: string[];
  /** dispatcher para atualizar as tags */
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

/**
 * TextInput para adicionar tags.
 */
const TagsInput = ({
 id, name, tags, setTags,
}: OwnProps): JSX.Element => {
  // state
  const [text, setText] = useState<string>('');

  // TextInput change
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  // On Press of a Key on the TextInput
  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.keyCode === 32) {
      e.preventDefault();
      setText('');
      setTags([...tags, text]);
    }
  };

  // On the click of the remove icon
  const handleOnClick = (i: number): void => {
    if (i !== -1) {
      setTags((tagsArr: string[]) => tagsArr.filter((_, index) => index !== i));
    }
  };

  return (
    <Container data-testid="tags-input">
      {tags.map((tag: string, i: number) => (
        <Tag key={tag}>
          <Text>{tag}</Text>
          <RemoveButton onClick={() => handleOnClick(i)} data-testid={`remove-${tag}`}>
            <IconContainer>
              <CloseIcon />
            </IconContainer>
          </RemoveButton>
        </Tag>
      ))}
      <TextInput
        id={id}
        name={name}
        value={text}
        placeholder="Add tag and press space"
        onKeyDown={handleKeyDown}
        onChange={handleOnChange}
      />
    </Container>
  );
};

export default TagsInput;
