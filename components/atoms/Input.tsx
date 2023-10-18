import { ChangeEvent, FC } from 'react';
import { styled } from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { IconStylingProvider, IconStylingProviderProps } from '../../hooks/MyIcons';

const InputWrapper = styled.div`
  font-size: 16px;
  font-weight: 400;
  width: 300px;
  height: 5vh;
  color: #344054;
  background: #fff;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 16px;
  font-weight: 400;
  color: #667085;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Error = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #667085;
`;

const iconStyling: IconStylingProviderProps = {
    value: {
        size: '20px',
        color: '#000',
    },
    children: undefined
};

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password';
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  error: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}) => {
  return (
    <InputWrapper>
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <Error className="error">Input field cant be empty!</Error>}
      <IconStylingProvider value={iconStyling.value}>
        <FiSearch size={iconStyling.value.size} color={iconStyling.value.color}/>
      </IconStylingProvider>
    </InputWrapper>
  );
};

export default Input;