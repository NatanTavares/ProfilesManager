import { Container } from "./styles";

interface InputFieldProps {
  label: string;
  defaultValue?: string;
}

export function InputField({ label, defaultValue = "" }: InputFieldProps) {
  return (
    <Container>
      <label>
        <span>{label}</span>
        <input type="text" defaultValue={defaultValue}></input>
      </label>
    </Container>
  );
}
