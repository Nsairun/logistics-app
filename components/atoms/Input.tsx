import { ChangeEvent, FC } from 'react';
import { styled } from 'styled-components';

const InputWrapper = styled.div`
  font-size: 16px;
  font-weight: 400;
  width: 200px;
  height: 5vh;
  color: #344054;
  background: grey;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 16px;
  font-weight: 400;
  color: #667085;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 770px) {
    width: 100%;
    background: #fff;
`;

const Error = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #667085;
`;


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
        style={{border: "transparent", width: "200px",
        height: "5vh", outline: "none", padding: "5px"}}
      />
      {error && <Error className="error">Input field cant be empty!</Error>}
      {/* <IconStylingProvider value={iconStyling.value}>
        <FiSearch size={iconStyling.value.size} color={iconStyling.value.color}/>
      </IconStylingProvider> */}
    </InputWrapper>
  );
};

export default Input;