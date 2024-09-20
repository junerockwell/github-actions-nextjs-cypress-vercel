import "./style.css";

type FormErrorTextType = {
  text: string;
};
export default function FormErrorText(props: FormErrorTextType) {
  const { text } = props;
  return <p className="form-error-text">{text}</p>;
}
